/*
Created by: Katherine Aguirre
On: 04/10/2022 : 04/10/2022
Project: rick-and-morty-app
*/
import React, { FC } from 'react';
import { IconButton, MenuItem, Select, TextField } from '@mui/material';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import LastPageIcon from '@mui/icons-material/LastPage';

import cssStyle from './PaginationFooter.module.scss';

interface PropsPaginationFooterComponent {
  pageSize: number;
  pageIndex: number;
  canNextPage: boolean;
  pageCount: number;
  pageOptions: Array<number>;
  canPreviousPage: boolean;
  gotoPage(pageIndex: number): any;
  previousPage(): any;
  nextPage(): any;
  setPageSize(pageSize: number): any;
}

const PaginationFooterDefaultValues: PropsPaginationFooterComponent = {
  pageSize: 5,
  canPreviousPage: false,
  gotoPage: (val) => {},
  nextPage: () => {},
  previousPage: () => {},
  setPageSize: () => {},
  pageOptions: [1],
  canNextPage: false,
  pageIndex: 0,
  pageCount:1
};

const PaginationFooterComponent: FC<any> = (props = PaginationFooterDefaultValues): any => {
  const {
    pageSize,
    setPageSize,
    pageIndex,
    pageOptions,
    gotoPage,
    previousPage,
    canPreviousPage,
    nextPage,
    canNextPage,
    pageCount,
  } = props;

  return (
    <div className={cssStyle.pagination} data-testid='PaginationFooterComponent'>
      Rows per page:{' '}
      <Select
        value={pageSize}
        onChange={(e) => {
          setPageSize(Number(e.target.value));
        }}
        variant="standard"
        style={{
          width: '50px',
          fontSize: '12px',
        }}
        data-testid='select-pagination-footer'
      >
        {[5, 10, 20, 30, 40, 50, 100].map((p) => (
          <MenuItem
            key={p}
            value={p}
            sx={{
              fontSize: 12,
            }}
          >
            {p}
          </MenuItem>
        ))}
      </Select>{' '}
      <span>
        Page{' '}
        <strong>
          {pageIndex + 1} of {pageOptions?.length}
        </strong>{' '}
      </span>
      <span>
        | Go to page:{' '}
        <TextField
          type="number"
          defaultValue={pageIndex + 1}
          InputProps={{
            inputProps: {
              min: 0,
              max: pageOptions?.length,
              step: 1,
            },
            style: {
              fontSize: 12,
              width: 45,
              padding: '9px 0 1px 2px',
            },
          }}
          onChange={(e) => {
            const p = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(p);
          }}
          variant="standard"
          size="small"
          data-testid='goto-page-pagination-footer'
        />
      </span>{' '}
      <IconButton onClick={() => gotoPage(0)} disabled={!canPreviousPage} data-testid='icon-button-first-page-pagination-footer' >
        <FirstPageIcon className={cssStyle.icon} />
      </IconButton>{' '}
      <IconButton onClick={() => previousPage()} disabled={!canPreviousPage} data-testid='icon-button-before-page-pagination-footer' >
        <NavigateBeforeIcon className={cssStyle.icon} />
      </IconButton>{' '}
      <IconButton onClick={() => nextPage()} disabled={!canNextPage} data-testid='icon-button-next-page-pagination-footer' >
        <NavigateNextIcon className={cssStyle.icon} />
      </IconButton>{' '}
      <IconButton onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} data-testid='icon-button-last-page-pagination-footer' >
        <LastPageIcon className={cssStyle.icon} />
      </IconButton>{' '}
    </div>
  );
};

export {
  PaginationFooterComponent,
  PropsPaginationFooterComponent,
  PaginationFooterDefaultValues,
};

