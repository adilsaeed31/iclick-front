import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

export default class ProductGridHero extends Component {
  static propTypes = {
    tag: PropTypes.object
  };

  static defaultProps = {
    tag: {}
  };

  render() {
    const {
      tag: { heroMediaUrl }
    } = this.props;

    if (!heroMediaUrl) return null;

    return (
      <section>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <img src={heroMediaUrl} alt="Product Category" />
          </Grid>
        </Grid>
      </section>
    );
  }
}
