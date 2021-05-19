import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Tab, Tabs, Toolbar } from "@material-ui/core";
import CachedIcon from "@material-ui/icons/Cached";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    color: "#673AB7",
    paddingLeft: "1rem",
    // borderBottom: "1px solid black",
  },
  item: {
    fontWeight: "700",
  },
}));

export default function SubHeader() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div style={{ marginTop: "1rem", display: "flex" }}>
      <AppBar
        elevation={0}
        position="static"
        classes={{ root: classes.appBar }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          indicatorColor="primary"
        >
          <Tab classes={{ wrapper: classes.item }} label="Permissions" />
          <Tab classes={{ wrapper: classes.item }} label="Approval Matrix" />
        </Tabs>
        <div
          style={{
            color: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CachedIcon /> Last synced 15 mins ago
        </div>
      </AppBar>
    </div>
  );
}
