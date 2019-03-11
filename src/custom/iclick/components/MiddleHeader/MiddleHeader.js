import React from 'react';
import Search from './Search';
import Logo from './Logo';
import Contact from './Contact';
import CartDropDown from './CartDropDown';

const MiddleHeader = ({ shop }) => (
	<div className="container">
		<div className="header-left">
			<Search />
		</div>
		<div className="header-center">
			<Logo shop={shop} />
		</div>
		<div className="header-right">
			<Contact />
			<CartDropDown />
		</div>
	</div>
);

export default MiddleHeader;
