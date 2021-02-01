import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  [theme.breakpoints.down("800")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
}));
