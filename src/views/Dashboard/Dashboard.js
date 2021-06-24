import React from "react";
import { StatCard } from '../../components';
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  rowGrid: {
    margin: "1rem 0rem"
  }
}));

const generalStat = [
  {
    "title":"Users",
    "value": 100
  },
  { 
    "title":"Daily Opts",
    "value": 10
  }
];

const deviceStat = [
  {
    "title":"Total Devices",
    "value": 5
  },
  { 
    "title":"User Per Device",
    "value": 3
  },
  { 
    "title":"Unique",
    "value": 2
  },
];

const Dashboard = () => {
  const classes = useStyles();
  

  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom>Admin Panel</Typography>
      <Grid container>

        {/* General Stats */}
        <Grid item xs={12} md={12} lg={12} xl={12} className={classes.rowGrid}>
          <Grid container spacing={0}>
            <Grid item xs={12} md={12} lg={12} xl={12}>
              <Typography variant="h5" gutterBottom>General Stats</Typography>
            </Grid>
            <Grid item xs={12} md={12} lg={12} xl={12}>
              <Grid container spacing={2}>
                {
                  generalStat.map((statObject, index) => 
                    <Grid item key={index} xl={2} lg={2} md={2} sm={4} xs={4}>
                      <StatCard data={statObject} />
                    </Grid>
                  )
                }
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Usage Stats */}
        <Grid item xs={12} md={12} lg={12} xl={12} className={classes.rowGrid}>
          <Grid container spacing={0}>
            <Grid item xs={12} md={12} lg={12} xl={12}>
              <Typography variant="h5" gutterBottom>General Stats</Typography>
            </Grid>
            <Grid item xs={12} md={12} lg={12} xl={12}>
              <Grid container spacing={2}>
                {
                  deviceStat.map((statObject, index) => 
                    <Grid item key={index} xl={2} lg={2} md={2} sm={4} xs={4}>
                      <StatCard data={statObject} />
                    </Grid>
                  )
                }
              </Grid>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </div>
  );
};

export default Dashboard;
