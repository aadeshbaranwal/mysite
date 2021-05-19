import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { FormControlLabel, Radio, Switch } from "@material-ui/core";
import TableSubInfo from "./TableSubInfo";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";
import VisibilityIcon from "@material-ui/icons/Visibility";
const useRowStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  row: {
    margin: "10px",
  },
  head: {
    backgroundColor: "#F2F2F2",
    padding: "1rem 0rem !important",
    fontSize: "1.1rem",
    fontWeight: "600",
  },
  headItem: {
    fontSize: "0.9rem",
    fontWeight: "600",
  },
  accessN: {
    backgroundColor: "rgba(255, 8, 8, 0.3)",
    color: "rgba(255, 8, 8)",
    padding: "0.3rem 1rem",
    borderRadius: "15px",
    border: "1px solid #FF0808",
  },
  accessY: {
    backgroundColor: "rgba(39, 174, 96, 0.3)",
    color: "#27AE60",
    padding: "0.3rem 1rem",
    borderRadius: "15px",
    border: "1px solid #27AE60",
  },
}));

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: "10px",
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(16px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#52d869",
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #fff",
    },
  },
  thumb: {
    width: 26,
    height: 23,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

function Row(props) {
  const { row, state } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  const [selected, setselected] = useState(false);
  const [checked, setchecked] = useState(false);
  const handleChange = (event) => {
    setchecked(!checked);
  };
  return (
    <>
      <TableRow className={classes.root}>
        <TableCell align="left">
          {state ? (
            <Radio
              checked={selected}
              onClick={() => setselected(!selected)}
              value="a"
              name="radio-button-demo"
              inputProps={{ "aria-label": "A" }}
              color="primary"
            />
          ) : (
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <RemoveCircleOutlineOutlinedIcon />
              ) : (
                <AddCircleOutlineOutlinedIcon />
              )}
            </IconButton>
          )}
        </TableCell>
        <TableCell align="left" component="th" scope="row">
          {row.department}
        </TableCell>
        <TableCell align="center">
          {!open && (
            <span
              className={
                row.accessLevel === "all" ? classes.accessY : classes.accessN
              }
            >
              {row.accessLevel === "all" ? "All Access" : "Restricted Access"}
            </span>
          )}
        </TableCell>
        <TableCell align="center">
          {state
            ? row.members
            : !open
            ? `${row.summary.view ? "View | " : ""} ${
                row.summary.edit ? "Edit | " : ""
              } ${row.summary.create ? "Create | " : ""} ${
                row.summary.delete ? "Delete" : ""
              }`
            : ""}
        </TableCell>
        <TableCell align="center">1 min ago</TableCell>
        <TableCell align="center">
          {state ? (
            <VisibilityIcon />
          ) : (
            <FormControlLabel
              control={
                <IOSSwitch
                  checked={checked}
                  onChange={handleChange}
                  name="checkedB"
                />
              }
            />
          )}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <TableSubInfo row={row} />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

export default function CustomTable({ state, rows }) {
  const classes = useRowStyles();
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead classes={{ root: classes.head }}>
          <TableRow>
            <TableCell align="left" classes={{ root: classes.headItem }} />
            <TableCell align="left" classes={{ root: classes.headItem }}>
              Department/Role Name
            </TableCell>
            <TableCell align="center" classes={{ root: classes.headItem }}>
              Access level
            </TableCell>
            <TableCell align="center" classes={{ root: classes.headItem }}>
              {state ? "No of members" : "Summary"}
            </TableCell>
            <TableCell align="center" classes={{ root: classes.headItem }}>
              Last Updated
            </TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.department} row={row} state={state} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
