/*
Created by: Katherine Aguirre
On: 13/10/2022 : 13/10/2022
Project: rick-and-morty-app
*/
import React, { FC } from 'react';
import { Chip } from '@mui/material';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface PropsCustomChipComponent {
  label: string;
  icon: IconProp | undefined;
  iconColor?: string;
  // eslint-disable-next-line no-unused-vars
  callBackFunction?: (value: string) => any;
  url?: string;
  fontSize?: number;
  isButton?: boolean;
}

const CustomChipComponent: FC<any> = ({ fontSize = 12, label = 'TestTitle', iconColor = 'Black', url = undefined, icon = undefined, callBackFunction = undefined, isButton = true }: PropsCustomChipComponent): any => {
  const iconToShow = icon ? <FontAwesomeIcon icon={icon} color={iconColor} size="lg" title={label} /> : undefined;

  const searchIcon = url ? <FontAwesomeIcon icon="magnifying-glass" size="lg" title={label} /> : undefined;

  const onClickHandler = () => {
    if (callBackFunction && url) {
      callBackFunction(url);
    }
  };

  return (
    <Chip
      data-testid={`CustomChipComponent-${label.trim().toLowerCase()}`}
      icon={iconToShow}
      variant="outlined"
      sx={{
        '& .MuiChip-label': {
          fontSize,
        },
      }}
      onClick={isButton && callBackFunction && url ? onClickHandler : undefined}
      label={label}
      onDelete={!isButton && callBackFunction && url ? onClickHandler : undefined}
      deleteIcon={!isButton ? searchIcon : undefined}
    />
  );
};

export { CustomChipComponent, PropsCustomChipComponent };
