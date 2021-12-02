import './App.scss';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function App() {
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
                label="email"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-name"
                label="password"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" size="large" fullWidth>LOGIN IN</Button>
            </Grid>
          </Grid>
        </Card>
      </div>
    </div>
  );
}

export default App;
