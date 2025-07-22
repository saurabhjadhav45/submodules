import {
  ReactNode,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import Button, {ButtonProps} from '../Button/Button';
import InputField from '../InputField/InputField';
import NextPageArrow from '../icons/NextpageArrowIcon/NextPageArrow';
import PreviousPageArrow from '../icons/PreviousPageArrowIcon/PreviousPageArrow';
import './Pagination.scss';
import {PaginationType, dots, usePagination} from './usePagination';

export interface IPaginationProps {
  onPageChange: (num: number | string) => void;
  totalItems: number;
  siblingCount: number;
  currentPage: number;
  itemsPerPage: number;
  className: string;
  circularBtn?: boolean;
  btnVariant?: ButtonProps['variant'];
  btnColor?: string;
  isInput?: boolean;
  nextIcon?: ReactNode;
  prevIcon?: ReactNode;
}

function Pagination(props: IPaginationProps) {
  const {
    onPageChange,
    totalItems,
    siblingCount,
    currentPage,
    itemsPerPage,
    className,
    circularBtn,
    btnVariant,
    btnColor,
    isInput,
    nextIcon,
    prevIcon,
  } = props;

  const paginationRange: PaginationType = usePagination({
    currentPage,
    totalItems,
    siblingCount,
    itemsPerPage,
  });

  const lastPage: number | string | null =
    (paginationRange &&
      paginationRange[(paginationRange && paginationRange.length) - 1]) ||
    1;

  const pageBg: IPaginationProps['btnVariant'] = useMemo(
    () => (btnVariant === 'text' ? 'contained' : btnVariant),
    [btnVariant]
  );

  const [pageValue, setPageValue] = useState<string | number>(currentPage);
  const [prevPageValue, setPrevPageValue] = useState<string | number>(
    currentPage
  );

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const {value} = event.target;
      if (lastPage && value === '') {
        setPageValue(value);
      } else if (value === '0') {
        setPageValue('1');
        setPrevPageValue('1');
        return onPageChange('1');
      } else if (lastPage && value <= lastPage) {
        setPageValue(value);
        setPrevPageValue(value);
        return onPageChange(value);
      }
      return onPageChange(prevPageValue);
    },
    [lastPage, onPageChange, prevPageValue]
  );

  const handleBlur = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.value === '') {
        setPageValue(prevPageValue);
        return onPageChange(prevPageValue);
      }
      return onPageChange(pageValue);
    },
    [pageValue, onPageChange, prevPageValue]
  );

  // to move next or prev page
  const handlePageChange = (page: number) => {
    setPageValue(currentPage + page);
    onPageChange(currentPage + page);
  };

  useEffect(() => {
    setPageValue(currentPage);
  }, [currentPage]);

  return (
    <ul className={`pagination-container ${className}`}>
      <li data-testid='paginationPreviousButton'>
        <Button
          type='button'
          size='small'
          color={btnColor}
          variant={btnVariant}
          disabled={currentPage < 2}
          onClick={() => handlePageChange(-1)}
          iconBtn={circularBtn}>
          {prevIcon || (
            <PreviousPageArrow color={currentPage === 1 ? '' : btnColor} />
          )}
        </Button>
      </li>
      <p className='page-text'>Page</p>
      {isInput ? (
        <div className='pagination-data'>
          <div className='pagination-input'>
            <InputField
              value={pageValue.toString()}
              onChange={(e) => handleChange(e)}
              onBlur={(e) => handleBlur(e)}
              id='paginationInput'
              dataTestid='paginationInput'
            />
          </div>

          <p>
            <span className='page-of'>of</span>
            {lastPage}
          </p>
        </div>
      ) : (
        paginationRange &&
        paginationRange.map((pageNumber: string | number) => {
          if (pageNumber === dots) {
            return (
              <li
                key={`pageNumber${Math.random()}`}
                className='pagination-item dots'>
                &#8230;
              </li>
            );
          }
          return (
            <li key={pageNumber}>
              <Button
                size='small'
                type='button'
                iconBtn={circularBtn}
                variant={currentPage === pageNumber ? pageBg : 'text'}
                onClick={() => onPageChange(pageNumber)}>
                {pageNumber}
              </Button>
            </li>
          );
        })
      )}
      <li data-testid='paginationNextButton'>
        <Button
          size='small'
          variant={btnVariant}
          iconBtn={circularBtn}
          color={btnColor}
          type='button'
          disabled={currentPage === lastPage}
          onClick={() => handlePageChange(1)}>
          {nextIcon || (
            <NextPageArrow color={currentPage === lastPage ? '' : btnColor} />
          )}
        </Button>
      </li>
    </ul>
  );
}
Pagination.defaultProps = {
  circularBtn: false,
  btnVariant: 'contained',
  btnColor: 'primary',
  isInput: false,
  nextIcon: '',
  prevIcon: '',
};
export default memo(Pagination);
