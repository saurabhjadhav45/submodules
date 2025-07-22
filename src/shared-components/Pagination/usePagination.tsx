import {useMemo} from 'react';

interface usePaginationProps {
  totalItems: number;
  itemsPerPage: number;
  siblingCount: number;
  currentPage: number;
}

export type PaginationType = Array<string | number> | null;

export const dots = '...';

const range = (start: number, end: number) => {
  const length: number = end - start + 1;
  return Array.from({length}, (_, idx) => idx + start);
};

export const usePagination = ({
  totalItems,
  itemsPerPage,
  siblingCount,
  currentPage,
}: usePaginationProps) => {
  const paginationRange: PaginationType = useMemo(() => {
    const totalPageCount = Math.ceil(totalItems / itemsPerPage);

    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount + 5;

    /*
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    /*
      We do not want to show dots if there is only one position left 
      after/before the left/right page count as that would lead to a change if our Pagination
      component size which we do not want
    */
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 1;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 2 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);
      return [...leftRange, dots, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 2 + 2 * siblingCount;
      const rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPageIndex, dots, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, dots, ...middleRange, dots, lastPageIndex];
    }
    return null;
  }, [totalItems, itemsPerPage, siblingCount, currentPage]);

  return paginationRange;
};
