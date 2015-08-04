export default function endPage(paging) {
  if (!paging)
    return false;
  let maxPage = paging.total / paging.page_size;
  return maxPage <= paging.page + 1;
}

