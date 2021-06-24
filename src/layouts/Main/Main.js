import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

// MUI
import { makeStyles, useTheme } from "@material-ui/styles";
import { useMediaQuery } from "@material-ui/core";
import { useHistory } from 'react-router-dom';

import { Backdrop, Snackbar } from '../../components'

import { Sidebar, Topbar } from "./components";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 56,
    height: "100%",
    [theme.breakpoints.up("sm")]: {
      paddingTop: 64,
    },
  },
  shiftContent: {
    paddingLeft: 240,
  },
  content: {
    height: "100%",
  },
}));

const Main = (props) => {
  const authedUser = useState({user_role:"client"})
  
  const history = useHistory();

  const { children } = props;

  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const handleSignOut = () => {
    //  Here logic for logging out user 
    history.push("/");
  };

  const shouldOpenSidebar = isDesktop ? true : openSidebar;

  if (!authedUser) {
    return (
      <>
        <Snackbar />
        <Backdrop />
      </>
    );
  }

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop,
      })}
    >
      
      <Topbar onSidebarOpen={handleSidebarOpen} onSignOut={handleSignOut} />
      <Sidebar
        onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        variant={isDesktop ? "persistent" : "temporary"}
        authedUserRole={authedUser.user_role}
      />
      <Snackbar />
      <Backdrop />
      <main className={classes.content}>{children}</main>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
