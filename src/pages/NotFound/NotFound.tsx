/*
Created by: Katherine Aguirre
On: 02/10/2022 : 02/10/2022
Project: rick-and-morty-app
*/
import React, { FC } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFoundPage: FC = () => {
  const navigate = useNavigate();

  return (
    <div data-testid="not-found-page">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: '#96E27B',
        }}
        data-testid="box-not-found-id"
      >
        <Typography variant="h1" style={{ color: 'white' }} data-testid="typography-404-not-found-id">
          404
        </Typography>
        <Typography variant="h6" style={{ color: 'white' }} data-testid="typography-message-not-found-id">
          Path not found.
        </Typography>
        <Button
          variant="outlined"
          data-testid="button-home-not-found-id"
          size="large"
          color="error"
          sx={{
            color: 'white',
            borderColor: 'white',
          }}
          onClick={() => {
            navigate(`/`);
          }}
        >
          Back Home
        </Button>
      </Box>
    </div>
  );
};

export {
  // eslint-disable-next-line import/prefer-default-export
  NotFoundPage,
};
