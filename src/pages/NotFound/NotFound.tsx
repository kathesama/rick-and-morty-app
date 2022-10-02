/*
Created by: Katherine Aguirre
On: 02/10/2022 : 02/10/2022
Project: rick-and-morty-app
*/
import React, { FC } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
// import { Button } from '../../components/UI/Button/Button';

import cssStyle from './NotFound.module.scss';

const NotFoundPage: FC = () => (
  <div className={cssStyle.example} data-testid='not-found-page'>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#96E27B',
      }}
      data-testid='box-not-found-id'
    >
      <Typography variant="h1" style={{ color: 'white' }} data-testid='typography-404-not-found-id'>
        404
      </Typography>
      <Typography variant="h6" style={{ color: 'white' }} data-testid='typography-message-not-found-id'>
        Path not found.
      </Typography>
      <Button
        variant="outlined"
        data-testid='button-home-not-found-id'
        size='large'
        color="error"
        sx={{
          color:'white',
          borderColor: 'white'
        }}
      >
        Back Home
      </Button>
    </Box>
  </div>
);

export {
  // eslint-disable-next-line import/prefer-default-export
  NotFoundPage,
};
