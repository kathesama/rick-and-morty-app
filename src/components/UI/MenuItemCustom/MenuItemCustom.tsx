/*
Created by: Katherine Aguirre
On: 02/10/2022 : 02/10/2022
Project: rick-and-morty-app
*/
import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import cssStyle from './MenuItemCustom.module.scss';

interface MainMenuItem {
  keyId?: string;
  onClick?(): any;
  component?: 'a' | typeof Link;
  to?: typeof Link;
  href?: string;
}

interface PropsMenuItemCustomComponent extends MainMenuItem {
  children: any;
}

const MenuItemCustomComponent: FC<any> = ({ keyId, children, component, to, href, onClick }: PropsMenuItemCustomComponent): any => {
  const [menuProperties, setMenuProperties] = useState<MainMenuItem>({});
  useEffect(() => {
    const returnProperties = () => {
      const baseObj: any = {};

      if (keyId) {
        baseObj.key = keyId;
      }
      if (onClick) {
        baseObj.onClick = onClick;
      }
      if (component) {
        baseObj.component = component;
        if (component === 'a' && href) {
          baseObj.href = href;
        } else if (component === 'a' && !href) {
          throw new Error(`Expected a href due ${component} but got undefined`);
        }
        if (component === Link && to) {
          baseObj.to = to;
        }
      }

      return baseObj;
    };
    const objProps = returnProperties();
    setMenuProperties(objProps);
  }, [keyId, component, to, href, onClick]);

  return <MenuItem {...menuProperties}>{children}</MenuItem>;
};

export { MenuItemCustomComponent, PropsMenuItemCustomComponent };
