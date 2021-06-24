import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

//MUI
import { makeStyles } from "@material-ui/styles";
import { Divider, Drawer } from "@material-ui/core";

//Icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import BusinessIcon from '@material-ui/icons/Business';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import SearchIcon from '@material-ui/icons/Search';

//Components
import { Profile, SidebarNav } from "./components";

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

  let pages = [
    {
      title: "Panel",
      href: "/dashboard",
      icon: <DashboardIcon />,
    },
    {
      title: "Hesabım",
      href: "/account",
      icon: <AccountBoxIcon />,
    },
    /*     {
          title: "Settings",
          href: "/settings",
          icon: <SettingsIcon />,
        }, */
    {
      title: "Şirket Yönetimi",
      href: "/company-management",
      icon: <BusinessIcon />,
    },
    {
      title: "Marka Yönetimi",
      href: "/brand-management",
      icon: <LocalOfferIcon />,
    },
    {
      title: "Toplu İzin Yönetimi",
      href: "/bulk-consent-control",
      icon: <FindInPageIcon />,
    },
    {
      title: "Tekil İzin Sorgulama",
      href: "/single-consent-check",
      icon: <SearchIcon />,
    },
    /*     {
          title: "Reconciliation",
          href: "/reconciliation",
          icon: <PersonIcon />,
        }, */
  ];

  const adminPages = [
    {
      title: "Davet Paneli",
      href: "/invitation-list",
      icon: <GroupAddIcon />,
    }
  ]

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
        <SidebarNav 
          className={classes.nav}
          pages={authedUserRole === 'systemAdmin' 
            ? pages.concat(adminPages)
            : pages } />
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
