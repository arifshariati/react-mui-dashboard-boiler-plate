import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
const useStyles = makeStyles((theme)=>({

    paper: {
        padding: "1rem",
        minHeight:"5rem",
        display: "flex",
        flexDirection:"column",
        justifyContent: "space-between",
        background: props => props.bgColor ? props.bgColor : "inherit",
        color: props => props.color ? props.color : "inherit"
    },
    value: {
        fontWeight:"bold"
    }
}));

const StatCard = ({data, bgColor, color}) => {
    const classes = useStyles({bgColor, color});

    const {title, value} = data;

    return (
        <Paper className={classes.paper}>
            <Typography variant="h5">
                {title}
            </Typography>
            <Typography variant="h2" className={classes.value}>
                {value}
            </Typography>
            
        </Paper>
    )
}

StatCard.propTypes = {
    data: PropTypes.object,
    bgColor: PropTypes.string,
    color: PropTypes.string
};

export default StatCard
