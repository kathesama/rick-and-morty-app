/*
Created by: Katherine Aguirre
On: 16/10/2022 : 14:52
Project: rick-and-morty-app
*/
import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

import esVe from '../../../assets/img/es_ve.png';
import enUS from '../../../assets/img/en_usa.png';

import cssStyle from './LanguageToggleButtons.module.scss';
import { getSettingsLanguage, setLanguage } from '../../../redux/settings/settings.slice';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PropsLanguageToggleButtonsComponent {}

const LanguageToggleButtonsComponent: FC<PropsLanguageToggleButtonsComponent> = (): any => {
  const { i18n } = useTranslation();
  const language = useSelector(getSettingsLanguage);
  const dispatch = useDispatch();

  const handleChange = async (event: React.MouseEvent<HTMLElement>, newLanguage: string) => {
    await i18n.changeLanguage(newLanguage);
    dispatch(setLanguage(newLanguage));
  };

  return (
    <div className={cssStyle.example} data-testid="LanguageToggleButtonsComponent">
      <ToggleButtonGroup color="primary" value={language} exclusive onChange={handleChange} aria-label="Platform" data-testid="btn-language-toggle">
        <ToggleButton value="en" sx={{ padding: 0.8 }} data-testid="btn-language-en-us">
          <img src={enUS} alt="English USA" data-testid="enUSImg" />
        </ToggleButton>
        <ToggleButton value="es" sx={{ padding: 0.8 }} data-testid="btn-language-es-ve">
          <img src={esVe} alt="Spanish Latinoamérica (Venezuela)" data-testid="esVeImg" />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export { LanguageToggleButtonsComponent, PropsLanguageToggleButtonsComponent };
