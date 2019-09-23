import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import Signup from './components/forms/Signup';
import Login from './components/forms/Login';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Navbar />
				{/*         @TODO:      
                            Add components
                */}
				<Route exact path="/" />
				<Route path="/signup" component={Signup} />
				<Route path="/login" component={Login} />
			</header>
		</div>
	);
}

export default App;
