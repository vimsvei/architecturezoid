import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  colors } from '@material-ui/core';
import "fontsource-comfortaa";
import shadows from './shadows';
import typography from './typography';

const white = '#FFFFFF';
const appColor = '#0100ca';

const theme = createMuiTheme({
  palette: {
    white,
    background: {
      dark: '#FFFFFB',
      default: colors.common.white,
      paper: colors.common.white
    },
    primary: {
      light: '#9162e4',
      main: '#5e35b1',
      dark: '#280680',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#8bf6ff',
      main: '#4fc3f7',
      dark: '#0093c4',
      contrastText: '#000000',
    },
    error: {
      contrastText: white,
      main: colors.red[900],
    },
    warning: {
      contrastText: white,
      main: colors.orange[900]
    },
    text: {
      main: appColor,
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600]
    }
  },
  shadows,
  typography: {
    fontFamily: 'Cuprum',
    ...typography
  },
});

export default theme;
