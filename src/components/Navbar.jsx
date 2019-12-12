import React from 'react';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<a className="navbar-brand" href="#">
				Bunny-To-Do
			</a>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<Link to="/signup" className="nav-link">
							Sign up
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/users" className="nav-link">
							Users
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/todo" className="nav-link">
							Todo
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
export default NavbarComponent;
