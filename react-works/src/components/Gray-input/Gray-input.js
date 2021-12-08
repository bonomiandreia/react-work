import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
   input: props => ({
         backgroundColor: props.backgroundColor,
         borderRadius: 10,
         '& label.Mui-focused': {
            color: '#1F9EBC',
         },
         '& .MuiOutlinedInput-root': {
            borderRadius: 10,
            '&.Mui-focused fieldset': {
               borderColor: '#1F9EBC',
         },
      },
   }),
}));

export default useStyles;