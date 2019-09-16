import * as R from "ramda";

function* functionQueue(asyncFunctionArray) {
  for(let i  = 0; i < asyncFunctionArray.length; i++) {
    const result = asyncFunctionArray[i]();
    yield { result, index: i };
  }
};

//TODO: preserve order
//TODO: handle errors in functions
const asyncQueue =  ({
  asyncFunctionArray,
  concurrentCount = 1,
}) => {
  const queue = functionQueue(asyncFunctionArray);
  let results = [];
  let canceled = false;
  let processing = false;
  let onResponse = () => {};

  const worker = async () => {
    if(canceled) {
      return false
    }
    const streamResponse = queue.next();
    const result = await R.pathOr(Promise.resolve(), ["value", "result"], streamResponse);
    if(streamResponse.done) {
      return false;
    } else {
      results[streamResponse.value.index] = result;
      onResponse({ result, allResults: results });
      return worker();
    }
  }

  const process = async () => {
    processing && throwError("Queue is already processing");
    canceled = false;
    processing = true;
    const workers = [...new Array(concurrentCount)].map(() => worker());
    await Promise.all(workers);
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