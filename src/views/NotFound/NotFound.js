import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography, Button, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4),
    },
    gridContainer: {
        paddingTop: 150,
        textAlign: "center",
        display: "flex",
        flexDirection: "column"
    },
    image: {
        marginTop: 50,
        display: "inline-block",
        maxWidth: "100%",
        width: 560,
    },
}));

const NotFound = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container justify="center" spacing={4} className={classes.gridContainer}>
                
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Typography variant="h1">
                        404: The page you are looking for isn’t here
                    </Typography>
                    <Typography variant="subtitle2">
                        We are working on project. We shall be up and running soon ...
                    </Typography>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <img
                        alt="Under development"
                        className={classes.image}
                        src="/assets/images/not-found.svg"
                    />
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Link href="/dashboard">
                        <Button variant="contained" color="primary">Go Back</Button>
                    </Link>
                </Grid>

            </Grid>
        </div>
    );
};

export default NotFound;
