import React from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { AppBar, Toolbar } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        boxShadow: "none",
    },
}));

const Topbar = (props) => {
    const { className, ...rest } = props;

    const classes = useStyles();

    return (
        <AppBar
            {...rest}
            className={clsx(classes.root, className)}
            color="primary"
            position="fixed"
        >
        <Toolbar>
          <RouterLink style={{ textDecoration: 'none', color:'inherit', marginTop: '2px'}} to="/">
                <img 
                    alt='KNS Logo' 
                    src={window.location.origin+'/kns-iys-logo-white.svg'} 
                    height='35rem'
                />
            </RouterLink>
        </Toolbar>
        </AppBar>
    );
};

Topbar.propTypes = {
    className: PropTypes.string,
};

export default Topbar;
