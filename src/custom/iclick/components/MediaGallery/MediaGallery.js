import React, { Component } from "react";
import PropTypes from "prop-types";
import ProgressiveImage from "@reactioncommerce/components/ProgressiveImage/v1";
import MediaGalleryItem from "custom/iclick/components/MediaGalleryItem";

/**
 * Product detail media gallery
 * @class ProductDetailMediaGallery
 */
class MediaGallery extends Component {
  static propTypes = {
    /**
     * Media items
     */
    mediaItems: PropTypes.arrayOf(PropTypes.object),

    /**
     * MUI Theme
     */
    theme: PropTypes.object
  }

  static defaultProps = {
    mediaItems: []
  }

  state = { featuredMediaIndex: 0 }

  /**
   * @name handleMediaItemClick
   * @param {SyntheticEvent} event Event
   * @param {Object} media The `media` prop of the MediaGalleryItem that was clicked
   * @param {Number} index The `index` prop of the MediaGalleryItem that was clicked
   * @returns {undefined} Nothing
   */
  handleMediaItemClick = (event, media, index) => {
    this.setState({ featuredMediaIndex: index });
  }

  renderPlaceHolderImg = () => {
    const placeholderURL = "/static/images/placeholder.gif";
    return <ProgressiveImage presrc={placeholderURL} src={placeholderURL} />;
  }

  renderFeaturedImage() {
    const { mediaItems } = this.props;

    // Render placeholder, when product does not have images set.
    if (Array.isArray(mediaItems) && mediaItems.length === 0) {
      return this.renderPlaceHolderImg();
    }

    const featuredMedia = mediaItems[this.state.featuredMediaIndex];
    const mediaUrls = featuredMedia && featuredMedia.URLs;

    // TODO: figure out the correct usage of alt text here
    // LINK TO GH ISSUE
    return <ProgressiveImage presrc={mediaUrls && mediaUrls.thumbnail} src={mediaUrls && mediaUrls.large} />;
  }

  render() {
    const { mediaItems } = this.props;

    return (
      <div>
        <div>
          <div>{this.renderFeaturedImage()}</div>

          <div>
            {mediaItems.map((media, index) => (
              <div item key={index} xs={3} sm={2}>
                <MediaGalleryItem index={index} media={media} onClick={this.handleMediaItemClick} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default MediaGallery;
