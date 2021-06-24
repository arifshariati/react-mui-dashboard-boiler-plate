import { Paper, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
// import ThreeDRotation from "@material-ui/icons/ThreeDRotation";
// import GroupIcon from "@material-ui/icons/Group";
// import BusinessIcon from "@material-ui/icons/Business";
// import LocalOfferIcon from "@material-ui/icons/LocalOffer";
// import DoneAllIcon from '@material-ui/icons/DoneAll';
// import CheckCircleIcon from '@material-ui/icons/CheckCircle';
// import CancelIcon from '@material-ui/icons/Cancel';
// import CheckIcon from '@material-ui/icons/Check';
// import BlockIcon from '@material-ui/icons/Block';
// import LayersIcon from '@material-ui/icons/Layers';
// import PhoneIcon from '@material-ui/icons/Phone';
// import MessageIcon from '@material-ui/icons/Message';
// import EmailIcon from '@material-ui/icons/Email';
// import DeviceUnknownIcon from '@material-ui/icons/DeviceUnknown';
import numeral from "numeral";
const useStyles = makeStyles((theme) => ({
  dashboardBox: {
    padding: theme.spacing(2),
  },
  header: {},
  container: {
    display: "flex",
  },
  detail: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    borderRadius: "0.7rem",
  },
}));

export default function StatBox(props) {
  const classes = useStyles();

  const { label, value } = props;

  return (
    <Paper className={classes.detail}>
      <Grid container>
        {/* <Grid item xs={4}>
          {getIcon(label)}
        </Grid> */}
        <Grid item xs={8}>
          <Grid container className={classes.container}>
            <Grid item xs={12}>
              <Typography
                gutterBottom
                variant="body1"
                color="textPrimary"
                component="p"
              >
                {getLabelText(label)}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h1"
                color="textSecondary"
                component="p"
              >
                {numeral(value).format("0,0")}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

function getLabelText(label) {
  if (label === "users") {
    return "KULLANICILAR";
  } else if (label === "companies") {
    return "ŞİRKETLER";
  } else if (label === "brands") {
    return "MARKALAR";
  } else if (label === "total") {
    return "TOPLAM";
  } else if (label === "success") {
    return "BAŞARILI";
  } else if (label === "failure") {
    return "BAŞARISIZ";
  } else {
    return label;
  }
}

// function getIcon(label) {
//   if (label === "users") {
//     return <GroupIcon style={{ fontSize: 60 }} color="primary" />;
//   } else if (label === "companies") {
//     return <BusinessIcon style={{ fontSize: 60 }} color="primary" />;
//   } else if (label === "brands") {
//     return <LocalOfferIcon style={{ fontSize: 60 }} color="primary" />;
//   } else if (label === "total") {
//     return <LayersIcon style={{ fontSize: 60 }} color="primary" />;
//   } else if (label === "success") {
//     return <CheckCircleIcon style={{ fontSize: 60 }} color="primary" />;
//   } else if (label === "failure") {
//     return <CancelIcon style={{ fontSize: 60 }} color="secondary" />;
//   } else if (label === "ONAY") {
//     return <CheckIcon style={{ fontSize: 60 }} color="primary" />;
//   } else if (label === "RET") {
//     return <BlockIcon style={{ fontSize: 60 }} color="secondary" />;
//   } else if (label === "ARAMA") {
//     return <PhoneIcon style={{ fontSize: 60 }} color="primary" />;
//   } else if (label === "MESAJ") {
//     return <MessageIcon style={{ fontSize: 60 }} color="primary" />;
//   } else if (label === "EPOSTA") {
//     return <EmailIcon style={{ fontSize: 60 }} color="primary" />;
//   } else if (label === "NA") {
//     return <DeviceUnknownIcon style={{ fontSize: 60 }} color="primary" />;
//   }
//   return <ThreeDRotation />;
// }
