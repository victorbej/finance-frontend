import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
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
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.paper"
                            gutterBottom
                        >
                            Инструменты
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            Данные инструменты помогут пользователю запланировать цели,
                            начать вести собственный блог об инвестициях и финансах,
                            рассчитать стоимость квартиры мечты, совершать только осознанные покупки.
                        </Typography>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <Button sx={{ textAlign: 'center' }} href="/targets" variant="outlined">
                                Конструктор целей
                            </Button>
                            <Button sx={{ textAlign: 'center' }} href="/blog" variant="outlined">
                                Блог
                            </Button>
                            <Button sx={{ textAlign: 'center' }} href="/calculator" variant="outlined">
                                Калькулятор ипотеки
                            </Button>
                            <Button sx={{ textAlign: 'center' }} href="/purchase" variant="outlined">
                                Осознанные пукупки
                            </Button>
                        </Stack>
                    </Container>
                </Box>
            </main>
        </ThemeProvider >
    );
}