import NextApp, { Container } from "next/app"
import React from "react"
import { StripeProvider } from "react-stripe-elements"
import { Provider as MobxProvider } from "mobx-react"
import { ComponentsProvider } from "@reactioncommerce/components-context"
import getConfig from "next/config"
import track from "lib/tracking/track"
import dispatch from "lib/tracking/dispatch"
import withApolloClient from "lib/apollo/withApolloClient"
import withShop from "containers/shop/withShop"
import withViewer from "containers/account/withViewer"
import withMobX from "lib/stores/withMobX"
import rootMobXStores from "lib/stores"
import Layout from "custom/iclick/components/Layout"
import components from "custom/componentsContext"
import buildNavFromTags from "lib/data/buildNavFromTags"
import getAllTags from "lib/data/getAllTags"
import Loader from "custom/iclick/components/Loader"
import getPageContext from "../lib/theme/getPageContext"
import components from "../custom/componentsContext"
import componentTheme from "../custom/componentTheme"
import getAllTags from "../lib/data/getAllTags"

import "static/css/bootstrap.min.css"
import "static/css/style.min.css"
import "static/css/custom.css"

const { publicRuntimeConfig } = getConfig()

@withApolloClient
@withMobX
@withShop
@withViewer
@track({}, { dispatch })
export default class App extends NextApp {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    // TODO
    // We retrieve tags here because
    // 1) they were used for navigtion and needed to be here and
    // 2) with multiple pages of tags, this was the only place where
    // we could loop multiple times to get them all
    // We no longer use tags for navigation, so if we can find a resolution
    // to #2, we can move this to only where tags are needed, or inside their own `withTags` container
    const tags = await getAllTags(ctx.apolloClient)

    return { pageProps, tags }
  }

  constructor(props) {
    super(props)
    this.state = { stripe: null }
  }

  pageContext = null

  componentDidMount() {
    // Fetch and update auth token in auth store
    rootMobXStores.cartStore.setAnonymousCartCredentialsFromLocalStorage()

    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }

    const { stripePublicApiKey } = publicRuntimeConfig
    if (stripePublicApiKey && window.Stripe) {
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({ stripe: window.Stripe(stripePublicApiKey) })
    }
  }

  render() {
    const {
      Component,
      pageProps,
      shop,
      shop: { defaultNavigationTree: navItems },
      tags,
      viewer,
      ...rest
    } = this.props
    const { route } = this.props.router
    const { stripe } = this.state

    return (
      <Container>
        {isLoading ? (
          <Loader />
        ) : (
          <ComponentsProvider value={components}>
            <MobxProvider
              suppressChangedStoreWarning
              navItems={navItems}
              tags={tags}>
              {route === "/checkout" || route === "/login" ? (
                <StripeProvider stripe={stripe}>
                  <Component
                    pageContext={this.pageContext}
                    shop={shop}
                    {...rest}
                    {...pageProps}
                  />
                </StripeProvider>
              ) : (
                <Layout shop={shop} viewer={viewer}>
                  <Component
                    pageContext={this.pageContext}
                    shop={shop}
                    {...rest}
                    {...pageProps}
                  />
                </Layout>
              )}
            </MobxProvider>
          </ComponentsProvider>
        )}
      </Container>
    )
  }
}
