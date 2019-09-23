import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<div className="nav">
			<h1>WunderList 2.0</h1>
			<div className="links">
				<Link to="/signup" className="links">
					Sign Up
				</Link>
				<Link to="/login" className="links">
					Log In
				</Link>
				<Link to="/" className="links">
					Home
				</Link>
			</div>
		</div>
	);
};

export default NavBar;
