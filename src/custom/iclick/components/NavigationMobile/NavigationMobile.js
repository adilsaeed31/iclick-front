import React, { Component } from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import ShopLogo from "@reactioncommerce/components/ShopLogo/v1";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import MenuList from "@material-ui/core/MenuList";
import Slide from "@material-ui/core/Slide";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "mdi-material-ui/Close";
import Link from "components/Link";
import withShop from "containers/shop/withShop";
import NavigationItemMobile from "./NavigationItemMobile";
import NavigationSubMenuMobile from "./NavigationSubMenuMobile";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  header: {
    flex: "0 0 auto"
  },
  toolBarWrapper: {
    height: "150px"
  },
  toolbarTitle: {
    position: "absolute",
    width: "100%",
    textAlign: "center",
    height: "150px"
  },
  title: {
    display: "inline-block",
    color: theme.palette.reaction.reactionBlue,
    borderBottom: `solid 5px ${theme.palette.reaction.reactionBlue200}`
  },
  menu: {
    flex: "1 1 auto",
    overflowY: "auto",
    width: 320
  },
  subNav: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 320,
    height: "100vh",
    backgroundColor: theme.palette.background.default
  }
});

@withStyles(styles, { name: "SkNavigationMobile" })
@withShop
@inject("navItems")
@inject("uiStore")
@observer
class NavigationMobile extends Component {
  static propTypes = {
    classes: PropTypes.object,
    navItems: PropTypes.array,
    shop: PropTypes.shape({
      name: PropTypes.string
    }),
    uiStore: PropTypes.shape({
      closeMenuDrawer: PropTypes.func
    }).isRequired
  }

  static defaultProps = {
    classes: {},
    navItems: []
  }

  state = {
    navItem: null
  }

  handleNavItemClick = (navItem) => {
    this.setState({
      navItem
    });
  }

  handleCloseSubMenu = () => {
    this.setState({ navItem: null });
  }

  renderNavItem = (navItem, index) => (
    <NavigationItemMobile key={index} isTopLevel navItem={navItem.node} onClick={this.handleNavItemClick} />
  )

  handleClose = () => {
    this.handleCloseSubMenu();
    this.props.uiStore.closeMenuDrawer();
  }

  render() {
    const { classes, navItems, uiStore, shop } = this.props;

    return (
      <Drawer open={uiStore.isMenuDrawerOpen} onClose={this.handleClose}>
        <div className={classes.header}>
          <Toolbar disableGutters className={classes.toolBarWrapper}>
            <div className={classes.toolbarTitle}>
              <Typography className={classes.title} color="inherit" variant="title">
                <Link route="/" onClick={this.handleClose}>
                  <ShopLogo shopName={shop.name} shopLogoUrl="/static/images/iclicklogo-big.png" />
                </Link>
              </Typography>
            </div>
            <IconButton onClick={this.handleClose}>
              <CloseIcon />
            </IconButton>
          </Toolbar>
          <Divider />
        </div>
        <nav className={classes.menu}>
          <MenuList disablePadding>{navItems.map(this.renderNavItem)}</MenuList>
        </nav>
        <Slide direction="left" in={!!this.state.navItem}>
          <nav className={classes.subNav}>
            <NavigationSubMenuMobile navItem={this.state.navItem} onBackButtonClick={this.handleCloseSubMenu} />
          </nav>
        </Slide>
      </Drawer>
    );
  }
}

export default NavigationMobile;
