import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        background: { default: "#161616" },
        text: { primary: "#161616", secondary: "rgba(255, 255, 255, .5)" }
    },
});

export default function Main() {
    return (
        <ThemeProvider theme={theme}>
            <main>
                <Box
                    sx={{
                        bgcolor: 'background.primary',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            fontSize="2em"
                            variant="h2"
                            align="center"
                            color="text.paper"
                            gutterBottom
                        >
                            Инструменты
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" fontSize="1em" paragraph>
                            Данные инструменты помогут пользователю запланировать цели,
                            начать вести собственный блог об инвестициях и финансах,
                            рассчитать стоимость квартиры мечты, совершать только осознанные покупки.
                        </Typography>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="column"
                            fontSize="1em"
                            spacing={2}
                            justifyContent="center"
                        >
                            <Link style={{ textAlign: 'center', color: '#1976d2', fontSize: '1em', padding: '1em' }} to="/targets" variant="body2">
                                Конструктор целей
                            </Link>
                            <Link style={{ textAlign: 'center', color: '#1976d2', fontSize: '1em', padding: '1em' }} to="/blog" variant="body2">
                                Блог
                            </Link>
                            <Link style={{ textAlign: 'center', color: '#1976d2', fontSize: '1em', padding: '1em' }} to="/calculator" variant="body2">
                                Калькулятор ипотеки
                            </Link>
                            <Link style={{ textAlign: 'center', color: '#1976d2', fontSize: '1em', padding: '1em' }} to="/purchase" variant="body2">
                                Осознанные пукупки
                            </Link>
                        </Stack>
                    </Container>
                </Box>
            </main>
        </ThemeProvider >
    );
}