import type { Meta, StoryObj } from '@storybook/react';
import {useState} from 'react';

import Pagination from './Pagination';

export default {
  title: 'Pagination',
  component: Pagination,
} as Meta<typeof Pagination>;

const Template: StoryObj<typeof Pagination> = function PaginationTemplate(
  args
) {
  const {
    totalItems,
    itemsPerPage,
    siblingCount,
    currentPage,
    className,
    circularBtn,
    btnVariant,
    isInput,
  } = args;

  const [currentPageState, setCurrentPageState] = useState(currentPage);
  return (
    <Pagination
      className={className}
      currentPage={currentPageState}
      totalItems={totalItems}
      itemsPerPage={itemsPerPage}
      onPageChange={(page: number | string) =>
        setCurrentPageState(Number(page))
      }
      siblingCount={siblingCount}
      circularBtn={circularBtn}
      btnVariant={btnVariant}
      isInput={isInput}
    />
  );
};

export const PaginationComponent = Template.bind({});

PaginationComponent.args = {
  totalItems: 100,
  itemsPerPage: 10,
  siblingCount: 1,
  currentPage: 1,
  isInput: false,
  className: 'pagination-bar',
};
