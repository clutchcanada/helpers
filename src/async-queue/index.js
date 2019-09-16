function* functionQueue(asyncFunctionArray){
  for(let i  = 0; i < asyncFunctionArray.length; i++) {
    const result = asyncFunctionArray[i]();
    yield result;
  }
};

//TODO: Cancel, pause

const asyncQueue =  ({
  asyncFunctionArray,
  concurrentCount = 1,
}) => {
  const queue = functionQueue(asyncFunctionArray);
  let results = [];
  let onResponse = () => {};
  let canceled = false;

  let onFinish = () => {};
  const consumer = async () => {
    const streamResponse = queue.next();
    const result = await streamResponse.value;
    if(streamResponse.done || canceled) {
      return Promise.resolve();
    } else {
      results.push(result);
      onResponse({ result, allResults: results });
      return consumer()
    }
  }

  const start = async () => {
    const consumers = [...new Array(concurrentCount)].map(() => consumer());
    await Promise.all(consumers);
    onFinish({ results })
  }

  return {
    start,
    onResponse: (fn) => {
      onResponse = fn;
    },
    onFinish: async (fn) => {
      onFinish = fn;
    },
    cancel: () => {
      cancelled = true;
    }
  };
}

export default asyncQueue;