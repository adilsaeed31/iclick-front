import React from 'react';

const Search = (props) => (
	<React.Fragment> 
		<button className="mobile-menu-toggler" type="button">
			<i className="icon-menu" />
		</button>
		<div className="header-search">
			<a href="#" className="search-toggle" role="button">
				<i className="icon-magnifier" />
			</a>
			<form action="#" method="get">
				<div className="header-search-wrapper">
					<input type="search" className="form-control" name="q" id="q" placeholder="Search..." required />
					<div className="select-custom">
						<select id="cat" name="cat">
							<option value="">All Categories</option>
						</select>
					</div>
					<button className="btn" type="submit">
						<i className="icon-magnifier" />
					</button>
				</div>
			</form>
		</div>
	</React.Fragment>
);

export default Search;
