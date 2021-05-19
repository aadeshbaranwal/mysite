import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    position: "relative",
    backgroundColor: "white",
    color: "black",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  mar: {
    margin: "0 0.1rem",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar elevation={0} position="fixed" className={classes.appBar}>
        <Toolbar>
          <div className={classes.mar}>Kishore</div>
          <div className={classes.mar}>
            <NotificationsNoneIcon />
          </div>
          <div className={classes.mar}>
            <HelpOutlineIcon />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
