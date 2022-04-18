import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  image: {
    background: '#F8FAFB',
    borderRadius: '5px',
    width: '200px',
    height: '200px',
    transition: '1s linear',
    "&:hover": {
      transition: '1s linear',
      width: '350px'
    },
  },
}
));