import React , {useState, useEffect} from 'react'
import "./AlertMsg.css";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function AlertMsg({ id = 0, type, message }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <Alert
          severity={
            type !== "warning" &&
            type !== "info" &&
            type !== "success" &&
            type !== "error"
              ? "error"
              : type
          }
          onClose={() => {
            onClose();
          }}
        >
          <AlertTitle>
            {type !== "warning" &&
            type !== "info" &&
            type !== "success" &&
            type !== "error"
              ? "error"
              : type}
          </AlertTitle>

          <strong id="alertMsg">{message}</strong>
          <Button id="btn" color="inherit" size="small"></Button>
        </Alert>
      </Collapse>
    </div>
  );
}

export default AlertMsg;
