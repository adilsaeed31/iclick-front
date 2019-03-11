import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'custom/iclick/components/Link';

export default class Error extends Component {
	static propTypes = {
		shop: PropTypes.object,
		statusCode: PropTypes.number,
		subtitle: PropTypes.string
	};

	static getInitialProps({ res, err }) {
		let { statusCode } = res;

		// Did not receive an OK response
		if (!statusCode) {
			statusCode = err ? err.statusCode : null;
		}

		return { statusCode };
	}

	static defaultProps = {
		subtitle: 'Page Not Found'
	};

	render() {
		const { shop, statusCode, subtitle } = this.props;

		return (
			<div>
				<Helmet title={`${subtitle} | ${shop && shop.name}`} />
				{statusCode ? (
					<div>{statusCode}</div>
				) : (
					<Fragment>
						<div>Sorry! We couldn't find what you're looking for.</div>
						<div>
							<Link route="/">Home</Link>
						</div>
					</Fragment>
				)}
			</div>
		);
	}
}
