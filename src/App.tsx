import { useEffect } from 'react';
import { Box, createTheme, CssBaseline, Paper, ThemeProvider, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useTranslation } from 'react-i18next';

import { ReactQueryExample } from 'components/common/ReactQueryExample';

import { useAppDispatch, useAppSelector } from './';
import { checkConnectedRequest } from './store/app/slice';

const theme = createTheme({
  palette: {
    primary: {
      light: '#63b8ff',
      main: '#0989e3',
      dark: '#005db0',
      contrastText: '#000',
    },
    secondary: {
      main: '#4db6ac',
      light: '#82e9de',
      dark: '#00867d',
      contrastText: '#000',
    },
  },
});

export const App = () => {
  const { connected } = useAppSelector(state => state.app);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  console.log('connected', t('success'));

  useEffect(() => {
    console.log('connected', connected);

    dispatch(checkConnectedRequest());
  }, [connected, dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        height='100vh'
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
      >
        <Paper elevation={3} sx={{ padding: '1rem', backgroundColor: 'secondary.light' }}>
          <Typography color='primary.dark' variant='h1'>
            Starter App
          </Typography>
          <LoadingButton loading>Test</LoadingButton>
        </Paper>
        <ReactQueryExample />
      </Box>
    </ThemeProvider>
  );
};
