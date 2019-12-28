/* eslint-disable react/display-name */
/* eslint-disable react/no-multi-comp */
import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

const AlertDialogBox = ({ isOpen, handleClose, title, desc }) => (
  <Dialog
    open={isOpen}
    onClose={handleClose}
    TransitionComponent={Transition}
    keepMounted
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">{desc} </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="primary">
        Ok
      </Button>
    </DialogActions>
  </Dialog>
);

AlertDialogBox.defaultProps = {
  open: false
};

AlertDialogBox.propTypes = {
  desc: PropTypes.string,
  handleClose: PropTypes.func,
  isOpen: PropTypes.bool,
  title: PropTypes.string
};

AlertDialogBox.defaultProps = {
  title: "NewsLetter Subscription!",
  desc: "Thank you for subscribing us. Please be patient, I am creating your subscription for newsletter."
};

export default AlertDialogBox;
