const defaultBackgroundColor = '#ffffff';
const defaultFontColor = '#00AFC8';
const defaultIconColor = '#009844';

const styles = {
  typography: {
    large: {
      mr: 3,
      fontFamily: 'get_schwifty',
      display: {
        xs: 'flex',
        md: 'flex',
      },
      color: defaultFontColor,
    },
    small: {
      flexGrow: 1,
      fontFamily: 'Muli',
      display: {
        xs: 'flex',
        md: 'none',
      },
      textAlign: 'center',
      color: defaultFontColor,
    },
    subMenu: {
      fontFamily: 'Muli',
      fontSize: '16px',
      textTransform: 'capitalize',
      align: 'center',
    },
  }
};

// eslint-disable-next-line
export { styles };
