import './App.scss';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import BlueButton from '../../../src/components/Blue-button/Blue-button';
import useStyles from '../../../src/components/Gray-input/Gray-input';
import linkStyle from '../../../src/components/Link/Link';
import { Formik, Form, useFormik } from 'formik';
import * as yup from 'yup';
import loginService from '../../services/login'
import { history } from '../../history';


function App() {
  const background = { backgroundColor: '#E2E2E2'};
  const classes = useStyles(background);
  const linkStyles = linkStyle();

  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .required('Password is required'),
  });
  
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      loginService(values)
      .then(res => {
        const { data } = res;
        if (data) {
          localStorage.setItem('token', data.token);
          history.go('/posts')
        }
      })
    },
  });

  const onSubmit = (e) => {
    formik.handleSubmit(e);
  }

  return (
    <div className="c-login">
      <div className="c-login__position">
        <h1>Pet Diary</h1>
        <Card sx={{ p: '10% 10%', m: '3% 3%', display: 'flex', alignItems: 'center'}}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <h2>Welcome!</h2>
            </Grid>
            <Formik>
            <Form className="c-login__form">
              <Grid item xs={12} m={2}>
                <TextField
                  id="email"
                  className={classes.input}
                  size="small"
                  label="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} m={2}>
                <TextField
                  id="password"
                  type="password"
                  className={classes.input}
                  size="small"
                  label="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} m={2}>
                <BlueButton type="submit" onClick={onSubmit} name="LOGIN IN"></BlueButton>
              </Grid>
            </Form>
            </Formik>
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
