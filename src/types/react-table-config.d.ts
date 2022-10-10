import {
  UseFiltersColumnOptions,
  UseFiltersColumnProps,
  UseFiltersInstanceProps,
  UseFiltersOptions,
  UseFiltersState,
  UseGlobalFiltersColumnOptions,
  UseGlobalFiltersInstanceProps,
  UseGlobalFiltersOptions,
  UseGlobalFiltersState,
  UsePaginationInstanceProps,
  UsePaginationOptions,
  UsePaginationState,
  UseSortByColumnOptions,
  UseSortByColumnProps,
  UseSortByHooks,
  UseSortByInstanceProps,
  UseSortByOptions,
  UseSortByState,
} from 'react-table';

export interface UseCustomFilterColumnProps<D extends object> {
  filterOptions: { label: string; value: string }[];
  filterLabel: string;
}

declare module 'react-table' {
  export interface TableOptions<D extends object> extends UseFiltersOptions<D>, UseGlobalFiltersOptions<D>, UsePaginationOptions<D>, UseSortByOptions<D> {}

  export interface Hooks<D extends object = Record<string, unknown>> extends UseSortByHooks<D> {}

  export interface TableInstance<D extends object = Record<string, unknown>> extends UsePaginationInstanceProps<D>, UseGlobalFiltersInstanceProps<D>, UseSortByInstanceProps<D>, UseFiltersInstanceProps<D> {}

  export interface TableState<D extends object = Record<string, unknown>> extends UsePaginationState<D>, UseGlobalFiltersState<D>, UseSortByState<D>, UseFiltersState<D> {}

  export interface ColumnInterface<D extends object = Record<string, unknown>> extends UseFiltersColumnOptions<D>, UseGlobalFiltersColumnOptions<D>, UseSortByColumnOptions<D> {}

  export interface ColumnInstance<D extends object = Record<string, unknown>> extends UseFiltersColumnProps<D>, UseSortByColumnProps<D>, UseCustomFilterColumnProps<D> {}
}

export {};
