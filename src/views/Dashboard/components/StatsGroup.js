// import clsx from "clsx";
import { Typography, Grid } from "@material-ui/core";
import _ from "lodash";
import { makeStyles } from "@material-ui/styles";
import StatBox from "./StatBox";

const useStyles = makeStyles((theme) => ({
  dashboardBox: {
    padding: theme.spacing(1),
  },
  boxDetails: {
    // display: "flex",
    // flexDirection: "row",
    // marginInlineEnd: theme.spacing(0)
  }
}));

export default function StatsGroup(props) {
  const classes = useStyles();

  const { header, data, size } = props;

  const formatedData = _.reduce(
    data,
    function (result, value, key) {
      result.push({
        label: key,
        value,
      });

      return result;
    },
    []
  );

  return (
    <div className={classes.dashboardBox}>
      <Typography variant="h5" component="h2">
        {header}
      </Typography>
      <Grid container>
        {formatedData.map((field) => (
          <Grid item xl={size} lg={size} md={size} sm={size} xs={size}>
            <StatBox
              key={field.label}
              label={field.label}
              value={field.value}
            />
          </Grid>
        ))}
      </Grid>
      {/* <div className={classes.boxDetails}>
        {formatedData.map((field) => (
          <StatBox key={field.label} label={field.label} value={field.value} />
        ))}
      </div> */}
    </div>
  );
}
