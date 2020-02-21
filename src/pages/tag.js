import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { observer, inject } from "mobx-react";
import Helmet from "react-helmet";
import withCatalogItemsOffset from "containers/catalog/withCatalogItemsOffset";
import withTag from "containers/tags/withTag";
import ProductGrid from "custom/iclick/components/ProductGrid";
import TagBanner from "custom/iclick/components/TagBanner";
import SharedPropTypes from "lib/utils/SharedPropTypes";
import trackProductListViewed from "lib/tracking/trackProductListViewed";
import Breadcrumbs from "custom/iclick/components/Breadcrumbs";
import PageLoading from "components/PageLoading";
import TagFilters from "custom/iclick/components/TagFilters";

@withTag
@withCatalogItemsOffset
@inject("routingStore", "uiStore")
@observer
export default class TagGridPage extends Component {
  static propTypes = {
    catalogItems: PropTypes.array.isRequired,
    catalogItemsPageInfo: PropTypes.object,
    classes: PropTypes.object,
    initialGridSize: PropTypes.object,
    isLoadingCatalogItems: PropTypes.bool,
    routingStore: PropTypes.shape({
      query: PropTypes.shape({
        limit: PropTypes.string,
        sortby: PropTypes.string
      }),
      setSearch: PropTypes.func.isRequired,
      tag: SharedPropTypes.tag
    }),
    shop: PropTypes.shape({
      currency: PropTypes.shape({
        code: PropTypes.string.isRequired
      }),
      description: PropTypes.string
    }),
    tag: SharedPropTypes.tag,
    uiStore: PropTypes.shape({
      pageSize: PropTypes.number.isRequired,
      setPageSize: PropTypes.func.isRequired,
      setSortBy: PropTypes.func.isRequired,
      sortBy: PropTypes.string.isRequired
    })
  };

  static getDerivedStateFromProps(props) {
    const { routingStore, tag } = props;
    if (tag && routingStore.tagId !== tag._id) {
      routingStore.setTagId(tag._id);
      routingStore.setSearch({
        before: null,
        after: null
      });
    }

    return null;
  }

  static async getInitialProps({ req }) {
    // It is not perfect, but the only way we can guess at the screen width of the
    // requesting device is to parse the `user-agent` header it sends.
    const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
    const width = (userAgent && userAgent.indexOf("Mobi")) > -1 ? 320 : 1024;

    return { initialGridSize: { width } };
  }

  state = {};

  componentDidUpdate(prevProps) {
    if (this.props.catalogItems !== prevProps.catalogItems) {
      this.trackEvent(this.props);
    }
  }

  @trackProductListViewed()
  trackEvent() {}

  setPageSize = (pageSize) => {
    this.props.routingStore.setSearch({ limit: pageSize, page: null });
    this.props.uiStore.setPageSize(pageSize);
  };

  setSortBy = (sortBy) => {
    this.props.routingStore.setSearch({ sortby: sortBy, page: null });
    this.props.uiStore.setSortBy(sortBy);
  };

  renderHeaderMetatags(metafields) {
    const { shop } = this.props;

    const metatags = [];
    let hasDescription = false;
    metafields.forEach((field) => {
      if (field.namespace && field.namespace === "metatag") {
        const metatag = {
          content: field.value
        };
        metatag[field.scope] = field.key;
        metatags.push(metatag);
        if (field.key === "description") {
          hasDescription = true;
        }
      }
    });
    if (hasDescription === false) {
      metatags.push({ name: "description", content: shop && shop.description });
    }
    return metatags;
  }

  render() {
    const {
      catalogItems,
      catalogItemsPageInfo,
      initialGridSize,
      isLoadingCatalogItems,
      routingStore,
      shop,
      tag,
      uiStore,
      totalCount
    } = this.props;

    const pageSize =
      routingStore.query && routingStore.query.limit ? parseInt(routingStore.query.limit, 10) : uiStore.pageSize;
    const sortBy = routingStore.query && routingStore.query.sortby ? routingStore.query.sortby : uiStore.sortBy;

    catalogItemsPageInfo.page = routingStore.query && routingStore.query.page ? parseInt(routingStore.query.page, 10) : 1;

    if (!tag) {
      return <PageLoading message={"Loading products for you ..."} />;
    }

    return (
      <Fragment>
        <Helmet
          title={`${tag && tag.name} | ${shop && shop.name}`}
          meta={
            tag && tag.metafields && tag.metafields.length > 0
              ? this.renderHeaderMetatags(tag.metafields)
              : [{ name: "description", content: shop && shop.description }]
          }
        />
        <div className="container">
          <Breadcrumbs isTagGrid tagId={routingStore.tagId} />
          <div className="row">
            <TagFilters />
            <div className="col-lg-9">
              <TagBanner tag={tag} />
              <ProductGrid
                catalogItems={catalogItems}
                currencyCode={shop.currency.code}
                initialSize={initialGridSize}
                isLoadingCatalogItems={isLoadingCatalogItems}
                pageInfo={catalogItemsPageInfo}
                pageSize={pageSize}
                setPageSize={this.setPageSize}
                setSortBy={this.setSortBy}
                sortBy={sortBy}
                totalCount={totalCount}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
