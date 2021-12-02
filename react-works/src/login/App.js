import './App.scss';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import BlueButton from '../components/Blue-button/Blue-button';
import useStyles from '../components/Gray-input/Gray-input';


function App() {
  const styleProps = { backgroundColor: '#E2E2E2'};
  const classes = useStyles(styleProps);

  return (
    <div className="c-login">
      <div className="c-login__position">
        <h1>Pet Diary</h1>
        <Card sx={{ p: '10% 10%', m: '3% 3%', display: 'flex', alignItems: 'center'}}>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <h2>Welcome!</h2>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-name"
                className={classes.input}
                size="small"
                label="email"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-name"
                className={classes.input}
                size="small"
                label="password"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <BlueButton onClick={() => { console.log("button clicked");}} name="LOGIN IN"></BlueButton>
            </Grid>
            <Grid item xs={12}>
            <Link
                component="button"
                variant="body2"
              >
                Create an account!
            </Link>
            </Grid>
          </Grid>
        </Card>
      </div>
    </div>
  );
}

export default App;
