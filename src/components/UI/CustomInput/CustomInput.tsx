/*
Created by: Katherine Aguirre
On: 08/10/2022 : 12:27
Project: rick-and-morty-app
*/
import React, { useState, FC, useEffect } from 'react';
import { Box, FormControl, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface PropsCustomInputComponent {
  label: string;
  actualValue: string;
  // eslint-disable-next-line no-unused-vars
  handlerOnChange?(input: any): any;
  widthValue?: string;
  variant?: 'filled' | 'outlined' | 'standard';
}

const CustomInputComponent: FC<PropsCustomInputComponent> = ({ label = 'Input field', actualValue, handlerOnChange, widthValue = '', variant = 'outlined' }: PropsCustomInputComponent): any => {
  const [value, setValue] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    setValue(actualValue);
  }, [actualValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const handledValue: string = (event.target.value as string) || '';
    setValue(handledValue);
    if (handlerOnChange)
      handlerOnChange({
        field: event.target.name,
        value: handledValue,
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
      data-testid="CustomInputComponent"
      id={`id-custom-input-box-for-${label}`}
      key={`key-custom-input-box-for-${label}`}
    >
      <FormControl fullWidth data-testid="form-control-select-id" id={`custom-input-form-control-for-${label}`} key={`custom-input-form-control-for-${label}`}>
        <TextField key={`custom-input-key-for-${label}`} id={`custom-input-id-for-${label}`} name={label} label={t(label)} variant={variant} data-testid="form-control-custom-input-id" size="small" value={value} onChange={handleChange} />
      </FormControl>
    </Box>
  );
};

export { CustomInputComponent, PropsCustomInputComponent };
