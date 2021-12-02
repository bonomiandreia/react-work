import * as React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  input: props => ({
      backgroundColor: props.backgroundColor,
      '& label.Mui-focused': {
        color: '#1F9EBC',
     },
     '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
           borderColor: '#1F9EBC',
        },
     },
  }),
}));

export default useStyles;