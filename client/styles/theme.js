import { createTheme } from '@mui/material/styles'

export const theme = createTheme ({
  palette: {
    type: 'light',
    primary: {
      main: '#c56b02',
    },
    secondary: {
      main: '#3f6c51',
    },
    info: {
      main: '#598e17',
    },
  },
  typography: {
    fontSize: 16,
    h1: {
      fontFamily: '"Bree Serif", "Helvetica", "Arial", sans-serif',
    },
    h2: {
      fontFamily: '"Bree Serif", "Helvetica", "Arial", sans-serif',
    },
    fontFamily: '"Nobile", "Helvetica", "Arial", sans-serif',
    h3: {
      fontFamily: '"Bree Serif", "Helvetica", "Arial", sans-serif',
    },
    h4: {
      fontFamily: '"Bree Serif", "Helvetica", "Arial", sans-serif',
    },
    h5: {
      fontFamily: '"Bree Serif", "Helvetica", "Arial", sans-serif',
    },
    h6: {
      fontFamily: '"Bree Serif", "Helvetica", "Arial", sans-serif',
    },
    body1: {
      fontWeight: 400,
    },
  },
  props: {
    MuiAppBar: {
      color: 'secondary',
    },
  },
  shape: {
    borderRadius: 4,
  },
});
