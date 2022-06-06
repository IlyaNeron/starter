import { Box, createTheme, CssBaseline, Paper, ThemeProvider, Typography } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import { useAppDispatch, useAppSelector } from '.'
import { useEffect } from 'react'
import { checkConnectedRequest } from './store/app/slice'

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
})

function App() {
  const { connected } = useAppSelector((state) => state.app)
  const dispatch = useAppDispatch()

  console.log('connected', connected)

  useEffect(() => {
    dispatch(checkConnectedRequest())
  }, [dispatch])

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
      </Box>
    </ThemeProvider>
  )
}

export default App
