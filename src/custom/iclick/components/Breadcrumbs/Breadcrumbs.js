import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import { inject } from "mobx-react"
import ChevronRight from "mdi-material-ui/ChevronRight"
import Link from "components/Link"
import SharedPropTypes from "lib/utils/SharedPropTypes"

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
    const { tags } = this.props

    // Find first tag that is a parent of this tag, if any are
    const parentTag = tags.find(node => node.subTagIds.includes(tag._id))

    return (
      <Fragment>
        {!!parentTag && this.renderTagBreadcrumbPiece(parentTag)}
        <li class="breadcrumb-item">
          <Link route={`/tag/${tag.slug}`}>
            <span>{tag.name}</span>
          </Link>
        </li>
      </Fragment>
    )
  }

  renderTagBreadcrumbs() {
    const { tagId, tags } = this.props

    if (!tagId || !Array.isArray(tags) || tags.length === 0) return null // still loading

    const currentTag = tags.find(tag => tag._id === tagId)
    if (!currentTag) {
      throw new Error(`Unable to find current tag with ID ${tagId}`)
    }

    return this.renderTagBreadcrumbPiece(currentTag)
  }

  renderProductNameBreadcrumb = () => {
    const { product, tagId } = this.props

    if (tagId) {
      return (
        <Fragment>
          {this.renderTagBreadcrumbs()}
          <li class="breadcrumb-item">
            <Link route={`/product/${product.slug}`}>
              <span>{tag.name}</span>
            </Link>
          </li>
        </Fragment>
      )
    }

    return (
      <Fragment>
        <li class="breadcrumb-item">
          <Link route={`/product/${product.slug}`}>
            <span>{product.title}</span>
          </Link>
        </li>
      </Fragment>
    )
  }

  renderBreadcrumbs() {
    const { isPDP, isTagGrid } = this.props

    if (isTagGrid) {
      return this.renderTagBreadcrumbs()
    }

    if (isPDP) {
      return this.renderProductNameBreadcrumb()
    }

    return null
  }

  render() {
    return (
      <nav aria-label="breadcrumb" class="breadcrumb-nav mb-0">
        <div class="container">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link route="/">
                <i class="icon-home" />
              </Link>
            </li>
            {this.renderBreadcrumbs()}
          </ol>
        </div>
      </nav>
    )
  }
}

export default Breadcrumbs
