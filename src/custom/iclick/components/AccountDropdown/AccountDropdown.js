import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import {inject, observer} from "mobx-react";
import {withStyles} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import AccountIcon from "mdi-material-ui/Account";
import Popover from "@material-ui/core/Popover";
import ViewerInfo from "@reactioncommerce/components/ViewerInfo/v1";

const styles = (theme) => ({
  accountDropdown: {
    width: 320,
    padding: theme.spacing.unit * 2
  },
  authContent: {
    marginBottom: theme.spacing.unit * 2
  }
});

@withStyles(styles, {name: "SkAccountDropdown"})
@inject("authStore")
@observer
class AccountDropdown extends Component {
  static propTypes = {
    authStore: PropTypes.object.isRequired,
    classes: PropTypes.object
  };

  static defaultProps = {
    classes: {}
  };

  state = {
    anchorElement: null
  };

  toggleOpen = (event) => {
    this.setState({anchorElement: event.currentTarget});
  }

  onClose = () => {
    this.setState({anchorElement: null});
  }

  render() {
    const buttonStyle = {'backgroundColor': '#393939', 'fontSize': '1.2rem'};
    const {classes, authStore} = this.props;
    const {anchorElement} = this.state;
    const {account} = authStore;

    return (
      <Fragment>
        {authStore.isAuthenticated ?
          <ButtonBase onClick={this.toggleOpen}>
            <ViewerInfo viewer={account}/>
          </ButtonBase>
          :
          <IconButton color="inherit" onClick={this.toggleOpen}>
            <AccountIcon/>
          </IconButton>
        }

        <Popover
          anchorEl={anchorElement}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          open={Boolean(anchorElement)}
          onClose={this.onClose}
        >
          <div className={classes.accountDropdown}>
            {authStore.isAuthenticated ?
              <Fragment>
                <Button style={buttonStyle} color="primary" fullWidth href={`/logout/${account._id}`} variant="raised">
                  Sign Out
                </Button>
              </Fragment>
              :
              <Fragment>
                <div className={classes.authContent}>
                  <Button style={buttonStyle} color="primary" fullWidth href="/signin" variant="raised">
                    Sign In
                  </Button>
                </div>
                <Button style={buttonStyle} color="primary" fullWidth href="/signup" variant="raised">
                  Create Account
                </Button>
              </Fragment>
            }
          </div>
        </Popover>
      </Fragment>
    );
  }
}

export default AccountDropdown;
