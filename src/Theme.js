import { createTheme } from "@mui/material/styles";
import "@fontsource/playfair-display"
import "@fontsource/overpass"
import "@fontsource/cinzel"

const defaultTheme = createTheme({
    palette: {
        background: {
            default: "#FBFBFB"
        },
        primary: {
            main: "#000000",
            dark: "#B4C9CE",
        },
        secondary: {
            main: "#FED5C3",
            light: "#B4C9CE",
            text: '#FFFFFF'
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
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
                bold: {
                    fontFamily: "Overpass",
                    fontStyle: "normal",
                    fontWeight: 900,
                    fontSize: "228px",
                    textTransform: "uppercase",
                    color: "#BFD3D8",
                    opacity: 0.9,
                    marginBottom: '0',
                    paddingBottom: '0',
                    position: 'absolute', bottom: '0', border: '1px solid red',
                },
                h1: {
                    fontStyle: "Playfair Display",
                    fontWeight: 700,
                    fontSize: "56px",
                    lineHeight: "75px",
                    fontFamily: 'Overpass',
                    [defaultTheme.breakpoints.down(1200)]: {
                        color: 'red',
                    },
                },
                h2: {
                    fontFamily: 'Cinzel',
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "48px",
                    lineHeight: "64px",
                },
                h3: {
                    fontFamily: 'Playfair Display',
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "38px",
                    lineHeight: "51px"
                },
                h4: {
                    fontFamily: "Overpass",
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "28px",
                    lineHeight: "35px"
                },
                h5: {
                    fontFamily: "Overpass",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "25px",
                    lineHeight: "32px"
                },
                h6: {
                    fontFamily: "Overpass",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "23px",
                    
                },
                body1: {
                    fontFamily: "Overpass",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "20px"
                },
                body2: {
                    fontFamily: "Overpass",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "18px"
                }
            },
        },
    },

};

export default theme;