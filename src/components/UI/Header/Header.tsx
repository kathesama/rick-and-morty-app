import React from 'react';
import Avatar from '@mui/material/Avatar';
import { Badge, Box, Grid, Paper, Stack, styled, Typography } from '@mui/material';
import * as url from 'url';
import logo from '../../../assets/img/rickandmortylogo.png';
import banner from '../../../assets/img/rickandmortyname.png';

import { Button } from '../Button/Button';
import { styles } from './Header.module';
import './header.css';

export type User = {
  name: string;
};

export interface HeaderProps {
  // eslint-disable-next-line react/require-default-props
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    color: '#44b700',
    backgroundImage: 'url(\'../../../assets/img/rickandmortylogo.png\')',
    backgroundRepeat: 'no-repeat',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: -12,
      left: -20,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.01)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(4)',
      opacity: 0,
    },
  },
}));

// eslint-disable-next-line import/prefer-default-export
export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <header>
    <div className="wrapper">
      <Stack direction="row" spacing={2}>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Typography variant="h6" noWrap component="div" sx={styles.typography.large}>
            Rick and Morty
            <Avatar alt="Rick and Morty" src={logo}/>
          </Typography>
        </StyledBadge>
      </Stack>
      <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);
