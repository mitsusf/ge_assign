import React, { useState } from "react";
import "./Page.css";
import AlertMsg from "../../Components/AlertMsg/AlertMsg";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function Page() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [inProgress, setProgress] = useState(false);

  const handleClick = () => {
    setProgress(true);
    // mimicing Download
    return new Promise(function (resolve, reject) {
      setTimeout(resolve, 4000);
    })
      .then(function () {
        setProgress(false);
        setOpen(true);
      })
      .catch((err) => setProgress(false));
  };

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  return (
    <div className="page">
      <div className="page__alert">
        <AlertMsg type="success" message="Reusable...." />
      </div>
      <div className="page__title">
        <Typography variant="h5"> Download Notification</Typography>
        <p className="page__text">
          <strong>Explanation: </strong>The toast message below is not a custom.
          We can definitely do the same like alerts. Auto-hide in 5 seconds.
        </p>
      </div>
      <div className="page__control">
        <div className={classes.root}>
          {inProgress ? (
            <CircularProgress disableShrink />
          ) : (
            <Button variant="outlined" onClick={handleClick}>
              Start Downloading....
            </Button>
          )}

          <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Download Completed !!
            </Alert>
          </Snackbar>
        </div>
      </div>
    </div>
  );
}

export default Page;
