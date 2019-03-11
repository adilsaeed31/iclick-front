import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from 'custom/iclick/components/Header';
import Footer from 'custom/iclick/components/Footer';

class Layout extends Component {
	static propTypes = {
		children: PropTypes.node,
		classes: PropTypes.object,
		shop: PropTypes.shape({
			name: PropTypes.string
		}).isRequired,
		viewer: PropTypes.object
	};

	static defaultProps = {
		classes: {
			main: 'main'
		}
	};

	render() {
		const { classes, children, shop, viewer } = this.props;

		return (
			<React.Fragment>
				<div className="page-wrapper">
					<Header shop={shop} viewer={viewer} />
					<main className={classes.main}>
						<article className={classes.article}>{children}</article>
					</main>
					<Footer />
				</div>
				<div className="mobile-menu-overlay"/>
				<a id="scroll-top" href="#top" title="Top" role="button">
					<i className="icon-angle-up" />
				</a>
			</React.Fragment>
		);
	}
}

export default Layout;
