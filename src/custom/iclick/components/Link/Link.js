/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import PropTypes from "prop-types";
import routes, { Link as NextLink } from "routes";
import track from "lib/tracking/track";
import getConfig from "next/config";

const {
  publicRuntimeConfig: { enableSPARouting }
} = getConfig();

@track((ownProps) => ({
  component: "Link",
  url: ownProps.route || ownProps.href,
  params: ownProps.params
}))
class Link extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    classes: PropTypes.object,
    href: PropTypes.string,
    onClick: PropTypes.func,
    params: PropTypes.object,
    route: PropTypes.string,
    to: PropTypes.string
  }

  render() {
    const {
      children,
      classes,
      className,
      href,
      onClick,
      params,
      route,
      tracking, // eslint-disable-line
      to,
      ...props
    } = this.props;

    if (enableSPARouting === false) {
      const {
        urls: { as }
      } = routes.findAndGetUrls(route || to || href, params);

      return (
        <a className={className} href={as}>
          {children}
        </a>
      );
    }

    return (
      <NextLink route={route || to || href} params={params} {...props} passHref>
        <a className={className} role="link" tabIndex={0}>
          {children}
        </a>
      </NextLink>
    );
  }
}

export default Link;
