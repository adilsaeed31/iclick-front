import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import { Router } from "routes"
import Helmet from "react-helmet"
import CheckoutTopHat from "@reactioncommerce/components/CheckoutTopHat/v1"
import ShopLogo from "@reactioncommerce/components/ShopLogo/v1"
import withCart from "containers/cart/withCart"
import Entry from "custom/iclick/components/Entry"
import Link from "custom/iclick/components/Link"

@withCart
export default class Login extends Component {
  static propTypes = {
    cart: PropTypes.shape({
      account: PropTypes.object,
      email: PropTypes.string
    }),
    setEmailOnAnonymousCart: PropTypes.func,
    shop: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string
    }),
    theme: PropTypes.object.isRequired
  }

  state = {}

  componentDidMount() {
    const { cart } = this.props
    if ((cart && cart.account !== null) || (cart && cart.email)) Router.back()
  }

  renderHeader() {
    const { shop } = this.props

    return (
      <div>
        <div>
          <Link route="/">
            <span>Back</span>
          </Link>
        </div>

        <Link route="home">
          <div>
            <ShopLogo shopName={shop.name} />
          </div>
        </Link>

        <div />
      </div>
    )
  }

  renderEntry() {
    const { setEmailOnAnonymousCart } = this.props
    return <Entry setEmailOnAnonymousCart={setEmailOnAnonymousCart} />
  }

  render() {
    const { shop } = this.props
    return (
      <Fragment>
        <Helmet
          title={`Login | ${shop && shop.name}`}
          meta={[{ name: "description", content: shop && shop.description }]}
        />
        <CheckoutTopHat checkoutMessage="Free Shipping + Free Returns" />
        <div>
          {this.renderHeader()}
          <main>{this.renderEntry()}</main>
        </div>
      </Fragment>
    )
  }
}
