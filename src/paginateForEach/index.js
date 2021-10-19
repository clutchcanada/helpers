async function paginatedForEach({ pageSize = 100, getPage, processPage, logger, progressLog }) {
  let pageIndex = 0;
  let finished = false;
  let results = [];

  while (!finished) {
    // eslint-disable-next-line no-await-in-loop
    const { count, rows = [] } = await getPage(pageIndex, pageSize);

    // eslint-disable-next-line no-unused-expressions
    logger && logger.info({
      progress: `${pageIndex * pageSize + rows.length}/${count}`,
    }, progressLog);


    if (rows.length) {
      // eslint-disable-next-line no-await-in-loop
      const result = await processPage(rows);
      if (result instanceof Array) {
        results = [...results, ...result];
      }
    }

    pageIndex++;
    if (pageIndex * pageSize >= count) {
      finished = true;
    }
  }

  return results;
}

export default paginatedForEach;
