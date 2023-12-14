import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { purple } from '@mui/material/colors';


let theme = createTheme({

    palette: {
        mode: 'dark',
        primary: {
            main: purple[500],
        },
    },
    typography: {
        fontFamily: "'Josefin Sans', sans-serif;"
    }
});


theme = responsiveFontSizes(theme);

export default theme;