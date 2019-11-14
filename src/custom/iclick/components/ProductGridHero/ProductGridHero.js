import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";


const styles = (theme) => ({
  heroImg: {
    width: "100%"
  },
  heroGridContainer: {
    //maxWidth: theme.layout.mainContentMaxWidth,
    margin: "12px auto"
  }
});

@withStyles(styles, { name: "SkProductGridHero" })
export default class ProductGridHero extends Component {
  static propTypes = {
    tag: PropTypes.object
  }

  static defaultProps = {
    tag: {}
  }

  // render() {
  //   const {
  //     tag: { heroMediaUrl }
  //   } = this.props;

  //   if (!heroMediaUrl) return null;

  //   return (
  //     <section>
  //       <div>
  //         <div>
  //           <img src={heroMediaUrl} alt="Product category" />
  //         </div>
  //       </div>
  //     </section>
  //   );
  // }

  render() {
    const { classes, tag: { heroMediaUrl } } = this.props;

    if (!heroMediaUrl) return null;

    return (
      <section className={classes.heroGridContainer}>
        <Grid container spacing={24}>
          {/* <Grid item xs={12}>
            <img src={heroMediaUrl} alt="Product Category" className={classes.heroImg} />
          </Grid> */}
        </Grid>
      </section>
    );
  }
}
