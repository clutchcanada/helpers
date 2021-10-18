import paginatedForEach from './index';

describe('paginatedForEach', () => {
  it('goes through the data page by page', async () => {
    const pageSize = 10;
    const dataLength = 100;

    const dataArray = Array.from(Array(dataLength).keys());
    const getPageMock = jest.fn(page => ({
      rows: dataArray.slice(page * pageSize, (page + 1) * pageSize),
      count: dataLength,
    }));

    let processedDataArray = [];
    const processPageMock = jest.fn(
      dataPage => { processedDataArray = [...processedDataArray, ...dataPage.map(value => value + 1)]; }
    );

    await paginatedForEach({
      pageSize,
      getPage: getPageMock,
      processPage: processPageMock,
    });

    expect(getPageMock).toHaveBeenCalledTimes(dataLength / pageSize);
    expect(processPageMock).toHaveBeenCalledTimes(dataLength / pageSize);

    const expectedResult = Array.from(Array(dataLength).keys()).map(value => value + 1);
    expect(processedDataArray).toEqual(expectedResult);
  });
});
