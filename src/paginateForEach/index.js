async function paginatedForEach({ pageSize, getPage, processPage, logger, progressLog }) {
  let pageIndex = 0;
  let finished = false;

  while (!finished) {
    // eslint-disable-next-line no-await-in-loop
    const { count, rows = [] } = await getPage(pageIndex);

    // eslint-disable-next-line no-unused-expressions
    logger && logger.info({
      progress: `${pageIndex * pageSize + rows.length}/${count}`,
    }, progressLog);


    if (rows.length) {
      // eslint-disable-next-line no-await-in-loop
      await processPage(rows);
    }

    pageIndex++;
    if (pageIndex * pageSize >= count) {
      finished = true;
    }
  }
}

export default paginatedForEach;
