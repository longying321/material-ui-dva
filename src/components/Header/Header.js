import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import headerStyle from "../../assets/headerStyle";
import Button from "@material-ui/core/Button/Button";
import Typography from "@material-ui/core/Typography/Typography";

function Header({ ...props }) {
  function makeBrand() {
    var name;
    props.routes.map((prop, key) => {
      if (prop.path === props.location.pathname) {
        name = prop.navbarName;
      }
      return null;
    });
    return name;
  }
  const { classes } = props;

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.container}>
        <Typography variant="title" color="inherit" noWrap>
          <div className={classes.flex}>
            <Button color="transparent"  className={classes.title}>
              {makeBrand()}
            </Button>
          </div>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(headerStyle)(Header);
