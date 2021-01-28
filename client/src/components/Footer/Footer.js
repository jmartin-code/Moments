import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Typography align="center" variant="body2">
        Jonathan Martinez
      </Typography>
    </div>
  );
}
