import React from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import { Query } from "react-apollo";
import hoistNonReactStatic from "hoist-non-react-statics";
import { pagination, paginationVariablesFromUrlParams } from "lib/utils/pagination";
import withTag from "containers/tags/withTag";
import catalogItemsOffsetQuery from "./catalogItemsOffset.gql";

/**
 * withCatalogItems higher order query component for fetching primaryShopId and catalog data
 * @name withCatalogItems
 * @param {React.Component} Component to decorate and apply
 * @returns {React.Component} - component decorated with primaryShopId and catalog as props
 */
export default function withCatalogItemsOffset(Component) {
  @withTag
  @inject("primaryShopId", "routingStore", "uiStore")
  @observer
  class CatalogItemsOffset extends React.Component {
    static propTypes = {
      primaryShopId: PropTypes.string.isRequired,
      routingStore: PropTypes.object.isRequired,
      tag: PropTypes.shape({
        _id: PropTypes.string.isRequired
      }),
      uiStore: PropTypes.object.isRequired
    };

    render() {
      const { primaryShopId, routingStore, uiStore, tag } = this.props;
      const [sortBy, sortOrder] = uiStore.sortBy.split("-");
      const tagIds = tag && [tag._id];
      const variables = {
        shopId: primaryShopId,
        ...paginationVariablesFromUrlParams(routingStore.query, { defaultPageLimit: uiStore.pageSize }),
        tagIds,
        sortBy,
        sortByPriceCurrencyCode: uiStore.sortByCurrencyCode,
        sortOrder
      };

      // variables.offset = variables.offset ? variables.offset : 0;

      return (
        <Query errorPolicy="all" query={catalogItemsOffsetQuery} variables={variables}>
          {({ data, fetchMore, loading }) => {
            const { catalogItems } = data || {};
            const { totalCount } = catalogItems || {};

            return (
              <Component
                {...this.props}
                catalogItemsPageInfo={pagination({
                  fetchMore,
                  routingStore,
                  data,
                  queryName: "catalogItems",
                  limit: uiStore.pageSize
                })}
                totalCount={totalCount}
                catalogItems={(catalogItems && catalogItems.edges) || []}
                isLoadingCatalogItems={loading}
              />
            );
          }}
        </Query>
      );
    }
  }

  hoistNonReactStatic(CatalogItemsOffset, Component);

  return CatalogItemsOffset;
}
