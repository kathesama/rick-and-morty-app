import React from 'react';
import ContactSupportRoundedIcon from '@mui/icons-material/ContactSupportRounded';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const getGenderIcon = (gender: string) => {
  let output = <ContactSupportRoundedIcon />;
  // eslint-disable-next-line default-case
  switch (gender.toLowerCase()) {
    case 'female':
      output = <FontAwesomeIcon icon="venus" color="fuchsia" size="lg" title="Gender" />;
      break;
    case 'male':
      output = <FontAwesomeIcon icon="mars" color="LightSeaGreen" size="lg" title="Gender" />;
      break;
    case 'genderless':
      output = <FontAwesomeIcon icon="genderless" color="Teal" size="lg" title="Gender" />;
      break;
    case 'unknown':
      output = <FontAwesomeIcon icon="question-circle" color="Chartreuse" size="lg" title="Gender" />;
      break;
  }

  return <div data-testid="ig-grid-icon-for-gender-card-id" id="ig-grid-icon-for-gender-card-id">{output}</div>;
};

const getCharStatusIcon = (status: string) => {
  let output = <ContactSupportRoundedIcon />;
  // eslint-disable-next-line default-case
  switch (status.toLowerCase()) {
    case 'alive':
      output = <FontAwesomeIcon icon="heart-pulse" color="LawnGreen" size="lg" title="Status" />;
      break;
    case 'dead':
      output = <FontAwesomeIcon icon="skull-crossbones" color="OrangeRed" size="lg" title="Status" />;
      break;
    case 'unknown':
      output = <FontAwesomeIcon icon="circle-xmark" color="SlateGrey" size="lg" title="Status" />;
      break;
  }

  return <div data-testid="ig-grid-icon-for-status-card-id" id="ig-grid-icon-for-status-card-id">{output}</div>;
};

const getRandomBanner = () => {
  const randomId = Math.floor(Math.random() * 5 + 1);

  return `banner-0${randomId}.png`;
};

export { getGenderIcon, getCharStatusIcon, getRandomBanner };
