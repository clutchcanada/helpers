import * as R from "Ramda";
function* functionQueue(asyncFunctionArray) {
  for(let i  = 0; i < asyncFunctionArray.length; i++) {
    const result = asyncFunctionArray[i]();
    yield result;
  }
};

//TODO: Error handle process being called whilst processing
// Refactor
const asyncQueue =  ({
  asyncFunctionArray,
  concurrentCount = 1,
}) => {
  const queue = functionQueue(asyncFunctionArray);
  let results = [];
  let onResponse = () => {};
  let canceled = false;

  const consumer = async () => {
    if(canceled) {
      return false
    }
    const streamResponse = queue.next();
    const result = await streamResponse.value;
    if(streamResponse.done) {
      return false;
    } else {
      results.push(result);
      onResponse({ result, allResults: results });
      return consumer()
    }
  }

  const process = async () => {
    canceled = false;
    const consumers = [...new Array(concurrentCount)].map(() => consumer());
    await Promise.all(consumers);
    return [...results];
  }

  return {
    process,
    onResponse: (fn) => {
      onResponse = fn;
    },
    onFinish: async (fn) => {
      onFinish = fn;
    },
    cancel: () => {
      canceled = true;
    },
  };
}

export default asyncQueue;