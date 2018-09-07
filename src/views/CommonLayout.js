import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import Button from "@material-ui/core/Button/Button";
import Paper from "@material-ui/core/Paper/Paper";
import Fade from "@material-ui/core/Fade/Fade";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabsRoot: {
    borderBottom: '1px solid #e8e8e8',
  },
  tabsIndicator: {
    backgroundColor: '#1890ff',
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit * 4,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3,
  },
  button: {
    margin: theme.spacing.unit * 2,
  },
  placeholder: {
    height: 40,
    paddingLeft:30
  },
  div: {
    paddingTop:"30px;"
  }
});

class CustomizedTabs extends React.Component {
  timer = null;
  state = {
    value: 0,
    query: 'idle',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  handleClickQuery = () => {
    clearTimeout(this.timer);

    if (this.state.query !== 'idle') {
      this.setState({
        query: 'idle',
      });
      return;
    }

    this.setState({
      query: 'progress',
    });
    this.timer = setTimeout(() => {
      this.setState({
        query: 'success',
      });
    }, 2e3);
  };
  render() {
    const { classes } = this.props;
    const { value, query } = this.state;

    return (
      <Paper>
        <div className={classes.root}>
          <Tabs
            value={value}
            onChange={this.handleChange}
            classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
          >
            <Tab
              disableRipple
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="Tab 1"
            />
            <Tab
              disableRipple
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="Tab 2"
            />
            <Tab
              disableRipple
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="Tab 3"
            />
          </Tabs>
          {value === 0 && <Typography className={classes.typography}>Tab 1</Typography>}
          {value === 1 && <Typography className={classes.typography}>Tab 2</Typography>}
          {value === 2 && <Typography className={classes.typography}>Tab 3</Typography>}
        </div>
        <div>
          <ToolTips/>
        </div>
        <div className={classes.div}>
          <div className={classes.placeholder}>
            {query === 'success' ? (
              <Typography>Success!</Typography>
            ) : (
              <Fade
                in={query === 'progress'}
                style={{
                  transitionDelay: query === 'progress' ? '800ms' : '0ms',
                }}
                unmountOnExit
              >
                <CircularProgress />
              </Fade>
            )}
          </div>
          <Button onClick={this.handleClickQuery} className={classes.button}>
            {query !== 'idle' ? 'Reset' : 'Simulate a load'}
          </Button>
        </div>
      </Paper>
    );
  }
}

CustomizedTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTabs);


const tipStyles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  customWidth: {
    maxWidth: 500,
  },
  noMaxWidth: {
    maxWidth: 'none',
  },
});

const longText = `
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus. 
Praesent non nunc mollis, fermentum neque at, semper arcu. 
Nullam eget est sed sem iaculis gravida eget vitae justo. 
`;

class ToolTips extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Tooltip title={longText}>
          <Button className={classes.button}>Default Width [300px]</Button>
        </Tooltip>
        <Tooltip title={longText} classes={{ tooltip: classes.customWidth }}>
          <Button className={classes.button}>Custom Width [500px]</Button>
        </Tooltip>
        <Tooltip title={longText} classes={{ tooltip: classes.noMaxWidth }}>
          <Button className={classes.button}>No wrapping</Button>
        </Tooltip>
      </div>
    );
  }
}

ToolTips.propTypes = {
  classes: PropTypes.object.isRequired,
};

ToolTips = withStyles(tipStyles)(ToolTips);
