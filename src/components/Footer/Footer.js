import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        background: { default: "#161616" },
        text: { primary: "#161616", secondary: "rgba(255, 255, 255, .5)" }
    },
});

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/victorbej">
                Victor Bej
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function Footer() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ bgcolor: 'background.primary', p: 2 }} component="footer">
                <Copyright />
            </Box>
        </ThemeProvider>
    );
}


export default Footer;