import { FunctionComponent } from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { ContentWrapperComponent } from '../../components/UI/ContentWrapper/ContentWrapper';

import RandMHome from '../../assets/img/RandMHome.png';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IHomePageProps {}

const HomePage: FunctionComponent<IHomePageProps> = () => (
  <CardContent data-testid="HomePagePage">
    <ContentWrapperComponent>
      <Card>
        <Box>
          <h1>Rick and Morty</h1>
        </Box>
        <CardMedia component="img" height="360" image={RandMHome} alt="Rick and Morty" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Rick and Morty is an American adult animated science-fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Networks nighttime programming block Adult Swim. It is distributed internationally by Warner Bros. Domestic
            Television.
          </Typography>
          &nbsp;
          <Typography variant="body2" color="text.secondary">
            The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures that take place across an
            infinite number of realities, often travelling to other planets and dimensions through portals and on Rick flying saucer.
          </Typography>
          &nbsp;
          <Typography variant="body2" color="text.secondary">
            The general concept of Rick and Morty relies on two conflicting scenarios: domestic family drama, and an alcoholic grandfather dragging his grandson into high jinks.
          </Typography>
          &nbsp;
          <Typography variant="h3" color="text.secondary">
            This project is related with the Rick and Morty API and its application with React as UI tool.
          </Typography>
        </CardContent>
      </Card>
    </ContentWrapperComponent>
  </CardContent>
);

export default HomePage;
