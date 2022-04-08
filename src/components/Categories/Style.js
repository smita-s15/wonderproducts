import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    card: {
        width: "180px",
        height: "235px",
        background: "rgba(254, 213, 195, 0.16)",
        borderRadius: "10px",
        transition: '1s ease',
        cursor: 'pointer',
        textAlign: 'center',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '30px',
        "&:hover": {
            background: '#FED5C3'
        }
        // [theme.breakpoints.down(500)]: {
        //     margin: '50px auto',
        // },
    },
}));