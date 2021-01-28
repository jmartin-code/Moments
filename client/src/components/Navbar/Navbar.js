import React from "react";
import { AppBar, Avatar, Button, Typography, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import moments from "../../images/moments.jpg";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();

  const user = null;
  return (
    <AppBar className={classes.appBar} position="static" color="inherent">
      <div className={classes.brandContainer}>
        <img
          className={classes.image}
          src={moments}
          alt="memories"
          height="25"
        />
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h3"
          align="center"
        >
          &nbsp;MOMENTS&nbsp;
        </Typography>
        <img
          className={classes.image}
          src={moments}
          alt="memories"
          height="25"
        />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button className={classes.logout} variant="contained">
              Logout
            </Button>
          </div>
        ) : (
          <Button component={Link} to="/auth">
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
