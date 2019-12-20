import React from 'react';

const Currency = (props) => (
	<div className="header-dropdown">
		<a href="#">USD</a>
		<div className="header-menu">
			<ul>
				<li>
					<a href="#">EUR</a>
				</li>
				<li>
					<a href="#">USD</a>
				</li>
			</ul>
		</div>
	</div>
);

export default Currency;
