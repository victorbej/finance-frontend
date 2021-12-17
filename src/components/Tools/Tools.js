import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        background: { default: "#161616" },
        text: { primary: "#161616", secondary: "rgba(255, 255, 255, .5)" }
    },
});

export default function Tools() {
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
                            <Link sx={{ textAlign: 'center', fontSize: '1em', padding: '1em' }} underline="hover" href="/targets" variant="body2">
                                Конструктор целей
                            </Link>
                            <Link sx={{ textAlign: 'center', fontSize: '1em', padding: '1em' }} underline="hover" href="/blog" variant="body2">
                                Блог
                            </Link>
                            <Link sx={{ textAlign: 'center', fontSize: '1em', padding: '1em' }} underline="hover" href="/calculator" variant="body2">
                                Калькулятор ипотеки
                            </Link>
                            <Link sx={{ textAlign: 'center', fontSize: '1em', padding: '1em' }} underline="hover" href="/purchase" variant="body2">
                                Осознанные пукупки
                            </Link>
                        </Stack>
                    </Container>
                </Box>
            </main>
        </ThemeProvider >
    );
}