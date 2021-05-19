import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  makeStyles,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { useState } from "react";

export default function TableSubInfo({ row }) {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    text: {
      fontSize: "0.8rem",
      fontWeight: "600",
    },
    heading: {
      margin: "1rem",
      fontWeight: "600",
    },
  }));
  const classes = useStyles();
  const [selected, setselected] = useState(
    row.accessLevel.indexOf("all") >= 0 ? "all-access" : "restricted-access"
  );
  const [state, setState] = useState(row.summary);
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const handleChange2 = (event) => {
    setselected(event.target.value);
  };
  return (
    <>
      <div className={classes.heading}>All aspects in bidding module.</div>
      <Grid container direction="row" justify="space-evenly">
        <Grid classes={{ root: classes.root }} direction="column">
          <FormControl component="fieldset">
            <FormLabel component="legend" classes={{ root: classes.text }}>
              Access Control
            </FormLabel>
            <RadioGroup
              aria-label="value"
              name="value1"
              value={selected}
              onChange={handleChange2}
              classes={{ root: classes.text }}
            >
              <FormControlLabel
                value="all-access"
                control={
                  <Radio color="primary" classes={{ root: classes.text }} />
                }
                label="All Access"
                classes={{ label: classes.text }}
              />
              <FormHelperText>Can access all items</FormHelperText>
              <FormControlLabel
                value="restricted-access"
                control={
                  <Radio color="primary" classes={{ root: classes.text }} />
                }
                label="Restricted Access"
                classes={{ label: classes.text }}
              />
              <FormHelperText>
                Can access only assigned or created items
              </FormHelperText>
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid classes={{ root: classes.root }} direction="column">
          <FormControl>
            <FormLabel component="legend" classes={{ root: classes.text }}>
              Permissions
            </FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={state.view}
                    onChange={handleChange}
                    name="view"
                  />
                }
                label="View items in access"
                classes={{ label: classes.text }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={state.edit}
                    onChange={handleChange}
                    name="edit"
                  />
                }
                label="Edit items in access"
                classes={{ label: classes.text }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={state.create}
                    onChange={handleChange}
                    name="create"
                  />
                }
                label="Create items in access"
                classes={{ label: classes.text }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={state.delete}
                    onChange={handleChange}
                    name="delete"
                  />
                }
                label="Delete items in access"
                classes={{ label: classes.text }}
              />
            </FormGroup>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
}
