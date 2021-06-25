import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

//MUI
import { makeStyles } from "@material-ui/styles";
import { Divider, Drawer } from "@material-ui/core";

//Icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import LockOpenIcon from '@material-ui/icons/LockOpen';

//Components
import { Profile, SidebarNav } from "./components";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up("lg")]: {
      marginTop: 64,
      height: "calc(100% - 64px)",
    },
  },
  root: {
    backgroundColor: theme.palette.white,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: theme.spacing(2),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  nav: {
    marginBottom: theme.spacing(2),
  },
}));

const Sidebar = ({
  open,
  variant,
  onClose,
  className,
  authedUserRole,
  ...rest
}) => {
  
  const classes = useStyles();

  let views = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <DashboardIcon />,
    },
    {
      title: "Sign Up",
      href: "/signup",
      icon: <LockOpenIcon />,
    },
    {
      title: "Sign In",
      href: "/login",
      icon: <LockOpenIcon />,
    },
    {
      title: "Not Found",
      href: "/not-found",
      icon: <NotInterestedIcon />,
    }
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div {...rest} className={clsx(classes.root, className)}>
        <Profile />
        <Divider className={classes.divider} />
      
        <Typography variant="h5">Views</Typography>
        <SidebarNav 
          className={classes.nav}
          navList={views} 
        />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Sidebar;
