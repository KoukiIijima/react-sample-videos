import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import GoogleAuth from './GoogleAuth'

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          // className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">News</Typography>
        <Button color="inherit">
          <Link to="/">Streamy</Link>
        </Button>
        <Button color="inherit">
          <Link to="/streams/new">Create</Link>
        </Button>
        <GoogleAuth />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
