import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    top: "0",
    marginBottom: "30px",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    padding: "0 10px",
    backgroundColor: "#F4D03F",
  },
  heading: {
    color: "black",
    textDecoration: "none",
    fontWeight: "bold",
  },
  image: {
    marginLeft: "5px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
  },
  profile: {
    display: "flex",
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));
