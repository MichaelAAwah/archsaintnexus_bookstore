import { useState } from 'react';

export interface PaginationState {
  page: number;
  pageSize: number;
}

export function usePagination(initialPageSize: number = 10) {
  const [pagination, setPagination] = useState<PaginationState>({
    page: 1,
    pageSize: initialPageSize,
  });

  const onPageChange = (newPage: number) => {
    setPagination((prev) => ({ ...prev, page: newPage }));
  };

  const onPageSizeChange = (newPageSize: number) => {
    setPagination({ page: 1, pageSize: newPageSize });
  };

  return {
    pagination,
    onPageChange,
    onPageSizeChange,
  };
}