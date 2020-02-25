import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { observer, inject } from "mobx-react";
import Helmet from "react-helmet";
import withCatalogItems from "containers/catalog/withCatalogItems";
import HomeGrid from "custom/iclick/components/HomeGrid";
import trackProductListViewed from "lib/tracking/trackProductListViewed";
// import { inPageSizes } from "lib/utils/pageSizes";

import BigBanner from "custom/iclick/components/BigBanner";
import AfterBanner from "custom/iclick/components/AfterBanner";
import TwoCol from "custom/iclick/components/TwoCol";

@withCatalogItems
@inject("routingStore", "uiStore")
@observer
class Home extends Component {
  static propTypes = {
    catalogItems: PropTypes.array,
    catalogItemsPageInfo: PropTypes.object,
    initialGridSize: PropTypes.object,
    isLoadingCatalogItems: PropTypes.bool,
    routingStore: PropTypes.object,
    shop: PropTypes.shape({
      currency: PropTypes.shape({
        code: PropTypes.string.isRequired
      })
    }),
    tag: PropTypes.object,
    uiStore: PropTypes.shape({
      pageSize: PropTypes.number.isRequired,
      setPageSize: PropTypes.func.isRequired,
      setSortBy: PropTypes.func.isRequired,
      sortBy: PropTypes.string.isRequired
    })
  };

  static async getInitialProps({ req }) {
    // It is not perfect, but the only way we can guess at the screen width of the
    // requesting device is to parse the `user-agent` header it sends.
    const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
    const width = (userAgent && userAgent.indexOf("Mobi")) > -1 ? 320 : 1024;

    return { initialGridSize: { width } };
  }

  @trackProductListViewed()
  componentDidMount() {
    const { routingStore, uiStore } = this.props;
    const HOME_PAGE_SIZE = 4;
    routingStore.setTagId(null);
    uiStore.setPageSize(HOME_PAGE_SIZE, true);
    uiStore.setSortBy("updatedAt-desc");
    routingStore.setSearch({ limit: HOME_PAGE_SIZE, skipInPageSize: true, skipQueryString: true });
  }

  componentDidUpdate(prevProps) {
    if (this.props.catalogItems !== prevProps.catalogItems) {
      this.trackEvent(this.props);
    }
  }

  @trackProductListViewed()
  trackEvent() {}

  render() {
    const {
      catalogItems,
      catalogItemsPageInfo,
      initialGridSize,
      isLoadingCatalogItems,
      shop
    } = this.props;

    const pageTitle = shop && shop.description ? `${shop.name} | ${shop.description}` : shop.name;
    return (
      <Fragment>
        <Helmet title={pageTitle} meta={[{ name: "description", content: shop && shop.description }]} />
        <BigBanner />
        <AfterBanner />
        <TwoCol />
        <div className="container">
          <HomeGrid
            catalogItems={catalogItems}
            currencyCode={shop.currency.code}
            initialSize={initialGridSize}
            isLoadingCatalogItems={isLoadingCatalogItems}
            pageInfo={catalogItemsPageInfo}
          />
        </div>
      </Fragment>
    );
  }
}

export default Home;
