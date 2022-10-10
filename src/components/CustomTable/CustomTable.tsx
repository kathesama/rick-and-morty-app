import React, { MouseEvent, ReactNode, useMemo, forwardRef, ForwardedRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Box, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Skeleton } from '@mui/material';
import MuiTable from '@mui/material/Table';

import { Column, TableOptions, TableState, useFilters, usePagination, useTable } from 'react-table';
import DefaultColumnFilter from './DefaultColumnFilter';
import cssStyle from './CustomTable.module.scss';

// eslint-disable-next-line no-unused-vars
export type FetchDataHandler<T extends object> = (state: TableState<T>) => Promise<void>;
// eslint-disable-next-line no-unused-vars
export type RowClickHandler<T extends object> = (row: T) => void | Promise<void>;

export interface Resetable {
  reset: () => void;
}

type TableProps<T extends object> = {
  data: T[];
  columns: ReadonlyArray<Column<T>>;
  count: number;
  onRowClick?: RowClickHandler<T>;
  queryPageIndex?: number;
  queryPageSize?: number;
  queryHiddenColumns?: string[];
  onFetchData: FetchDataHandler<T>;
  loading: boolean;
  children?: ReactNode;
} & TableOptions<T>;

const CustomTableComponent = <T extends object>({ columns, data, count = 0, queryPageIndex = 0, queryPageSize = 20, queryHiddenColumns = [], onFetchData, loading, onRowClick, ...tableOptions }: TableProps<T>, ref: ForwardedRef<Resetable>) => {
  const defaultColumn: Partial<Column<T>> = useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    state: { pageSize, pageIndex, filters },
    setPageSize,
    gotoPage,
    allColumns,
  } = useTable<T>(
    {
      columns,
      data,
      defaultColumn,
      initialState: {
        pageIndex: queryPageIndex,
        pageSize: queryPageSize,
        hiddenColumns: queryHiddenColumns,
      },
      manualPagination: true,
      manualFilters: true,
      pageCount: Math.ceil(count / queryPageSize),
      ...tableOptions,
    },
    useFilters,
    usePagination
  );

  const preloadRows = useMemo(
    () =>
      Array(pageSize)
        ?.fill(0)
        ?.map((_, key) => (
          <TableRow key={`preload-empty-${uuidv4()}`}>
            <TableCell colSpan={columns.length}>
              <Skeleton />
            </TableCell>
          </TableRow>
        )),
    [columns.length, pageSize]
  );

  const handleRowClick = (row: T) => onRowClick && onRowClick(row);

  const handlePageChange = async (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    await onFetchData({
      pageIndex: newPage,
      pageSize,
      sortBy: [],
      filters,
      globalFilter: undefined,
    });
    gotoPage(newPage);
  };

  const generateFillerRows = () => {
    if (data.length >= pageSize || loading) return;
    // eslint-disable-next-line consistent-return
    return Array(pageSize - data.length)
      .fill(0)
      .map((_, key) => (
        <TableRow key={`empty-${uuidv4()}`}>
          {columns.map((column, cellKey) => (
            <TableCell key={`cell-${uuidv4()}`}>{'\u00A0'}</TableCell>
          ))}
        </TableRow>
      ));
  };

  return (
    <Box sx={{ width: '100%' }} data-testid="CustomTableComponent">
      <TableContainer {...getTableProps()} className={cssStyle.table} data-testid="table-custom-table-id">
        <MuiTable {...getTableProps()} size="small">
          <TableHead data-testid="table-head-custom-table-id">
            {headerGroups.map((headerGroup) => (
              <TableRow
                sx={{
                  whiteSpace: 'nowrap',
                }}
                {...headerGroup.getHeaderGroupProps()}
              >
                {headerGroup.headers.map((column) => (
                  <TableCell {...column.getHeaderProps()}>
                    {column.render('Header')}

                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody
            {...getTableBodyProps()}
            sx={{
              '& tr': {
                height: '3.5rem',
              },
            }}
            data-testid="table-body-custom-table-id"
          >
            {loading ? (
              preloadRows
            ) : (
              <>
                {page.map((row) => {
                  prepareRow(row);
                  return (
                    <TableRow
                      {...row.getRowProps()}
                      sx={{
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                      }}
                      onClick={() => {
                        handleRowClick(row!.original);
                      }}
                    >
                      {row.cells.map((cell) => (
                        <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                      ))}
                    </TableRow>
                  );
                })}
                {generateFillerRows()}
              </>
            )}
          </TableBody>
        </MuiTable>
      </TableContainer>
      <TablePagination
        component="div"
        rowsPerPageOptions={[20]}
        count={count}
        page={pageIndex}
        onPageChange={handlePageChange}
        rowsPerPage={pageSize}
        showFirstButton
        showLastButton
      />
    </Box>
  );
};

// eslint-disable-next-line no-unused-vars
export default forwardRef(CustomTableComponent) as <T extends object>(props: TableProps<T> & { ref?: ForwardedRef<Resetable> }) => ReturnType<typeof CustomTableComponent>;
