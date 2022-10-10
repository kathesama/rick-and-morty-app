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
  pageSize: 20,
  canPreviousPage: false,
  gotoPage: (val) => {},
  nextPage: () => {},
  previousPage: () => {},
  setPageSize: () => {},
  pageOptions: [1],
  canNextPage: false,
  pageIndex: 0,
  pageCount: 1,
};

const PaginationFooterComponent: FC<any> = (props = PaginationFooterDefaultValues): any => {
  const { pageSize, setPageSize, pageIndex, pageOptions, gotoPage, previousPage, canPreviousPage, nextPage, canNextPage, pageCount } = props;

  return (
    <div className={cssStyle.flexContainer} data-testid="PaginationFooterComponent" id="pagination">
      {/* <div id="pagination-page-size" data-testid="pagination-page-size" className={cssStyle.flexItems} hidden> */}
      {/*  Rows per page:{' '} */}
      {/*  <Select */}
      {/*    value={pageSize} */}
      {/*    onChange={(e) => { */}
      {/*      setPageSize(Number(e.target.value)); */}
      {/*    }} */}
      {/*    variant="standard" */}
      {/*    style={{ */}
      {/*      width: '50px', */}
      {/*      fontSize: '12px', */}
      {/*      textAlign: 'center', */}
      {/*      fontWeight: 'bold', */}
      {/*    }} */}
      {/*    data-testid='select-pagination-footer' */}
      {/*  > */}
      {/*    {[5, 10, 20, 30, 40, 50, 100].map((p) => ( */}
      {/*      <MenuItem */}
      {/*        key={p} */}
      {/*        value={p} */}
      {/*        sx={{ */}
      {/*          fontSize: 12, */}
      {/*        }} */}
      {/*      > */}
      {/*        {p} */}
      {/*      </MenuItem> */}
      {/*    ))} */}
      {/*  </Select> */}
      {/* </div> */}
      <div id="pagination-page-counter" data-testid="pagination-page-counter" className={cssStyle.flexItems}>
        | &nbsp;Page&nbsp;
        <b>
          {pageIndex} of {pageOptions?.length}
        </b>
      </div>
      <div id="pagination-page-navigation" data-testid="pagination-page-navigation" className={cssStyle.flexItems}>
        <span>| Go to page: </span>
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
              width: 30,
              padding: '5px 0 1px 2px',
              fontWeight: 'bold',
            },
          }}
          sx={{ input: { textAlign: 'center' } }}
          onChange={(e) => {
            const p = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(p);
          }}
          variant="standard"
          size="small"
          data-testid="goto-page-pagination-footer"
        />
      </div>
      <div id="buttons-page-navigation" data-testid="buttons-page-navigation" className={cssStyle.flexItems}>
        <IconButton onClick={() => gotoPage(0)} disabled={!canPreviousPage} data-testid="icon-button-first-page-pagination-footer" size="small">
          <FirstPageIcon className={cssStyle.icon} />
        </IconButton>{' '}
        <IconButton onClick={() => previousPage()} disabled={!canPreviousPage} data-testid="icon-button-before-page-pagination-footer" size="small">
          <NavigateBeforeIcon className={cssStyle.icon} />
        </IconButton>{' '}
        <IconButton onClick={() => nextPage()} disabled={!canNextPage} data-testid="icon-button-next-page-pagination-footer" size="small">
          <NavigateNextIcon className={cssStyle.icon} />
        </IconButton>{' '}
        <IconButton onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} data-testid="icon-button-last-page-pagination-footer" size="small">
          <LastPageIcon className={cssStyle.icon} />
        </IconButton>{' '}
      </div>
    </div>
  );
};

export { PaginationFooterComponent, PropsPaginationFooterComponent, PaginationFooterDefaultValues };
