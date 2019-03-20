import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Router } from "routes";
import { observer } from "mobx-react";
import Helmet from "react-helmet";
import Typography from "@material-ui/core/Typography";
import OrderFulfillmentGroups from "components/OrderFulfillmentGroups";
import PageLoading from "components/PageLoading";
import withCart from "containers/cart/withCart";
import withOrder from "containers/order/withOrder";

@withCart
@withOrder
@observer
class CheckoutComplete extends Component {
  static propTypes = {
    clearAuthenticatedUsersCart: PropTypes.func.isRequired,
    client: PropTypes.object.isRequired,
    hasMoreCartItems: PropTypes.bool,
    isLoadingOrder: PropTypes.bool,
    loadMoreCartItems: PropTypes.func,
    onChangeCartItemsQuantity: PropTypes.func,
    onRemoveCartItems: PropTypes.func,
    order: PropTypes.object,
    shop: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string
    }),
    theme: PropTypes.object.isRequired
  }

  state = {}

  componentDidMount() {
    const { clearAuthenticatedUsersCart } = this.props;

    clearAuthenticatedUsersCart();
  }

  handleCartEmptyClick = () => {
    Router.pushRoute("/");
  }

  renderFulfillmentGroups() {
    const { order } = this.props;

    return (
      <div>
        <div>
          <OrderFulfillmentGroups order={order} />
        </div>
      </div>
    );
  }

  render() {
    const { isLoadingOrder, order, shop } = this.props;

    if (isLoadingOrder) return <PageLoading message="Loading order details..." />;

    if (!order) {
      return (
        <div>
          <div>
            <section>
              <Typography variant="title">Order not found</Typography>
            </section>
          </div>
        </div>
      );
    }

    return (
      <Fragment>
        <Helmet>
          <title>{shop && shop.name} | Checkout</title>
          <meta name="description" content={shop && shop.description} />
        </Helmet>
        <div>
          <div>
            <section>
              <header>
                <Typography variant="title">{"Thank you for your order"}</Typography>
                <Typography variant="body1">
                  {"Your order ID is:"} <strong>{order && order.referenceId}</strong>
                </Typography>
                <Typography variant="body1">
                  {"We've sent a confirmation email to:"} <strong>{order && order.email}</strong>
                </Typography>
              </header>
              <div>{this.renderFulfillmentGroups()}</div>
            </section>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CheckoutComplete;
