import React, { useState } from "react";
import { Avatar, Button, TextField, Link, Paper, Grid } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display:"flex",
    flexDirection:"column",
    alignItems: "center",
    marginTop:"1rem",
    padding: "1rem"
  },
  paperContainer: {
    margin: theme.spacing(8, 4),
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"

  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {

  const [validationError, setValidationError] = useState({});

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const classes = useStyles();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    clearError(name);
  };

  const clearError = (fieldName) => {
    setValidationError({
      ...validationError,
      [fieldName]: "",
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    // Your backend api logic
  };

  return (
    <Grid container component="main" className={classes.root}>
      
      <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
        <Paper className={classes.paperContainer}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          
          <form className={classes.form} noValidate>
            <TextField
              error={!!validationError.email}
              helperText={validationError.email && validationError.email[0]}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={values.email}
              onChange={handleChange}
            />
            <TextField
              error={!!validationError.password}
              helperText={validationError.password}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={values.password}
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(e) => submitForm(e)}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  component={RouterLink}
                  to="/reset-password"
                  variant="body2"
                >
                  Forgot Passord?
                </Link>
              </Grid>
              <Grid item>
                <Link component={RouterLink} to="/signUp" variant="body2">
                  Not Registered ? Signup Here
                </Link>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
      <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
        {/* This section is only for going back to the main route, may not be required for actual login page */}
        <Link to="/dashboard" component={RouterLink}>
            <Button variant="contained" color="primary">Go Back</Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Login;
