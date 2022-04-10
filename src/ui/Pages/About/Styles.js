import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    card: {
        background: "rgba(255, 255, 255, 0.26)",
        border: "1px solid rgba(255, 255, 255, 0.31)",
        boxSizing: "border-box",
        backdropFilter: "blur(13px)",
        borderRadius: "2px",
        padding: '10px',
        width: '268px',
        position: 'absolute',
        bottom: '15px',
        height: '70px',
        transition: "height 1s ease 0s",
        overflow:'hidden',
        cursor:'pointer',
        left: "50%", transform: "translate(-50%, -0%)",
        "&:hover": {
            height: '180px'
        }
        // [theme.breakpoints.down(500)]: {
        //     margin: '50px auto',
        // },
    },
}));