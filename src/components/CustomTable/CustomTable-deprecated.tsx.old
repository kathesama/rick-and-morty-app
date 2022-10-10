/*
Created by: Katherine Aguirre
On: 04/10/2022 : 18:04
Project: rick-and-morty-app
*/
import React, { useState, FC, useMemo, ReactElement, useEffect } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Icon } from '@mui/material';
import { Column, useFilters, useGlobalFilter, usePagination, useRowSelect, useRowState, useSortBy, useTable } from 'react-table';
import { useSelector } from 'react-redux';
import { PaginationFooterComponent } from '../PaginationFooter/PaginationFooter';
// import { getCharacterPageData } from '../../redux/characters/characters.slice';

import arrowNeutral from '../../assets/icons/arrowNeutral.svg';
import arrowUp from '../../assets/icons/arrowUp.svg';
import arrowDown from '../../assets/icons/arrowDown.svg';

import cssStyle from './CustomTable.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PropsCustomTableComponent<T extends object> {
  data: T[];
  columns: Column<T>[];
  hideHeader?: boolean;
  loading?: boolean;
  pageCount?: number;
  // eslint-disable-next-line @typescript-eslint/ban-types
  fetchMoreData?(data: any): any;
}

const CustomTableDefaultValues: PropsCustomTableComponent<any> = {
  data: [],
  columns: [],
  hideHeader: false,
  loading: false,
  pageCount: 1,
  // fetchMoreData(): object[]
};

const CustomTableComponent = <T extends { id: string }>({ columns, data, hideHeader, fetchData, loading, pageCount: controlledPageCount }: any): ReactElement => {
  const [filterValue, setFilterValue] = useState('');
  const handleFilterInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setFilterValue(value);
    setGlobalFilter(value);
  };

  const defaultColumn = React.useMemo(
    () => ({
      minWidth: 30,
      width: 50,
      maxWidth: 200,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageSize, pageIndex },
    setGlobalFilter,
  } = useTable<T>(
    {
      columns,
      data,

      /* defaultColumn, */
      initialState: { pageIndex: 0 },
      manualPagination: true,
      pageCount: controlledPageCount,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowState,
    useRowSelect
  );

  // Listen for changes in pagination and use the state to fetch our new data
  React.useEffect(() => {
    /* if (fetchMoreData) {
     */
    console.log('pageIndex Table: ', pageIndex);
    // eslint-disable-next-line no-param-reassign,no-plusplus
    //   ++pageIndex;
    fetchData({ pageIndex, filterValue });
    // }
  }, [fetchData, filterValue, pageIndex]);

  return (
    <div className={cssStyle.example} data-testid="CustomTableComponent">
      <input placeholder="Filter" onChange={handleFilterInputChange} />
      <Table {...getTableProps()} className={cssStyle.table} data-testid="table-custom-table-id">
        <TableHead className={hideHeader ? cssStyle.noDisplay : ''} data-testid="table-head-custom-table-id">
          {headerGroups?.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell {...column.getHeaderProps()} width={column.width}>
                  <div>
                    {column.render('Header')}
                    <span {...column.getSortByToggleProps()}>
                      {/* eslint-disable-next-line no-nested-ternary */}
                      {column.id !== 'expander' && column.id !== 'selection' ? (
                        // eslint-disable-next-line no-nested-ternary
                        column.isSorted ? (
                          column.isSortedDesc ? (
                            <Icon>
                              <img alt="arrowDown" src={arrowDown} />
                            </Icon>
                          ) : (
                            <Icon>
                              <img alt="arrowUp" src={arrowUp} />
                            </Icon>
                          )
                        ) : (
                          <Icon>
                            <img alt="arrowNeutral" src={arrowNeutral} />
                          </Icon>
                        )
                      ) : null}
                    </span>
                  </div>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()} className={cssStyle.body} data-testid="table-body-custom-table-id">
          {page.map((row) => {
            prepareRow(row);

            return (
              <TableRow {...row.getRowProps()} className={cssStyle.tableRow}>
                {row.cells.map((cell) => (
                  <TableCell {...cell.getCellProps()} className={cssStyle.tableCell}>
                    {cell.render('Cell')}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
          <tr>
            {loading ? (
              // Use our custom loading state to show a loading indicator
              <td>Loading...</td>
            ) : (
              <td>
                Showing {page.length} of ~{controlledPageCount * pageSize} results
              </td>
            )}
          </tr>
        </TableBody>
      </Table>
      <PaginationFooterComponent
        gotoPage={gotoPage}
        setPageSize={setPageSize}
        pageSize={pageSize}
        canPreviousPage={canPreviousPage}
        previousPage={previousPage}
        nextPage={nextPage}
        canNextPage={canNextPage}
        pageCount={pageCount}
        pageIndex={pageIndex}
        pageOptions={pageOptions}
      />
    </div>
  );
};

export { CustomTableComponent, PropsCustomTableComponent };
