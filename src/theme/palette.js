import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';

const palette = {

    black,
    white,
    primary: {
        contrastText: white,
        dark: colors.indigo[900],
        main: colors.indigo[800],
        light: colors.indigo[100]
    },
    secondary: {
        contrastText: white,
        dark: colors.deepPurple[900],
        main: colors.deepPurple[800],
        light: colors.deepPurple[100]
    },
    success: {
        contrastText: white,
        dark: colors.green[900],
        main: colors.green[800],
        light: colors.green[100]
    },
    info: {
        contrastText: white,
        dark: colors.lightBlue[900],
        main: colors.lightBlue[800],
        light: colors.lightBlue[100]
    },
    error: {
        contrastText: white,
        dark: colors.red[900],
        main: colors.red[800],
        light: colors.red[100]
    },
    text: {
        primary: colors.blueGrey[900],
        secondary: colors.blueGrey[600],
        link: colors.blue[600]
    },
    background: {
        default: colors.grey[100],
        paper: white
    },
    icon: colors.blueGrey[600],
    divider: colors.grey[200]
};

export default palette;