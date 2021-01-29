import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import { GoogleLogin } from "react-google-login";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Input from "./Input";
import Icon from "./icon";
import { signin, signup } from "../../actions/auth";

import useStyles from "./styles";
import { useHistory } from "react-router-dom";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const classes = useStyles();
  const [showPass, setShowPass] = useState(false);
  const [isSignUp, setisSignUp] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const [form, setForm] = useState(initialForm);

  const handleShowPass = () => {
    setShowPass((prevShowPass) => !prevShowPass);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      dispatch(signup(form, history));
    } else {
      dispatch(signin(form, history));
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const GoogleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: "AUTH", data: { result, token } });
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  const GoogleFailure = () => {
    console.log("Google sign in failed.");
  };
  const switchMode = () => {
    setisSignUp((previsSignUp) => !previsSignUp);
    setShowPass(false);
  };

  return (
    <Container component="main" maxWidth="xs">
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
          <GoogleLogin
            clientId="918408654225-dj9n9rjo99csq6h9nu4in3v23rtdibed.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                variant="contained"
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
              >
                Google Sign In
              </Button>
            )}
            onSuccess={GoogleSuccess}
            onFailure={GoogleFailure}
            cookiePolicy="single_host_origin"
          />
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
