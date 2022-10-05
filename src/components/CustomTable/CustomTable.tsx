/*
Created by: Katherine Aguirre
On: 04/10/2022 : 18:04
Project: rick-and-morty-app
*/
import React, { useState, FC, useMemo, ReactElement } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Icon } from '@mui/material';
import {
  Column,
  useFilters,
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useRowState,
  useSortBy,
  useTable,
} from 'react-table';
import { useSelector } from 'react-redux';
import { PaginationFooterComponent } from '../PaginationFooter/PaginationFooter';
import { getCharacterPageData } from '../../redux/characters/characters.slice';

import arrowNeutral from '../../assets/icons/arrowNeutral.svg';
import arrowUp from '../../assets/icons/arrowUp.svg';
import arrowDown from '../../assets/icons/arrowDown.svg';

import cssStyle from './CustomTable.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PropsCustomTableComponent<T extends object> {
  data: T[],
  columns: Column<T>[],
  hideHeader?: boolean,
  loading?: boolean,
}

const CustomTableDefaultValues: PropsCustomTableComponent<any> = {
  data: [],
  columns: [],
  hideHeader: false,
  loading: false,
};

const CustomTableComponent = <T extends { id: string }>({
                           columns,
                           hideHeader,
                           data,
                           loading,
                         } : PropsCustomTableComponent<T>): ReactElement => {
  const [state, setState] = useState('');

  const handleFilterInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
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
      state: { pageIndex, pageSize },
      setGlobalFilter,
     } = useTable<T> ({
         columns,
         data,
         defaultColumn,
         initialState: {
           pageIndex: 0,
         },
       },
       useGlobalFilter,
       useSortBy,
       usePagination,
       useRowState,
       useRowSelect
     );

  return (
    <div className={cssStyle.example} data-testid='CustomTableComponent'>
      <input placeholder="Filter" onChange={handleFilterInputChange} />
      <Table {...getTableProps()} className={cssStyle.table} data-testid='table-custom-table-id'>
        <TableHead className={hideHeader ? cssStyle.noDisplay : ''} data-testid='table-head-custom-table-id'>
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
        <TableBody {...getTableBodyProps()} className={cssStyle.body} data-testid='table-body-custom-table-id'>
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
        </TableBody>
      </Table>
      <PaginationFooterComponent
        pageSize={pageSize}
        setPageSize={setPageSize}
        pageIndex={pageIndex}
        pageOptions={pageOptions}
        gotoPage={gotoPage}
        previousPage={previousPage}
        canPreviousPage={canPreviousPage}
        nextPage={nextPage}
        canNextPage={canNextPage}
        pageCount={pageCount}
      />
    </div>
  );
};

export {
  CustomTableComponent,
  PropsCustomTableComponent,
};
