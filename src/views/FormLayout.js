import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button/Button";
import Radio from "@material-ui/core/Radio/Radio";
import {green} from "@material-ui/core/colors";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText/FormHelperText";

const styles = theme => ({
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  checked: {},
  size: {
    width: 40,
    height: 40,
  },
  sizeIcon: {
    fontSize: 20,
  },

  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  div:{
    width:"720px;",
    paddingTop:"24px;"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 160,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class FormLayout extends React.Component {
  state = {
    name: '',
    selectedValue: 'a',
    checkedA: true,
    checkedB: true,
    checkedF: true,
    age: '',
  };

  handleChange =  event => {
    this.setState({
      name: event.target.value,
    });
  };
  handleRadioChange =  event => {
    this.setState({
      selectedValue: event.target.value
    });
  };
  handleCheckboxChange = name => event => {
    this.setState({
      [name]: event.target.checked
    });
  };
  handleSelectChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange}
          margin="normal"
        />
        <TextField
          id="password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
        <div className={classes.div}>
          <Button variant="outlined" className={classes.button}>
            Default
          </Button>
          <Button variant="outlined" color="primary" className={classes.button}>
            Primary
          </Button>
          <Button variant="outlined" color="secondary" className={classes.button}>
            Secondary
          </Button>
          <Button variant="outlined" disabled className={classes.button}>
            Disabled
          </Button>
          <Button variant="outlined" href="#outlined-buttons" className={classes.button}>
            Link
          </Button>
          <input
            accept="image/*"
            className={classes.input}
            id="outlined-button-file"
            multiple
            type="file"
          />
          <label htmlFor="outlined-button-file">
            <Button variant="outlined" component="span" className={classes.button}>
              Upload
            </Button>
          </label>
        </div>
        <div className={classes.div}>
          <Radio
            checked={this.state.selectedValue === 'a'}
            onChange={this.handleRadioChange}
            value="a"
            name="radio-button-demo"
            aria-label="A"
          />
          <Radio
            checked={this.state.selectedValue === 'b'}
            onChange={this.handleRadioChange}
            value="b"
            name="radio-button-demo"
            aria-label="B"
          />
          <Radio
            checked={this.state.selectedValue === 'c'}
            onChange={this.handleRadioChange}
            value="c"
            name="radio-button-demo"
            aria-label="C"
            classes={{
              root: classes.root,
              checked: classes.checked,
            }}
          />
          <Radio
            checked={this.state.selectedValue === 'd'}
            onChange={this.handleRadioChange}
            value="d"
            color="default"
            name="radio-button-demo"
            aria-label="D"
          />
          <Radio
            checked={this.state.selectedValue === 'e'}
            onChange={this.handleRadioChange}
            value="e"
            color="default"
            name="radio-button-demo"
            aria-label="E"
            className={classes.size}
            icon={<RadioButtonUncheckedIcon className={classes.sizeIcon} />}
            checkedIcon={<RadioButtonCheckedIcon className={classes.sizeIcon} />}
          />
        </div>

        <div className={classes.div}>
          <Checkbox
            checked={this.state.checkedA}
            onChange={this.handleCheckboxChange('checkedA')}
            value="checkedA"
          />
          <Checkbox
            checked={this.state.checkedB}
            onChange={this.handleCheckboxChange('checkedB')}
            value="checkedB"
            color="primary"
          />
          <Checkbox value="checkedC" />
          <Checkbox disabled value="checkedD" />
          <Checkbox disabled checked value="checkedE" />
          <Checkbox
            checked={this.state.checkedF}
            onChange={this.handleCheckboxChange('checkedF')}
            value="checkedF"
            indeterminate
          />
          <Checkbox defaultChecked color="default" value="checkedG" />
        </div>

        <div className={classes.div}>
          <FormControl required className={classes.formControl}>
            <InputLabel htmlFor="age-required">Age</InputLabel>
            <Select
              value={this.state.age}
              onChange={this.handleSelectChange}
              name="age"
              inputProps={{
                id: 'age-required',
              }}
              className={classes.selectEmpty}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>
        </div>
      </form>
    );
  }
}

FormLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormLayout);
