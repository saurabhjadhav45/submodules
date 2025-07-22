import type { Meta, StoryObj } from '@storybook/react';

import Table from './Table';

export default {
  title: 'Table',
  component: Table,
} as Meta<typeof Table>;

const Template: StoryObj<typeof Table> = function TableTemplate(args) {
  const {columns, data, sortableColumns, hasBorder, hasCheckbox, isSearch} =
    args;
  return (
    <div>
      <Table
        columns={columns}
        data={data}
        sortableColumns={sortableColumns}
        hasBorder={hasBorder}
        hasCheckbox={hasCheckbox}
        isSearch={isSearch}
      />
    </div>
  );
};

export const TableComponent = Template.bind({});

TableComponent.args = {
  columns: [
    {title: 'Serial No', dataIndex: 'id', type: 'number'},
    {title: 'User Name on Application', dataIndex: 'name', type: 'string'},
    {title: 'Email', dataIndex: 'email', type: 'string'},
    {title: 'Date(MM/DD/YYYY)', dataIndex: 'date', type: 'date'},
  ],
  data: [
    {
      id: '1',
      name: 'A',
      email: 'john1@email.com',
      date: '01/01/2021',
    },
    {
      id: '2',
      name: 'C',
      email: 'joh2@email.com',
      date: '03/03/2021',
    },
    {
      id: '3',
      name: 'DB',
      email: 'john3@email.com',
      date: '06/06/2021',
    },
    {
      id: '4',
      name: 'F',
      email: 'john4@email.com',
      date: '02/02/2021',
    },
    {
      id: '5',
      name: 'D',
      email: 'john5@email.com',
      date: '08/02/2021',
    },
    {
      id: '6',
      name: 'DA',
      email: 'john6@email.com',
      date: '12/06/2021',
    },
    {
      id: '7',
      name: 'B',
      email: 'john7@email.com',
      date: '11/12/2021',
    },
  ],
  sortableColumns: ['date', 'name'],
  hasBorder: true,
  hasCheckbox: true,
  isSearch: true,
};
