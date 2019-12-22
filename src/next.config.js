import withCSS from "@zeit/next-css";
import withFonts from "next-fonts";
import {
  INTERNAL_GRAPHQL_URL,
  CANONICAL_URL,
  EXTERNAL_GRAPHQL_URL,
  SEGMENT_ANALYTICS_SKIP_MINIMIZE,
  SEGMENT_ANALYTICS_WRITE_KEY,
  STRIPE_PUBLIC_API_KEY,
  ENABLE_SPA_ROUTING
} from "./config";

export default withCSS(
  withFonts({
    /**
     * `serverRuntimeConfig` is available in browser code, ONLY when run on the server
     * @example
     * import getConfig from "next/config";
     * const { serverRuntimeConfig } = getConfig();
     */
    serverRuntimeConfig: {
      graphqlUrl: INTERNAL_GRAPHQL_URL
    },
    /**
     * `publicRuntimeConfig` is available in browser code, even when run on the server
     * @example
     * import getConfig from "next/config";
     * const { publicRuntimeConfig } = getConfig();
     */
    publicRuntimeConfig: {
      canonicalUrl: CANONICAL_URL,
      graphqlUrl: EXTERNAL_GRAPHQL_URL,
      segmentAnalytics: {
        skipMinimize: SEGMENT_ANALYTICS_SKIP_MINIMIZE,
        writeKey: SEGMENT_ANALYTICS_WRITE_KEY
      },
      stripePublicApiKey: STRIPE_PUBLIC_API_KEY,
      enableSPARouting: ENABLE_SPA_ROUTING
    },
    // NextJS builds to `/src/.next` by default. Change that to `/build/app`
    distDir: "../build/app",
    webpack: (webpackConfig) => {
      webpackConfig.module.rules.push({
        test: /\.(gql|graphql)$/,
        loader: "graphql-tag/loader",
        exclude: ["/node_modules/", "/.next/"],
        enforce: "pre"
      });

      webpackConfig.module.rules.push({
        test: /\.mjs$/,
        type: "javascript/auto"
      });

      // Duplicate versions of the styled-components package were being loaded, this config removes the duplication.
      // It creates an alias to import the es modules version of the styled-components package.
      // This is a workaround until the root issue is resolved: https://github.com/webpack/webpack/issues/9329
      webpackConfig.resolve.alias["styled-components"] = "styled-components/dist/styled-components.browser.esm.js";

      return webpackConfig;
    }
  })
);
