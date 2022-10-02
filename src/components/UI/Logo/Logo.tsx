import React from 'react';
import Avatar from '@mui/material/Avatar';
import { Badge, Stack, styled, Typography } from '@mui/material';
import logo from '../../../assets/img/portalRandM.png';
import { styles } from './Logo.module';
import './Logo.css';

interface LogoProps {
  logoText?: string;
}

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    color: '#44b700',
    backgroundColor: 'transparent',
    '&::after': {
      position: 'absolute',
      top: -18,
      left: -20,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '3px solid currentColor',
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

const Logo = ({ logoText = 'Rick and Morty' }: LogoProps) => (
  <header>
    <div className="wrapper" data-testid="logo-test-id">
      <Stack direction="row" spacing={2}>
        <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot" data-testid="styled-badge-test-id">
          <Typography variant="h6" noWrap component="div" sx={styles.typography.large} data-testid="rick-and-morty-test-id">
            {logoText}
            <Avatar alt={logoText} src={logo} data-testid="avatar-test-id" />
          </Typography>
        </StyledBadge>
      </Stack>
    </div>
  </header>
);

export { LogoProps, Logo };
