import {fireEvent, render, screen, waitFor} from '@testing-library/react';

import Table from './Table';

describe('Table component', () => {
  const columns = [
    {title: 'Serial No', dataIndex: 'id', type: 'number'},
    {title: 'Name', dataIndex: 'name', type: 'string'},
    {title: 'Email', dataIndex: 'email', type: 'string'},
    {title: 'Date(MM/DD/YYYY)', dataIndex: 'date', type: 'date'},
  ];
  const data1 = [
    {
      id: '1',
      name: 'B',
      email: 'john1@email.com',
      date: '01/01/2021',
    },
    {
      id: '2',
      name: 'A',
      email: 'joh2@email.com',
      date: '03/03/2021',
    },
    {
      id: '3',
      name: 'G',
      email: 'joh3@email.com',
      date: '04/04/2021',
    },
    {
      id: '4',
      name: 'F',
      email: 'joh4@email.com',
      date: '01/04/2021',
    },
  ];
  const sortableColumns = ['date', 'name'];
  it('should render Table with content', async () => {
    render(
      <Table
        columns={columns}
        data={data1}
        sortableColumns={sortableColumns}
        hasCheckbox
        hasBorder
      />
    );
  });
  it('should render Table with sort data content', async () => {
    render(
      <Table columns={columns} data={data1} sortableColumns={sortableColumns} />
    );
    const nameColumn = await waitFor(() => screen.getByTestId('nameId'));

    fireEvent.click(nameColumn);
    const nameUpSortIcon = await waitFor(() =>
      screen.getByTestId('nameUpSortIcon')
    );
    expect(nameUpSortIcon).toHaveClass('active-sort');

    fireEvent.click(nameColumn);
    const nameDownSortIcon = await waitFor(() =>
      screen.getByTestId('nameDownSortIcon')
    );
    expect(nameDownSortIcon).toHaveClass('active-sort');

    fireEvent.click(nameColumn);
    const emailColumn = await waitFor(() => screen.getByTestId('emailId'));
    fireEvent.click(emailColumn);

    const dateColumn = await waitFor(() => screen.getByTestId('dateId'));
    fireEvent.click(dateColumn);
    const dateUpSortIcon = await waitFor(() =>
      screen.getByTestId('dateUpSortIcon')
    );
    expect(dateUpSortIcon).toHaveClass('active-sort');
    fireEvent.click(dateColumn);
    const dateDownSortIcon = await waitFor(() =>
      screen.getByTestId('dateDownSortIcon')
    );
    expect(dateDownSortIcon).toHaveClass('active-sort');
    fireEvent.click(dateColumn);
    fireEvent.click(dateColumn);
    fireEvent.click(nameColumn);
    expect(nameDownSortIcon).toHaveClass('active-sort');
  });
  it('should click all checkbox from column', async () => {
    render(
      <Table
        columns={columns}
        data={data1}
        sortableColumns={sortableColumns}
        hasCheckbox
        hasBorder
      />
    );
    fireEvent.click(document.getElementById('mainColumnCheckbox') as Element);
    fireEvent.click(document.getElementById('mainColumnCheckbox') as Element);
    fireEvent.click(document.getElementById('tableRow1') as Element);
  });
  it('should search functionality', async () => {
    render(
      <Table
        columns={columns}
        data={data1}
        sortableColumns={sortableColumns}
        hasCheckbox
        hasBorder
        isSearch
      />
    );
    const searchbox = screen.getByRole('textbox');
    expect(searchbox).toBeInTheDocument();
    const dropdown = screen.getByRole('combobox');
    expect(dropdown).toBeInTheDocument();

    expect(screen.getAllByTestId('table-body-row')).toHaveLength(4);

    fireEvent.click(dropdown);
    fireEvent.change(dropdown, {target: {value: 'name'}});

    fireEvent.change(searchbox, {target: {value: 'a'}});
    expect(screen.getAllByTestId('table-body-row')).toHaveLength(1);

    const clearBtn = screen.getByTestId('clear-btn');
    expect(clearBtn).toBeInTheDocument();

    fireEvent.click(clearBtn);
    expect(clearBtn).toHaveValue('');

    fireEvent.change(searchbox, {target: {value: 'z'}});
    expect(screen.queryAllByTestId('table-body-row')).toHaveLength(0);
  });
});
