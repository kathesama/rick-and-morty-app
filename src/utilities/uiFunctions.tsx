import React from 'react';
import ContactSupportRoundedIcon from '@mui/icons-material/ContactSupportRounded';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const getGenderIcon = (gender: string) => {
  let output = <ContactSupportRoundedIcon />;
  // eslint-disable-next-line default-case
  switch (gender.toLowerCase()) {
    case 'female':
      output = <FontAwesomeIcon icon="venus" color="fuchsia" size="lg" title={gender} />;
      break;
    case 'male':
      output = <FontAwesomeIcon icon="mars" color="LightSeaGreen" size="lg" title={gender} />;
      break;
    case 'genderless':
      output = <FontAwesomeIcon icon="genderless" color="Teal" size="lg" title={gender} />;
      break;
    case 'unknown':
      output = <FontAwesomeIcon icon="question-circle" color="Chartreuse" size="lg" title={gender} />;
      break;
  }

  return <div>{output}</div>;
};

const getCharStatusIcon = (status: string) => {
  let output = <ContactSupportRoundedIcon />;
  // eslint-disable-next-line default-case
  switch (status.toLowerCase()) {
    case 'alive':
      output = <FontAwesomeIcon icon="heart-pulse" color="LawnGreen" size="lg" title={status} />;
      break;
    case 'dead':
      output = <FontAwesomeIcon icon="skull-crossbones" color="OrangeRed" size="lg" title={status} />;
      break;
    case 'unknown':
      output = <FontAwesomeIcon icon="circle-xmark" color="SlateGrey" size="lg" title={status} />;
      break;
  }

  return <div>{output}</div>;
};


export {
  getGenderIcon,
  getCharStatusIcon
};
