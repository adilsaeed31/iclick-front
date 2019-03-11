import NextApp, { Container } from "next/app";
import React from "react";
import { StripeProvider } from "react-stripe-elements";
import { Provider as MobxProvider } from "mobx-react";
import { ComponentsProvider } from "@reactioncommerce/components-context";
import getConfig from "next/config";
import track from "lib/tracking/track";
import dispatch from "lib/tracking/dispatch";
import withApolloClient from "lib/apollo/withApolloClient";
import withShop from "containers/shop/withShop";
import withViewer from "containers/account/withViewer";
import withMobX from "lib/stores/withMobX";
import rootMobXStores from "lib/stores";
import Layout from "custom/iclick/components/Layout";
import getPageContext from "lib/theme/getPageContext";
import components from "custom/componentsContext";
import buildNavFromTags from "lib/data/buildNavFromTags";
import getAllTags from "lib/data/getAllTags";
import Loader from "custom/iclick/components/Loader";

const { publicRuntimeConfig } = getConfig();

@withApolloClient
@withMobX
@withShop
@withViewer
@track({}, { dispatch })
export default class App extends NextApp {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const tags = await getAllTags(ctx.apolloClient);
    const navItems = buildNavFromTags(tags);

    return { navItems, pageProps, tags };
  }

  constructor(props) {
    super(props);
    this.pageContext = getPageContext();
    this.state = { stripe: null };
  }

  pageContext = null;

  componentDidMount() {
    // Fetch and update auth token in auth store
    rootMobXStores.cartStore.setAnonymousCartCredentialsFromLocalStorage();

    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }

    const { stripePublicApiKey } = publicRuntimeConfig;
    if (stripePublicApiKey && window.Stripe) {
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({ stripe: window.Stripe(stripePublicApiKey) });
    }
  }

  render() {
    const { Component, navItems, pageProps, shop, tags, viewer, isLoading, ...rest } = this.props;
    const { route } = this.props.router;
    const { stripe } = this.state;

    return (
      <Container>
        {isLoading ? (
          <Loader />
        ) : (
          <ComponentsProvider value={components}>
            <MobxProvider suppressChangedStoreWarning navItems={navItems} tags={tags}>
                {route === "/checkout" || route === "/login" ? (
                  <StripeProvider stripe={stripe}>
                    <Component pageContext={this.pageContext} shop={shop} {...rest} {...pageProps} />
                  </StripeProvider>
                ) : (
                  <Layout shop={shop} viewer={viewer}>
                    <Component pageContext={this.pageContext} shop={shop} {...rest} {...pageProps} />
                  </Layout>
                )}
            </MobxProvider>
          </ComponentsProvider>
        )}
      </Container>
    );
  }
}
