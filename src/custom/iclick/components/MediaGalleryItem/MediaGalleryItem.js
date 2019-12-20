import React, { Component } from "react";
import PropTypes from "prop-types";
import ButtonBase from "@material-ui/core/ButtonBase";
import ProgressiveImage from "@reactioncommerce/components/ProgressiveImage/v1";

/**
 * Product detail media gallery item
 * @class ProductDetailMediaGalleryItem
 */
class MediaGalleryItem extends Component {
  static propTypes = {
    /**
     * CSS class names
     */
    classes: PropTypes.object,

    /**
     * The 0-based integer position of this item within a group of MediaGalleryItems
     */
    index: PropTypes.number,

    /**
     * Product media
     */
    media: PropTypes.object,

    /**
     * Click callback
     * @example (event, media) => {}
     */
    onClick: PropTypes.func
  }

  static defaultProps = {
    onClick: () => {}
  }

  /**
   * Click handler for ButtonBase
   * @param {SyntheticEvent} event Event
   * @returns {undefined}
   */
  handleClick = (event) => {
    this.props.onClick(event, this.props.media, this.props.index);
  }

  render() {
    const { media } = this.props;

    // If all props are undefined then skip rendering component
    if (!media) return null;

    return (
      <ButtonBase onClick={this.handleClick}>
        <ProgressiveImage presrc={media.URLs.thumbnail} src={media.URLs.thumbnail} />
      </ButtonBase>
    );
  }
}

export default MediaGalleryItem;
