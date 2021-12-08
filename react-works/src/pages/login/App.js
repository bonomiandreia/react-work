import './App.scss';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import BlueButton from '../../../src/components/Blue-button/Blue-button';
import useStyles from '../../../src/components/Gray-input/Gray-input';
import linkStyle from '../../../src/components/Link/Link';


function App() {
  const background = { backgroundColor: '#E2E2E2'};
  const classes = useStyles(background);
  const linkStyles = linkStyle();

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
                className={linkStyles.link}
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
