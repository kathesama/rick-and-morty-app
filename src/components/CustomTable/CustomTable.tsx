/*
Created by: Katherine Aguirre
On: 04/10/2022 : 18:04
Project: rick-and-morty-app
*/
import React, { useState, FC, useMemo } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Icon } from '@mui/material';
import { useFilters, usePagination, useRowSelect, useRowState, useSortBy, useTable } from 'react-table';
import { useSelector } from 'react-redux';
import { PaginationFooterComponent } from '../PaginationFooter/PaginationFooter';
import { getCharacterPageData } from '../../redux/characters/characters.slice';

import arrowNeutral from '../../assets/icons/arrowNeutral.svg';
import arrowUp from '../../assets/icons/arrowUp.svg';
import arrowDown from '../../assets/icons/arrowDown.svg';

import cssStyle from './CustomTable.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PropsCustomTableComponent {
  data: any[],
  columns?: any[],
  hideHeader?: boolean,
}

const CustomTableDefaultValues: PropsCustomTableComponent = {
  data: [],
  columns: [],
  hideHeader: false,
};

const CustomTableComponent: FC<any> = (props = CustomTableDefaultValues): any => {
  const [state, setState] = useState('');
  // const { data = [] } = useSelector(getCharacterPageData);

  const {
    columns,
  } = props;

  const {
    hideHeader,
    data,
  } = props;

  const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      prepareRow,
      setFilter,
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
     } = useTable (
       {
         columns,
         data,
         initialState: {
           pageIndex: 0,
         },
       },
       useFilters,
       useSortBy,
       usePagination,
       useRowState,
       useRowSelect
     );

  return (
    <div className={cssStyle.example} data-testid='CustomTableComponent'>
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
