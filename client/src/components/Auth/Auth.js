import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  TextField,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Input from "./Input";

import useStyles from "./styles";

const Auth = () => {
  const classes = useStyles();
  const [showPass, setShowPass] = useState(false);
  const [isSignUp, setisSignUp] = useState(false);

  const handleShowPass = () => setShowPass((prevShowPass) => !prevShowPass);
  const handleSubmit = () => {};
  const handleChange = () => {};
  const switchMode = () => setisSignUp((previsSignUp) => !previsSignUp);

  return (
    <Container component="main" maxWIdth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignUp ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input
                  name="firstname"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lasstname"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPass ? "text" : "password"}
              handleShowPass={handleShowPass}
            />
            {isSignUp && (
              <Input
                name="confirmPassword"
                label="Confrim Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            className={classes.submit}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignUp
                  ? "If you have an account, click here to Sign In"
                  : "If you dont have an account, click here to Sing Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
