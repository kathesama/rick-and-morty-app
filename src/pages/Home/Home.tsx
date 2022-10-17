import { FunctionComponent } from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { ContentWrapperComponent } from '../../components/UI/ContentWrapper/ContentWrapper';

import RandMHome from '../../assets/img/RandMHome.png';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IHomePageProps {}

const HomePage: FunctionComponent<IHomePageProps> = () => {
  const { t } = useTranslation();

  return (
    <CardContent data-testid="HomePagePage">
      <ContentWrapperComponent>
        <Card>
          <Box>
            <h1>{t('titleMessage')}</h1>
          </Box>
          <CardMedia component="img" height="360" image={RandMHome} alt="Rick and Morty" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {t('BodyMessagePartA')}
            </Typography>
            &nbsp;
            <Typography variant="body2" color="text.secondary">
              {t('BodyMessagePartB')}
            </Typography>
            &nbsp;
            <Typography variant="body2" color="text.secondary">
              {t('BodyMessagePartC')}
            </Typography>
            &nbsp;
            <Typography variant="h3" color="text.secondary">
              {t('footerMessage')}
            </Typography>
          </CardContent>
        </Card>
      </ContentWrapperComponent>
    </CardContent>
  );
};

export default HomePage;
