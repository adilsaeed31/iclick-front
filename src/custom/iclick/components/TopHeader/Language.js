import React from 'react';

const Language = (props) => (
	<div className="header-dropdown">
		<a href="#">
			<img src="/static/images/flags/en.png" alt="England flag" />ENGLISH
		</a>
		<div className="header-menu">
			<ul>
				<li>
					<a href="#">
						<img src="/static/images/flags/en.png" alt="England flag" />ENGLISH
					</a>
				</li>
				<li>
					<a href="#">
						<img src="/static/images/flags/fr.png" alt="France flag" />FRENCH
					</a>
				</li>
			</ul>
		</div>
	</div>
);

export default Language;
