import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    card: {
        width: "180px",
        height: "235px",
        margin:'0 auto',
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
    hover_box: {
        height: 'auto',
        background: "#FFFFFF",
        boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.06)",
        borderRadius: "10px"
    }
}));
