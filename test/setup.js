jest.mock('uuid', () => {
  let i = 0;
  return {
    v4: () => {
      i += 1;
      return i.toString();
    },
  };
});