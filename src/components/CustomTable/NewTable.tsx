import React, {
  MouseEvent,
  ChangeEventHandler,
  ReactNode,
  useMemo,
  useEffect,
  forwardRef,
  ForwardedRef,
  useImperativeHandle, useState,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Box from '@mui/material/Box';
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Skeleton from '@mui/material/Skeleton';

import {
  Column,
  TableOptions,
  TableState,
  useFilters,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table';
import { useDispatch } from 'react-redux';
import DefaultColumnFilter from './DefaultColumnFilter';
import { setPageFilter } from '../../redux/characters/characters.slice';

export type FetchDataHandler<T extends object> = (state: TableState<T>) => Promise<void>;
export type RowClickHandler<T extends object> = (row: T) => void | Promise<void>;

export interface Resetable {
  reset: () => void
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

const Table = <T extends object>(
  {
    columns,
    data,
    count = 0,
    queryPageIndex,
    queryPageSize = 20,
    queryHiddenColumns = [],
    onFetchData,
    loading,
    onRowClick,
    ...tableOptions
  }: TableProps<T>,
  ref: ForwardedRef<Resetable>) => {
  const dispatch = useDispatch();
  const defaultColumn: Partial<Column<T>> = useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );

  // const [filterValue, setFilterValue] = useState('');

  /* const handleFilterInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;
        setFilterValue(value);
        // setGlobalFilter(value);
        dispatch(setPageFilter(value));
      }; */

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
    // setGlobalFilter
  } = useTable<T>({
      columns,
      data,
      defaultColumn,
      initialState: {
        pageIndex: queryPageIndex,
        pageSize: queryPageSize,
        hiddenColumns: queryHiddenColumns
      },
      manualPagination: true,
      manualFilters: true,
      pageCount: Math.ceil(count / queryPageSize),
      ...tableOptions
    },
    useFilters,
    usePagination
  );

  const preloadRows = useMemo(() =>
      Array(pageSize)
        ?.fill(0)
        ?.map((_, key) => (
          <TableRow key={`preload-empty-${uuidv4()}`}>
            <TableCell colSpan={columns.length}>
              <Skeleton />
            </TableCell>
          </TableRow>
        ))
    , [columns.length, pageSize]);

  const handleRowClick = (row: T) => onRowClick && onRowClick(row);

  const handlePageChange = async (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    console.log('handlePageChange Table--------------------------------- ');
    console.log('pageIndex: ', pageIndex);
    console.log('newPage: ', newPage);
    await onFetchData({
      pageIndex: newPage,
      pageSize,
      sortBy: [],
      filters,
      globalFilter: undefined,
    });
    gotoPage(newPage);
  };

  /* const handleRowsPerPageChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> =
       async (event) => {
         setPageSize(+event.target.value);
         await onFetchData({
           pageIndex,
           pageSize: +event.target.value,
           sortBy: [],
           filters,
           globalFilter: undefined,
         });
       }; */

  const generateFillerRows = () => {
    if (data.length >= pageSize || loading) return;
    // eslint-disable-next-line consistent-return
    return Array(pageSize - data.length).fill(0)
      .map((_, key) => (
        <TableRow key={`empty-${uuidv4()}`}>
          {columns.map((column, cellKey) => (
              <TableCell
                key={`cell-${uuidv4()}`}
              >
                {'\u00A0'}
              </TableCell>
            )
          )}
        </TableRow>
      ));
  };

  console.log('loading pageIndex: ', pageIndex);
  return (
    <Box sx={{ width: '100%' }}>
      {/* <Box display="flex" gap={1} px={1} pb={1}> */}
      {/*  <input placeholder="Filter" onChange={handleFilterInputChange} /> */}
      {/* </Box> */}
      <TableContainer>
        <MuiTable {...getTableProps()} size="small">
          <TableHead>
            {headerGroups.map(headerGroup => (
              <TableRow
                sx={{
                  whiteSpace: 'nowrap'
                }}
                {...headerGroup.getHeaderGroupProps()}
              >
                {headerGroup.headers.map(column => (
                  <TableCell {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()} sx={{
            '& tr': {
              height: '3.5rem',
            }
          }}>
            {
              loading ? preloadRows : (
                <>
                  {page.map((row) => {
                    prepareRow(row);
                    return (
                      <TableRow
                        {...row.getRowProps()}
                        sx={{
                          cursor: 'pointer',
                          whiteSpace: 'nowrap'
                        }}

                        onClick={() => {
                           handleRowClick(row!.original);
                         }}
                      >
                        {row.cells.map((cell) => (
                            <TableCell {...cell.getCellProps()}>
                              {cell.render('Cell')}
                            </TableCell>
                          ))}
                      </TableRow>
                    );
                  })}
                  {generateFillerRows()}
                </>
              )
            }
          </TableBody>
        </MuiTable>
      </TableContainer>
      {pageIndex !== undefined && <TablePagination
          component="div"
          rowsPerPageOptions={[20]}
          count={count}
          page={pageIndex}
          onPageChange={handlePageChange}
          // onRowsPerPageChange={handleRowsPerPageChange}
          rowsPerPage={pageSize}
          showFirstButton
          showLastButton
        />}
    </Box>
  );
};

export default forwardRef(Table) as <T extends object>(
  props: TableProps<T> & { ref?: ForwardedRef<Resetable> }
) => ReturnType<typeof Table>;
