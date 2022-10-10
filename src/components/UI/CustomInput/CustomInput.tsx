/*
Created by: Katherine Aguirre
On: 08/10/2022 : 12:27
Project: rick-and-morty-app
*/
import React, { useState, FC, useEffect, Fragment } from 'react';
import { Box, FormControl, InputLabel, TextField, Theme } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

import cssStyle from './CustomInput.module.scss';

// export type inputClickHandler = (row: string) => void | any | string | Promise<void>;

interface PropsCustomInputComponent {
  label: string;
  actualValue: string;
  // eslint-disable-next-line no-unused-vars
  handlerOnChange?(input: any): any;
  widthValue?: string;
  variant?: 'filled' | 'outlined' | 'standard';
}

const CustomInputComponent: FC<PropsCustomInputComponent> = ({
     label = 'Input field',
     actualValue,
     handlerOnChange,
     widthValue = '',
     variant = 'outlined',
} : PropsCustomInputComponent): any => {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (setValue.length > 0 && value !== actualValue)
      setValue(actualValue);
  }, [actualValue, value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const handledValue: string = event.target.value as string || '';
    // setValue(handledValue);

    if (handlerOnChange) handlerOnChange({
      field: event.target.name,
      value: handledValue,
    } );
  };

  return (
    <Box
      sx={{
        '& > :not(style)': {
          m: 1,
          width: `${widthValue}` || '180px'
        },
      }}
      // className={cssStyle.example}
      data-testid='CustomInputComponent'
    >
      <FormControl fullWidth data-testid='form-control-select-id'>
        <TextField
          id="custom-input-text-field-id"
          name={label}
          label={label}
          variant= {variant}
          data-testid='form-control-custom-input-id'
          size="small"
          value={value}
          onChange={handleChange}
        />
      </FormControl>
    </Box>
  );
};

export {
  CustomInputComponent,
  PropsCustomInputComponent,
};
