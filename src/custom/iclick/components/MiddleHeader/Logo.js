import React from 'react';
import Link from 'custom/iclick/components/Link';

const Logo = ({ shop }) => (
	<Link route="/" className="logo">
		<img alt={shop.name} src="/static/images/iclicklogo.png"/>
	</Link>
);
``;
export default Logo;
