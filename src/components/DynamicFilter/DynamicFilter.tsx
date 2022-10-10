/*
Created by: Katherine Aguirre
On: 08/10/2022 : 9:34
Project: rick-and-morty-app
*/
import React, { FC } from 'react';
import { Box, Chip, Paper, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import cssStyle from './DynamicFilter.module.scss';
import { FilterCharacter } from '../../../__generated__/globalTypes';
import { CustomInputComponent } from '../UI/CustomInput/CustomInput';
import { CustomSelectComponent } from '../UI/CustomSelect/CustomSelect';

type TFilterFields = {
  accessor: any;
  filterType: any;
};

type TFilterExtraData = {
  gender?: string[];
  status?: string[];
};

export interface IFilterSchema {
  actualFilterData: FilterCharacter | undefined;
  fields: TFilterFields[];
  // eslint-disable-next-line no-unused-vars
  callbackFunction(data: FilterCharacter): any;
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

  return (
    <Paper className={cssStyle.flexContainer} key="dynamic-selector-paper-key" id="dynamic-selector-paper-id" data-testid="DynamicFilterComponent">
      <Typography variant="subtitle1" key="dynamic-selector-label-key" id="dynamic-selector-label-id" data-testid="label-dynamic-filter-id">
        <Chip icon={<SearchIcon />} label={label} />
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
      </Box>
    </Paper>
  );
};

export { DynamicFilterComponent, PropsDynamicFilterComponent };
