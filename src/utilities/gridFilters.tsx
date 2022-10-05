import Checkbox from '@mui/material/Checkbox';
// A great library for fuzzy filtering/sorting items
import matchSorter from 'match-sorter';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';

import cssClasses from './table.module.scss';

interface IDefaultColumnFilter {
  filterValue: any;
  setFilter(value: any): any;
  width: number;
}

interface IDefaultColumnFilterColumn {
  column: IDefaultColumnFilter;
}

// Define a default UI for filtering
const DefaultColumnFilter = ({ column : { filterValue, setFilter, width } } : IDefaultColumnFilterColumn) => (
  <div className={cssClasses?.border}>
    <TextField
      value={filterValue || ''}
      onChange={(e) => {
        const {
          target: { value },
        } = e;
        // eslint-disable-next-line line-comment-position,no-inline-comments
        setFilter(value || undefined); // Set undefined to remove the filter entirely
      }}
      placeholder="Search"
      variant="standard"
      style={{
        width,
      }}
    />
  </div>
);

/* const fuzzyTextFilterFn = (rows: any, id: any, filterValue: any) => {
     return matchSorter(rows, filterValue, { keys: [(row: any[]) => row?.values[id]] });
   }; */

export {
  // eslint-disable-next-line import/prefer-default-export
  DefaultColumnFilter,
};
