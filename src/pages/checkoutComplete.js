import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Typography from "@material-ui/core/Typography";
import PageLoading from "custom/iclick/components/PageLoading";
import withCart from "containers/cart/withCart";
import withOrder from "containers/order/withOrder";
import OrderCard from "components/OrderCard";

@withCart
@withOrder
@observer
class CheckoutComplete extends Component {
  static propTypes = {
    clearAuthenticatedUsersCart: PropTypes.func.isRequired,
    client: PropTypes.object.isRequired,
    hasMoreCartItems: PropTypes.bool,
    isLoadingOrder: PropTypes.bool,
    order: PropTypes.shape({
      email: PropTypes.string.isRequired,
      referenceId: PropTypes.string.isRequired
    }),
    shop: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string
    }),
    theme: PropTypes.object.isRequired
  }

  render() {
    const { isLoadingOrder, order, shop } = this.props;

    if (isLoadingOrder) return <PageLoading message="Loading order details..." />;

    if (!order) {
      return (
      
            <section className={classes.section}>
              <Typography className={classes.title} variant="h6">Order not found</Typography>
            </section>
         
      );
    }

    return (
      <Fragment>
        <Helmet>
          <title>{shop && shop.name} | Checkout</title>
          <meta name="description" content={shop && shop.description} />
        </Helmet>
        <Grid container>
          <Grid item xs={false} md={3} /> {/* MUI grid doesn't have an offset. Use blank grid item instead. */}
          <Grid item xs={12} md={6}>
            <Grid item xs={12} md={12}>
              <Typography variant="title">Thank you for your order</Typography>
              <Typography variant="body1">
                {"Your order ID is:"} <strong>{order.referenceId}</strong>
              </Typography>
              <Typography variant="body1">
                {"We've sent a confirmation email to:"} <strong>{order.email}</strong>
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <OrderCard isExpanded={true} order={order} />
            </Grid>
          </Grid>
          <Grid item xs={false} md={3} /> {/* MUI grid doesn't have an offset. Use blank grid item instead. */}
        </Grid>
      </Fragment>
    );
  }
}

export default CheckoutComplete;
