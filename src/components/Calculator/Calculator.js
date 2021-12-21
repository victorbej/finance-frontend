import React from "react";
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import classes from './Calculator.module.scss';

const theme = createTheme({
    palette: {
        background: { default: "#161616" },
        text: { primary: "rgb(255, 255, 255)", secondary: "rgba(255, 255, 255, .5)" }
    },
});

function Calculator() {

    const [savings, setSavings] = React.useState([1600000]);

    function changeSavings(e) {
        setSavings(e.target.value);
    }

    function onlyNumbers(e) {
        if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.container}>
                <div className={classes.wrapper}>
                    <h2 className={classes.title}>Первоначальный взнос</h2>
                    <p className={classes.body}>Прежде чем взять ипотеку на квартиру,
                        нужно накопить на первоначальный взнос —
                        обычно 15% от стоимости жилья.</p>
                    <div className={classes.input}>
                        <TextField id="outlined-basic" label="Накопления" variant="outlined" value={savings} onChange={changeSavings} onKeyPress={onlyNumbers} type="text" />
                        <p>₽</p>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default Calculator;