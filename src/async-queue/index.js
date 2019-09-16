import * as R from "ramda";
import { throwError } from "..";

function* functionQueue(asyncFunctionArray) {
  for(let i  = 0; i < asyncFunctionArray.length; i++) {
    const result = asyncFunctionArray[i]();
    yield { result, index: i };
  }
};

const asyncQueue =  ({
  asyncFunctionArray,
  concurrentCount = 1,
}) => {
  const queue = functionQueue(asyncFunctionArray);
  let results = [];
  let canceled = false;
  let processing = false;
  let onResponse = () => {};

  const getNextResultFromQueue = async () => {
    let result;
    let queueResponse;
    try {
      queueResponse = queue.next();
      const resultPromise = R.pathOr(Promise.resolve(), ["value", "result"], queueResponse);
      result = await resultPromise;
    } catch(error) {
      result = { error }
    }
    return {
      done: queueResponse.done,
      value: result,
      index: R.path(["value", "index"], queueResponse),
    }
  };

  const worker = async () => {
    if(canceled) {
      return false
    }

    const queueResult = await getNextResultFromQueue();
    if(queueResult.done) {
      return false;
    }

    results[queueResult.index] = queueResult.value;
    onResponse({
      result: queueResult.value,
      allResults: results,
      index: queueResult.index
    });
    return worker();
  };

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