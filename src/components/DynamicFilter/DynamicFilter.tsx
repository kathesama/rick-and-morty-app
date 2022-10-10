/*
Created by: Katherine Aguirre
On: 08/10/2022 : 9:34
Project: rick-and-morty-app
*/
import React, { FC } from 'react';
import { Box, Chip, Paper, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FilterCharacter } from '../../../__generated__/globalTypes';
import { CustomInputComponent } from '../UI/CustomInput/CustomInput';
import { CustomSelectComponent } from '../UI/CustomSelect/CustomSelect';

import cssStyle from './DynamicFilter.module.scss';

type TFilterFields = {
  accessor: any;
  filterType: any;
};

type TFilterExtraData = {
  gender?: string[];
  status?: string[];
};

type TExtraCommand = {
  field: string,
  value: null,
};

export interface IFilterSchema {
  actualFilterData: FilterCharacter | undefined;
  fields: TFilterFields[];
  // eslint-disable-next-line no-unused-vars
  callbackFunction(data: FilterCharacter | TExtraCommand ): any;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PropsDynamicFilterComponent {
  data: IFilterSchema;
  extraData?: TFilterExtraData;
  label: string;
  variant: 'filled' | 'outlined' | 'standard';
}

const DynamicFilterComponent: FC<any> = (props: PropsDynamicFilterComponent): any => {
  const {
    data: { actualFilterData = {}, fields = [], callbackFunction },
    extraData = {},
    label = 'Custom filters',
    variant = 'outlined',
  } = props;

  const dispatchCallbackFunction = (value: any) => {
    callbackFunction(value);
  };

  const cleanFilters = () => {
    console.log('cleaning');
    callbackFunction({
      field: 'all',
      value: null,
    });
  };

  return (
    <Paper className={cssStyle.flexContainer} key="dynamic-selector-paper-key" id="dynamic-selector-paper-id" data-testid="DynamicFilterComponent">
      <Typography variant="subtitle1" key="dynamic-selector-label-key" id="dynamic-selector-label-id" data-testid="label-dynamic-filter-id">
        <FontAwesomeIcon icon="magnifying-glass-location" color="SlateGrey" size="lg" title={label} />
      </Typography>
      <Box key="dynamic-selector-box-key" id="dynamic-selector-box-id" className={cssStyle.baseStyle} >
        {fields?.map((item: TFilterFields) => {
          const accessor: string = item?.accessor || '';
          const filterType: string = item?.filterType || undefined;
          // eslint-disable-next-line
          const actualValue: string = eval(`actualFilterData?.${accessor}`) ?? '';
          // eslint-disable-next-line no-eval
          const extraDataValue: string[] = eval(`extraData?.${accessor}`) ?? '';

          return filterType && filterType === 'inputField' ? (
            <CustomInputComponent label={accessor} variant={variant} actualValue={actualValue} handlerOnChange={dispatchCallbackFunction} />
          ) : (
            <CustomSelectComponent label={accessor} variant={variant} options={extraDataValue} handlerOnChange={dispatchCallbackFunction} actualValue={actualValue} />
          );
        })}
        <Typography className={cssStyle.baseStyle} key="dynamic-selector-label-trash-key" id="dynamic-selector-label-tras-id" data-testid="label-dynamic-filter-trash-id" onClick={cleanFilters}>
          <FontAwesomeIcon icon="trash-restore" color="SlateGrey" size="lg" title='blank filters' />
        </Typography>
      </Box>
    </Paper>
  );
};

export { DynamicFilterComponent, PropsDynamicFilterComponent };
