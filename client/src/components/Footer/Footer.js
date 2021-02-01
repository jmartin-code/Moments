import React from "react";
import { Container, Typography } from "@material-ui/core";
import useStyles from "./styles";

export default function Footer() {
  const classes = useStyles();
  let year = new Date().getFullYear();

  return (
    <Container maxWidth={false} className={classes.footer}>
      <Typography variant="body2">
        &copy; Copyright Jonathan Martinez&nbsp;{year}
      </Typography>
    </Container>
  );
}
