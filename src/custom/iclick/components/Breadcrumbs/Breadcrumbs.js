import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { inject } from "mobx-react";
import ChevronRight from "mdi-material-ui/ChevronRight";
import Link from "components/Link";
import SharedPropTypes from "lib/utils/SharedPropTypes";

@inject("tags")
class Breadcrumbs extends Component {
  static propTypes = {
    isPDP: PropTypes.bool,
    isTagGrid: PropTypes.bool,
    product: PropTypes.object,
    tagId: PropTypes.string,
    tags: PropTypes.arrayOf(SharedPropTypes.tag).isRequired
  }

  renderTagBreadcrumbPiece(tag) {
    const { tags } = this.props;

    // Find first tag that is a parent of this tag, if any are
    const parentTag = tags.find((node) => node.subTagIds.includes(tag._id));

    return (
      <Fragment>
        {!!parentTag && this.renderTagBreadcrumbPiece(parentTag)}
        <ChevronRight />
        <Link route={`/tag/${tag.slug}`}>
          <span>{tag.name}</span>
        </Link>
      </Fragment>
    );
  }

  renderTagBreadcrumbs() {
    const { tagId, tags } = this.props;

    if (!tagId || !Array.isArray(tags) || tags.length === 0) return null; // still loading

    const currentTag = tags.find((tag) => tag._id === tagId);
    if (!currentTag) {
      throw new Error(`Unable to find current tag with ID ${tagId}`);
    }

    return this.renderTagBreadcrumbPiece(currentTag);
  }

  renderProductNameBreadcrumb = () => {
    const { product, tagId } = this.props;

    if (tagId) {
      return (
        <Fragment>
          {this.renderTagBreadcrumbs()}
          <ChevronRight />
          <Link route={`/product/${product.slug}`}>
            <span>{product.title}</span>
          </Link>
        </Fragment>
      );
    }

    return (
      <Fragment>
        <ChevronRight />
        <Link route={`/product/${product.slug}`}>
          <span>{product.title}</span>
        </Link>
      </Fragment>
    );
  }

  renderBreadcrumbs() {
    const { isPDP, isTagGrid } = this.props;

    if (isTagGrid) {
      return this.renderTagBreadcrumbs();
    }

    if (isPDP) {
      return this.renderProductNameBreadcrumb();
    }

    return null;
  }

  render() {
    return (
      <div>
        <Link route="/">
          <span>Home</span>
        </Link>
        {this.renderBreadcrumbs()}
      </div>
    );
  }
}

export default Breadcrumbs;
