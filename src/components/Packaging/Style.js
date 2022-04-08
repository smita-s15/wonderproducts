import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({

  root: {
    maxWidth: 310,
    transition: "transform 0.15s ease-in-out",
    "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
  },

}));