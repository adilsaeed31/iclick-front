import React, { Component } from "react";
import PropTypes from "prop-types";
import { Router } from "routes";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import GuestForm from "@reactioncommerce/components/GuestForm/v1";
import Button from "@reactioncommerce/components/Button/v1";

export default class Entry extends Component {
  static propTypes = {
    classes: PropTypes.object,
    onLoginButtonClick: PropTypes.func,
    onRegisterButtonClick: PropTypes.func,
    setEmailOnAnonymousCart: PropTypes.func,
    theme: PropTypes.object
  }

  static defaultProps = {
    onLoginButtonClick() {
      Router.pushRoute("/signin");
    },
    onRegisterButtonClick() {
      Router.pushRoute("/signup");
    },
    setEmailOnAnonymousCart() {}
  }

  render() {
    const { onLoginButtonClick, onRegisterButtonClick, setEmailOnAnonymousCart } = this.props;
    return (
      <Grid container>
        <Grid item xs={12} md={7}>
          <div>
            <Typography variant="title" gutterBottom>
              Returning Customer
            </Typography>
            <Button onClick={onLoginButtonClick} actionType="important" isFullWidth>
              Login
            </Button>
            <Button onClick={onRegisterButtonClick} actionType="secondary" isFullWidth>
              Create a new account
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} md={5}>
          <div>
            <Typography variant="title" gutterBottom>
              Guest Checkout
            </Typography>
            <GuestForm onSubmit={setEmailOnAnonymousCart} />
          </div>
        </Grid>
      </Grid>
    );
  }
}
