import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<div className="nav">
			<img src={require('../images/logo.png')} />
			<div className="links">
				<Link to="/signup" className="links">
					Sign Up
				</Link>
				<Link to="/login" className="links">
					Log In
				</Link>
				<Link to="/home" className="links">
					Home
				</Link>
			</div>
		</div>
	);
};

export default NavBar;
