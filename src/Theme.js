import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme({
    palette: {
        primary: {
            main: "#000000",
            dark: "#000000",
        },
        secondary: {
            main: "#FED5C3",
            light: "#B4C9CE",
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1920,
        },
    },
    typography: {
        fontFamily: "Overpass",
    },
});


const theme = {
    ...defaultTheme,
    components: {
        MuiTextField: {
            root: {
                backgroundColor: "green",
                '& label': {
                    color: '#9BA8AE',
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                h1: {
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "56px",
                    lineHeight: "75px",
                    fontFamily: 'Playfair Display',
                    [defaultTheme.breakpoints.down(900)]: {
                        fontWeight: 700, fontSize: "32px", lineHeight: "43px"
                    },
                },
                h2: {
                    fontFamily: 'Playfair Display',
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "48px",
                    lineHeight: "64px",
                    [defaultTheme.breakpoints.down(900)]: {
                        fontWeight: 600, fontSize: "28px", lineHeight: "37px"
                    },
                },
                h3: {
                    fontFamily: 'Playfair Display',
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "38px",
                    lineHeight: "51px",
                    [defaultTheme.breakpoints.down(900)]: {
                        fontWeight: 600, fontSize: "26px", lineHeight: "35px"
                    },
                },
                h4: {
                    fontFamily: "Overpass",
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "28px",
                    lineHeight: "35px",
                    [defaultTheme.breakpoints.down(900)]: {
                        fontWeight: 600, fontSize: "28px", lineHeight: "35px"
                    },
                },
                h5: {
                    fontFamily: "Overpass",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "25px",
                    lineHeight: "32px",
                    [defaultTheme.breakpoints.down(900)]: {
                        fontSize: "18px",
                    },
                },
                h6: {
                    fontFamily: "Overpass",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "23px",
                    [defaultTheme.breakpoints.down(900)]: {
                        fontSize: "14px",
                    },
                },
                body1: {
                    fontFamily: "Overpass",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "20px",
                    [defaultTheme.breakpoints.down(900)]: {
                        fontSize: "14px",
                    },
                },
                body2: {
                    fontFamily: "Overpass",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "18px",
                    [defaultTheme.breakpoints.down(900)]: {
                        fontSize: "12px",
                    },
                }
            },
        },
    },

};

export default theme;