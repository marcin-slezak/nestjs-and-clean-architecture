import * as React from 'react';
import Image from 'next/image'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from '@mui/material/Link';
import styles from './Layout.module.css';

const theme = createTheme();

type LayoutProps = Record<string, unknown>

export const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
    return (<ThemeProvider theme={theme}>
        <CssBaseline />

        <AppBar position="static">
            <Toolbar>
                <Link href="/" underline="none" color="inherit">
                    <Typography variant="h6" component="span">
                        Example Recruitment App
                    </Typography>
                </Link>

            </Toolbar>
        </AppBar>
        <main style={{ backgroundColor: theme.palette.grey[100], paddingTop: 32 }}>
            <Container maxWidth="sm" className={styles.containerMinHeight}>
                {children}
            </Container>
        </main>
        <Box sx={{ bgcolor: 'primary.main', p: 1 }} component="footer">

            <Typography variant="body2" color="primary.contrastText" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://wingedcode.com/">
                    Winged Code
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Box>
    </ThemeProvider>
    )
}