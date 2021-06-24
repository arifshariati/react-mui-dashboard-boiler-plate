// React & Redux & Router
import React from "react";
import { Link as RouterLink } from "react-router-dom";

import clsx from "clsx";
import PropTypes from "prop-types";

// MUI
import { Avatar, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "fit-content",
    },
    avatar: {
        width: 75,
        height: 75,
    },
    name: {
        marginTop: theme.spacing(1),
    },
}));

const Profile = (props) => {
    
    const { className, ...rest } = props;

    const classes = useStyles();

    const user = {
        name: "Arif Shariati",
        avatar: "/assets/images/profile-image.png",
        role: "Administrator",
    };

    return (
        <div {...rest} className={clsx(classes.root, className)}>
            <Avatar
            className={classes.avatar}
            component={RouterLink}
            src="/assets/images/profile-image.png"
            to="/account"
            />
            <Typography className={classes.name} variant="h4">
                {user.name}
            </Typography>

            <Typography className={classes.name} variant="body2">
                {user.role}
            </Typography>
                
        </div>
    );
};

Profile.propTypes = {
    className: PropTypes.string,
};

export default Profile;
