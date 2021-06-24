import React from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";

//MUI
import { makeStyles } from "@material-ui/styles";
import { AppBar, Toolbar, Hidden, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import InputIcon from "@material-ui/icons/Input";


const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: "none",
    },
    flexGrow: {
        flexGrow: 1,
    },
    signOutButton: {
        marginLeft: theme.spacing(1),
    },
}));

const Topbar = (props) => {

    const { className, onSidebarOpen, onSignOut, ...rest } = props;

    const classes = useStyles();

    return (
        <AppBar {...rest} className={clsx(classes.root, className)}>
            <Toolbar>
                <RouterLink style={{ textDecoration: 'none', color:'inherit', marginTop: '2px'}} to="/">
                    <img 
                        alt='KNS Logo' 
                        src={window.location.origin+'/kns-iys-logo-white.svg'} 
                        height='35rem'
                    />
                </RouterLink>
                <div className={classes.flexGrow} />
                <Hidden mdDown>
                    <IconButton
                     className={classes.signOutButton}
                      onClick={onSignOut} 
                      color="inherit">
                        <InputIcon />
                    </IconButton>
                </Hidden>
                <Hidden lgUp>
                <IconButton color="inherit" onClick={onSidebarOpen}>
                    <MenuIcon />
                </IconButton>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
};

Topbar.propTypes = {
    className: PropTypes.string,
    onSidebarOpen: PropTypes.func,
};

export default Topbar;
