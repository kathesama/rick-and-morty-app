/*
Created by: Katherine Aguirre
On: 08/10/2022 : 11:53
Project: rick-and-morty-app
*/
import React, { useState, FC, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line no-unused-vars
export type dropdownClickHandler<T extends object> = (row: T) => void | string | Promise<void> | Record<string, unknown> | any;

export type SelectCallbackObj = {
  value: string;
  field: string;
};

// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
interface PropsCustomSelectComponent<T extends object> {
  options: string[];
  actualValue: string;
  // eslint-disable-next-line no-unused-vars
  handlerOnChange(value: SelectCallbackObj): Record<string, unknown> | void;
  label: string;
  widthValue?: string;
  variant?: 'filled' | 'outlined' | 'standard';
}

const CustomSelectComponent: FC<PropsCustomSelectComponent<object>> = ({ options, handlerOnChange, label, variant = 'outlined', widthValue = '', actualValue }: PropsCustomSelectComponent<object>): any => {
  const [value, setValue] = useState<string>('');
  const { t } = useTranslation();

  useEffect(() => {
    setValue(actualValue);
  }, [actualValue]);

  const handleChange = (event: SelectChangeEvent) => {
    const index = event.target.value !== 'none' ? event.target.value : '';
    setValue(index);
    handlerOnChange({
      field: label,
      value: index,
    });
  };

  return (
    <Box
      sx={{
        '& > :not(style)': {
          m: 1,
          width: `${widthValue}` || '180px',
        },
      }}
      data-testid="CustomSelectComponent"
      id={`id-custom-select-box-for-${label}`}
      key={`key-custom-select-box-for-${label}`}
    >
      <FormControl fullWidth data-testid="form-control-select-id" key={`custom-select-form-control-for-${label}`}>
        <InputLabel id="custom-selector-input-id-label" data-testid="input-label-select-id" key={`custom-select-input-label-for-${label}`}>
          {t(label)}
        </InputLabel>
        <Select
          labelId="custom-selector-id-label"
          key={`custom-selector-key-for-${label}`}
          id={`custom-selector-id-for-${label}`}
          value={value}
          label={t(label)}
          onChange={handleChange}
          data-testid="select-select-id"
          variant={variant}
          sx={{
            height: '40px',
            textTransform: 'capitalize',
          }}
        >
          <MenuItem value="none" key={`menu-item-key-select-${label}-none`} id={`menu-item-id-select-${label}-none`}>
            <em>None</em>
          </MenuItem>
          {options?.map((item: string) => (
            <MenuItem value={item} key={`menu-item-key-select-${label}-${item}`} id={`menu-item-id-select-${label}-${item}`}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export { CustomSelectComponent, PropsCustomSelectComponent };
