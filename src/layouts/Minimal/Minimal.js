import React from "react";
import PropTypes from "prop-types";

// Components
import { Topbar } from "./components";
import { Snackbar, Backdrop } from "../../components";

// MUI
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
    root: {
        paddingTop: 64,
        height: "100%",
    },
    content: {
        height: "100%",
    },
}));

const Minimal = (props) => {

    const { children } = props;

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Topbar />
            <Snackbar />
            <Backdrop />
            <main className={classes.content}>{children}</main>
        </div>
    );
};

Minimal.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export default Minimal;
