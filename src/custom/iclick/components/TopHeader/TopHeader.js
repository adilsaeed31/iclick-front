import React from 'react';
import Currency from './Currency';
import Language from './Language';
import Compare from './Compare';
import WelcomeMsg from './WelcomeMsg';
import TopLinks from './TopLinks';

const TopHeader = () => {
	return (
		<div className="container">
			<div className="header-left header-dropdowns">
				<Currency />

				<Language />

				<Compare />
			</div>

			<div className="header-right">
				<WelcomeMsg />

				<TopLinks />
			</div>
		</div>
	);
};

export default TopHeader;
