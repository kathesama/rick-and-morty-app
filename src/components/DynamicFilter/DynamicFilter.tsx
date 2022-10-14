/*
Created by: Katherine Aguirre
On: 08/10/2022 : 9:34
Project: rick-and-morty-app
*/
import React, { FC } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FilterCharacter } from '../../../__generated__/globalTypes';
import { CustomInputComponent } from '../UI/CustomInput/CustomInput';
import { CustomSelectComponent } from '../UI/CustomSelect/CustomSelect';

import cssStyle from './DynamicFilter.module.scss';

type TFilterFields = {
  accessor: any;
  filterType: any;
};

interface TFilterExtraData extends Record<string, any> {
  gender?: string[];
  status?: string[];
}

type TExtraCommand = {
  field: string;
  value: null;
};

interface IFilterSchemaExtend extends FilterCharacter, Record<string, any> {}

export interface IFilterSchema {
  actualFilterData: IFilterSchemaExtend | undefined;
  fields: TFilterFields[];
  // eslint-disable-next-line no-unused-vars
  callbackFunction(data: FilterCharacter | TExtraCommand): any;
}

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
    callbackFunction({
      field: 'all',
      value: null,
    });
  };

  return (
    <>
      <Paper className={cssStyle.flexContainer} key="dynamic-selector-paper-key" id="dynamic-selector-paper-id" data-testid="DynamicFilterComponent">
        <Typography variant="subtitle1" key="dynamic-selector-label-key" id="dynamic-selector-label-id" data-testid="label-dynamic-filter-id">
          <FontAwesomeIcon icon="magnifying-glass" color="SlateGrey" size="lg" title={label} />
        </Typography>
        <Box key="dynamic-selector-box-key" id="dynamic-selector-box-id" className={cssStyle.baseStyle}>
          {fields?.map((item: TFilterFields) => {
            const accessor: string = item?.accessor || '';
            const filterType: string = item?.filterType || undefined;

            const actualValue: string = actualFilterData[accessor] ?? '';
            const extraDataValue: string[] = extraData[accessor] ?? '';

            return filterType && filterType === 'inputField' ? (
              <CustomInputComponent label={accessor} variant={variant} actualValue={actualValue} handlerOnChange={dispatchCallbackFunction} />
            ) : (
              <CustomSelectComponent label={accessor} variant={variant} options={extraDataValue} handlerOnChange={dispatchCallbackFunction} actualValue={actualValue} />
            );
          })}
          <Typography className={cssStyle.baseStyleVariant} key="dynamic-selector-label-trash-key" id="dynamic-selector-label-tras-id" data-testid="label-dynamic-filter-trash-id" onClick={cleanFilters}>
            <FontAwesomeIcon icon="trash-restore" color="SlateGrey" size="lg" title="blank filters" />
          </Typography>
        </Box>
      </Paper>
      <Box sx={{ height: 20 }} />
    </>
  );
};

export { DynamicFilterComponent, PropsDynamicFilterComponent };
