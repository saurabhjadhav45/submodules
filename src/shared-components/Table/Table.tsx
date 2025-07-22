import moment from 'moment';
import {
  ChangeEvent,
  ReactNode,
  memo,
  useCallback,
  useEffect,
  useState,
} from 'react';

import {ReactComponent as Triangle} from '../../assets/images/triangle.svg';
import Checkbox from '../Checkbox/Checkbox';
import Dropdown from '../Dropdown/Dropdown';
import SearchBar from '../SearchBar/SearchBar';
import './Table.scss';

type Column = {
  dataIndex: string;
  title: ReactNode;
  type: string;
};

type TableData = {[key: string]: string | number | boolean};

interface TableProps {
  columns: Array<Column>;
  data: Array<TableData>;
  sortableColumns: Array<string>;
  hasBorder?: boolean;
  hasCheckbox?: boolean;
  isSearch?: boolean;
  searchField?: string;
}

function Table(props: TableProps) {
  const {
    columns,
    data,
    hasBorder,
    hasCheckbox,
    sortableColumns,
    isSearch,
    searchField,
  } = props;
  const [originalTable, setOriginalTable] = useState([...data]);
  const [tableData, setTableData] = useState([...data]);
  const [sortOrder, setSortOrder] = useState('reset');
  const [sortedColumn, setSortedColumn] = useState('');
  const [columnCheck, setColumnCheck] = useState(false);
  const [fieldSearch, setFieldSearch] = useState(searchField);
  const [searchValue, setSearchValue] = useState('');

  const searchFieldOptions = () => {
    const newArr = columns.filter((item) => item.type !== 'date');
    return newArr.map(({dataIndex, title}, ind) => ({
      id: ind.toString(),
      label: title as string,
      value: dataIndex,
    }));
  };

  useEffect(() => {
    if (hasCheckbox) {
      setTableData(data.map((obj) => ({...obj, checked: false})));
      setOriginalTable(data.map((obj) => ({...obj, checked: false})));
    }
  }, [hasCheckbox, data]);

  useEffect(() => {
    let flag = false;
    tableData.forEach((obj) => {
      if (!obj.checked) {
        setColumnCheck(false);
        flag = true;
      }
    });
    if (tableData.length === 0) {
      flag = true;
    }
    if (!flag) setColumnCheck(true);
  }, [tableData]);

  // sorting the columns handlling.
  const sortHandler = useCallback(
    (e: React.MouseEvent<HTMLElement>, dataIndex: string) => {
      const {name, val} = (e.target as HTMLButtonElement).dataset;
      if (sortableColumns.includes(dataIndex) && name) {
        setSortedColumn(name);
        if (sortOrder === 'reset') {
          setSortOrder('ascending');
          if (val === 'date') {
            const sortData = tableData.sort((a: TableData, b: TableData) =>
              moment(a[name].toString(), 'MM-DD-YYYY').diff(
                moment(b[name].toString(), 'MM-DD-YYYY')
              )
            );
            setTableData([...sortData]);
          } else {
            const sortData = tableData.sort((a: TableData, b: TableData) =>
              a[name] > b[name] ? 1 : -1
            );
            setTableData([...sortData]);
          }
        } else if (sortOrder === 'ascending') {
          setSortOrder('descending');
          if (val === 'date') {
            const sortData = tableData.sort((a: TableData, b: TableData) =>
              moment(b[name].toString(), 'MM-DD-YYYY').diff(
                moment(a[name].toString(), 'MM-DD-YYYY')
              )
            );
            setTableData([...sortData]);
          } else {
            const sortData = tableData.sort((a: TableData, b: TableData) =>
              a[name] > b[name] ? -1 : 1
            );
            setTableData([...sortData]);
          }
        } else {
          setSortOrder('reset');
          setTableData([...originalTable]);
        }
      }
    },
    [originalTable, sortOrder, sortableColumns, tableData]
  );

  // once column checkbox checked then all rows checkbox checked.
  const columnCheckboxHandler = useCallback(() => {
    setColumnCheck(!columnCheck);
    if (columnCheck) {
      setTableData(tableData.map((obj) => ({...obj, checked: false})));
      setOriginalTable(originalTable.map((obj) => ({...obj, checked: false})));
    } else {
      setTableData(tableData.map((obj) => ({...obj, checked: true})));
      setOriginalTable(originalTable.map((obj) => ({...obj, checked: true})));
    }
  }, [columnCheck, originalTable, tableData]);

  // single checkbox check handler
  const rowCheckboxHandler = useCallback(
    (id: string) => {
      setTableData(
        tableData.map((obj: TableData) => {
          if (obj.id === id) {
            return {...obj, checked: !obj.checked};
          }
          return {...obj};
        })
      );
      setOriginalTable(
        originalTable.map((obj: TableData) => {
          if (obj.id === id) {
            return {...obj, checked: !obj.checked};
          }
          return {...obj};
        })
      );
    },
    [originalTable, tableData]
  );

  const filterSearchValue = useCallback(
    (searchedValue: string, field: string) => {
      const arr = originalTable.filter((item) =>
        [`${field}`].some((s) =>
          item[s]
            .toString()
            .toLowerCase()
            .includes(searchedValue.toLocaleLowerCase())
        )
      );
      setTableData(arr);
    },
    [originalTable]
  );

  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value.trim());
  }, []);

  const clearSearch = useCallback(() => setSearchValue(''), []);

  useEffect(() => {
    if (isSearch) {
      setSortedColumn('');
      if (searchValue === '') {
        setTableData(originalTable);
      } else {
        filterSearchValue(searchValue, fieldSearch as string);
      }
    }
  }, [searchValue, isSearch, originalTable, filterSearchValue, fieldSearch]);

  const selectFieldSearch = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setFieldSearch(e.target.value);
  }, []);

  return (
    <div className='table-wrapper'>
      {isSearch && (
        <div className='input-box'>
          <div className='search-dropdown'>
            <Dropdown
              optionsList={searchFieldOptions()}
              onChange={selectFieldSearch}
              placeholder='Field To Search '
              value={fieldSearch}
            />
          </div>
          <div className='search-bar'>
            <SearchBar
              clearText={clearSearch}
              onChange={handleSearch}
              placeholder={`Search by ${fieldSearch}`}
              searchText={searchValue}
              iconPosition='right'
            />
          </div>
        </div>
      )}
      <table className={`main-table ${hasBorder && 'table-border'}`}>
        <thead>
          <tr>
            {hasCheckbox && (
              <th className='checkbox-column'>
                <div className='table-heading-column-cell'>
                  <Checkbox
                    checked={columnCheck}
                    onChange={columnCheckboxHandler}
                    id='mainColumnCheckbox'
                  />
                </div>
              </th>
            )}
            {columns.map((column: Column) => {
              return (
                <th
                  key={column.dataIndex}
                  data-val={column.type}
                  data-name={column.dataIndex}
                  data-order={sortOrder}
                  data-testid={`${column.dataIndex}Id`}
                  onClick={(e) => sortHandler(e, column.dataIndex)}
                  className={`table-heading ${
                    sortableColumns.includes(column.dataIndex) &&
                    'table-sort-heading'
                  }`}>
                  <div
                    className='table-heading-cell'
                    data-val={column.type}
                    data-name={column.dataIndex}>
                    <div
                      className='table-heading-text'
                      data-val={column.type}
                      data-name={column.dataIndex}>
                      {column.title}
                    </div>
                    {sortableColumns.includes(column.dataIndex) && (
                      <div className='sort-icon'>
                        <span
                          data-testid={`${column.dataIndex}UpSortIcon`}
                          className={`up-sort-icon ${
                            sortOrder === 'ascending' &&
                            sortedColumn === column.dataIndex &&
                            'active-sort'
                          }`}>
                          <Triangle />
                        </span>
                        <span
                          data-testid={`${column.dataIndex}DownSortIcon`}
                          className={` ${
                            sortOrder === 'descending' &&
                            sortedColumn === column.dataIndex &&
                            'active-sort'
                          }`}>
                          <Triangle />
                        </span>
                      </div>
                    )}
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {tableData.map((dataItems: TableData) => {
            return (
              <tr key={dataItems.id.toString()} data-testid='table-body-row'>
                {hasCheckbox && typeof dataItems.checked === 'boolean' && (
                  <td className='table-data'>
                    <div className='checkbox-row'>
                      <Checkbox
                        checked={dataItems.checked}
                        onChange={() =>
                          rowCheckboxHandler(dataItems.id.toString())
                        }
                        id={`tableRow${dataItems.id}`}
                      />
                    </div>
                  </td>
                )}
                {columns.map((item: Column) => {
                  return (
                    <td key={item.dataIndex} className='table-data'>
                      {dataItems[item.dataIndex]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default memo(Table);

Table.defaultProps = {
  hasBorder: true,
  hasCheckbox: false,
  isSearch: false,
  searchField: 'name',
};
