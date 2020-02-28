import React from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import { Query } from "react-apollo";
import hoistNonReactStatic from "hoist-non-react-statics";
// import { pagination } from "lib/utils/pagination";
import withTag from "containers/tags/withTag";
import catalogFiltersQuery from "./catalogFilters.gql";

/**
 * withCatalogItems higher order query component for fetching primaryShopId and catalog data
 * @name withCatalogFilters
 * @param {React.Component} Component to decorate and apply
 * @returns {React.Component} - component decorated with primaryShopId and catalog as props
 */
export default function withCatalogFilters(Component) {
  @withTag
  @inject("primaryShopId", "routingStore", "uiStore")
  @observer
  class CatalogFilters extends React.Component {
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
      const tagIds = tag && [tag._id];
      const variables = {
        shopId: primaryShopId,
        tagIds
      };

      return (
        <Query errorPolicy="all" query={catalogFiltersQuery} variables={variables}>
          {({ data, fetchMore, loading }) => {
            const { catalogItems } = data || {};
            // console.log(data);
            return (
              <Component
                {...this.props}
                catalogItems={(catalogItems && catalogItems.edges) || []}
                isLoadingCatalogItems={loading}
              />
            );
          }}
        </Query>
      );
    }
  }

  hoistNonReactStatic(CatalogFilters, Component);

  return CatalogFilters;
}
