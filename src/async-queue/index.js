import * as R from "Ramda";
function* functionQueue(asyncFunctionArray) {
  for(let i  = 0; i < asyncFunctionArray.length; i++) {
    const result = asyncFunctionArray[i]();
    yield result;
  }
};

const asyncQueue =  ({
  asyncFunctionArray,
  concurrentCount = 1,
}) => {
  const queue = functionQueue(asyncFunctionArray);
  let results = [];
  let onResponse = () => {};
  let canceled = false;
  let processing = false;

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
    processing && throwError("Queue is already processing");
    canceled = false;
    processing = true;
    const consumers = [...new Array(concurrentCount)].map(() => consumer());
    await Promise.all(consumers);
    processing = false;
    return [...results];
  }

  return {
    process,
    onResponse: (fn) => {
      onResponse = fn;
    },
    cancel: () => {
      canceled = true;
    },
  };
}

export default asyncQueue;