import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  // appBar: {
  //   borderRadius: 15,
  //   margin: "30px 0",
  //   display: "flex",
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   boxShadow: "0px 0px 5px 5px #545454",
  //   backgroundColor: "#F4D03F",
  // },
  [theme.breakpoints.down("800")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
  heading: {
    color: "black",
    fontWeight: "bold",
  },
}));
