import {fireEvent, render, screen} from '@testing-library/react';

import Pagination from './Pagination';

describe('Pagination component', () => {
  it('should able to go next and previous on click', async () => {
    const currentPage = {
      value: 4,
    };
    const setCurrentPage = (page: number) => {
      currentPage.value = page;
    };

    const {getByTestId} = render(
      <Pagination
        className=''
        currentPage={currentPage.value}
        totalItems={100}
        itemsPerPage={5}
        onPageChange={(page) => setCurrentPage(Number(page))}
        siblingCount={2}
      />
    );

    const paginationPreviousButton = getByTestId(
      'paginationPreviousButton'
    ).children;

    const paginationNextButton = getByTestId('paginationNextButton').children;
    fireEvent.click(paginationPreviousButton[0]);
    expect(currentPage.value).toBe(3);

    fireEvent.click(paginationNextButton[0]);
    expect(currentPage.value).toBe(5);
  });

  it('should render pagination previous button disabled', async () => {
    const currentPage = {
      value: 1,
    };
    const setCurrentPage = (page: number) => {
      currentPage.value = page;
    };
    const {getByTestId, getByText} = render(
      <Pagination
        className=''
        currentPage={currentPage.value}
        totalItems={100}
        itemsPerPage={5}
        onPageChange={(page) => setCurrentPage(Number(page))}
        siblingCount={2}
      />
    );
    const paginationPreviousButton = getByTestId(
      'paginationPreviousButton'
    ).children;
    expect(paginationPreviousButton[0]).toHaveClass('disabled');
    const lastPage = getByText('20');
    fireEvent.click(lastPage);
    expect(currentPage.value).toBe(20);
  });

  it('should render pagination next button disabled', async () => {
    const currentPage = {
      value: 20,
    };
    const setCurrentPage = (page: number) => {
      currentPage.value = page;
    };
    const {getByTestId} = render(
      <Pagination
        className=''
        currentPage={currentPage.value}
        totalItems={100}
        itemsPerPage={5}
        onPageChange={(page) => setCurrentPage(Number(page))}
        siblingCount={2}
      />
    );
    const paginationNextButton = getByTestId('paginationNextButton').children;
    expect(paginationNextButton[0]).toHaveClass('disabled');
  });

  it('should render pagination two dots', async () => {
    const currentPage = {
      value: 9,
    };
    const setCurrentPage = (page: number) => {
      currentPage.value = page;
    };
    render(
      <Pagination
        className=''
        currentPage={currentPage.value}
        totalItems={100}
        itemsPerPage={5}
        onPageChange={(page) => setCurrentPage(Number(page))}
        siblingCount={2}
      />
    );
    expect(document.querySelectorAll('.dots')).toHaveLength(2);
  });

  it('should render pagination for single page', async () => {
    const currentPage = {
      value: 1,
    };
    const setCurrentPage = (page: number) => {
      currentPage.value = page;
    };
    render(
      <Pagination
        className=''
        currentPage={currentPage.value}
        totalItems={5}
        itemsPerPage={9}
        onPageChange={(page) => setCurrentPage(Number(page))}
        siblingCount={2}
      />
    );
    expect(document.querySelectorAll('button')).toHaveLength(3);
  });

  it('should not render pagination component', async () => {
    const currentPage = {
      value: 0,
    };
    const setCurrentPage = (page: number) => {
      currentPage.value = page;
    };
    render(
      <Pagination
        className=''
        currentPage={currentPage.value}
        totalItems={0}
        itemsPerPage={0}
        siblingCount={0}
        onPageChange={(page) => setCurrentPage(Number(page))}
      />
    );
    expect(document.querySelectorAll('button')).toHaveLength(2);
  });

  it('should not render outline pagination button', async () => {
    const currentPage = {
      value: 0,
    };
    const setCurrentPage = (page: number) => {
      currentPage.value = page;
    };
    render(
      <Pagination
        className=''
        btnVariant='outlined'
        btnColor='primary'
        currentPage={currentPage.value}
        totalItems={0}
        itemsPerPage={0}
        siblingCount={0}
        onPageChange={(page) => setCurrentPage(Number(page))}
      />
    );
    expect(document.querySelectorAll('button')).toHaveLength(2);
  });

  it('should render input field with page number', async () => {
    const currentPage = {
      value: 1,
    };
    const setCurrentPage = (page: number) => {
      currentPage.value = page;
    };
    render(
      <Pagination
        className=''
        currentPage={currentPage.value}
        totalItems={100}
        btnVariant='text'
        itemsPerPage={10}
        siblingCount={2}
        isInput
        onPageChange={(page) => setCurrentPage(Number(page))}
      />
    );
    const paginationInput = screen.getByTestId('paginationInput');
    fireEvent.change(paginationInput, {target: {value: '3'}});
    expect(currentPage.value).toBe(3);
    fireEvent.change(paginationInput, {target: {value: '0'}});
    expect(currentPage.value).toBe(1);
    fireEvent.change(paginationInput, {target: {value: ''}});
    expect(currentPage.value).toBe(1);
    fireEvent.change(paginationInput, {target: {value: '101'}});
    expect(currentPage.value).toBe(1);
    fireEvent.blur(paginationInput, {target: {value: ''}});
    expect(currentPage.value).toBe(1);
    fireEvent.blur(paginationInput, {target: {value: '3'}});
    expect(currentPage.value).toBe(1);
  });
});
