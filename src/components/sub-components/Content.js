import { Button, makeStyles, Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";
import CustomTable from "./CustomTable";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";

export default function Content() {
  const [state, setstate] = useState(true);
  const data = [
    {
      department: "Managemment Team",
      accessLevel: "all",
      lastUpdated: true,
      members: 4,
    },
    {
      department: "Business Team",
      accessLevel: "restricted",
      lastUpdated: true,
      members: 4,
    },
    {
      department: "Procurement Team",
      accessLevel: "all",
      lastUpdated: true,
      members: 4,
    },
    {
      department: "Project Team",
      accessLevel: "restricted",
      lastUpdated: true,
      members: 4,
    },
    {
      department: "IT Team",
      accessLevel: "all",
      lastUpdated: true,
      members: 4,
    },
  ];
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const rows = [
    {
      department: "Budget",
      accessLevel: "all",
      summary: {
        view: 1,
        edit: 1,
        delete: 0,
        create: 0,
      },
      lastUpdated: true,
    },
    {
      department: "Bidding",
      accessLevel: "restricted",
      summary: {
        view: 1,
        edit: 1,
        delete: 0,
        create: 0,
      },
      lastUpdated: true,
    },
    {
      department: "Something",
      accessLevel: "all",
      summary: {
        view: 1,
        edit: 1,
        delete: 0,
        create: 0,
      },
      lastUpdated: true,
    },
    {
      department: "Something else",
      accessLevel: "all",
      summary: {
        view: 1,
        edit: 1,
        delete: 0,
        create: 0,
      },
      lastUpdated: true,
    },
  ];
  const useStyles = makeStyles((theme) => ({
    content: {
      paddingLeft: "2rem",
    },
    btn: {
      backgroundColor: theme.palette.primary.main,
      color: "white",
      padding: "0.3rem 1.5rem",
    },
    child1: {
      display: "flex",
      margin: "1rem",
    },
    child2: {
      margin: "0 1rem",
    },
    child3: {
      margin: "1rem",
    },
    tab: {
      borderRight: "1px solid #CFD3DA",
      margin: "8px 0px",
    },
    title: {
      color: theme.palette.primary.main,
      fontWeight: "600",
      fontSize: "1.1rem",
      marginLeft: "1rem",
    },
    tabs: {
      fontWeight: "600",
      fontSize: "0.8rem",
      padding: "0",
    },
    tabCont: {
      paddingTop: "1rem !important",
      paddingBottom: "0 !important",
      borderBottom: "1px solid #CFD3DA",
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.content}>
      {state ? (
        <div className={classes.child1}>
          <Button
            onClick={() => {
              setstate(false);
            }}
            classes={{ root: classes.btn }}
          >
            Add Role
          </Button>
          <div className={classes.child2}>
            <CreateOutlinedIcon />
          </div>
          <div className={classes.child2}>
            <DeleteOutlinedIcon />
          </div>
        </div>
      ) : (
        <div className={classes.child3}>
          <div style={{ display: "flex" }}>
            <ArrowBackIcon
              onClick={() => {
                setstate(true);
              }}
            />
            <span className={classes.title}>Management Team</span>
          </div>
          <div>
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              classes={{
                root: classes.tabCont,
              }}
            >
              <Tab label="Access Control" classes={{ root: classes.tabs }} />
              <span className={classes.tab}></span>
              <Tab label="Assigned Members" classes={{ root: classes.tabs }} />
            </Tabs>
          </div>
        </div>
      )}

      <div>
        <CustomTable state={state} rows={state ? data : rows} />
      </div>
    </div>
  );
}
