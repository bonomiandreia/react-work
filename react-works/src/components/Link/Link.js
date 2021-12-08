import { makeStyles } from '@mui/styles';

const linkStyle = makeStyles(theme => ({
  link: props => ({
    color: props.color ? `${props.color} !important` : '#1F9EBC !important',
  }),
}));

export default linkStyle;