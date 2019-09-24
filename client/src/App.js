import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Switch } from 'react-router-dom';

import Signup from './components/forms/Signup';
import Login from './components/forms/Login';
import CreateList from './components/forms/CreateList';

import './App.css';


function App() {
	return (
		
		<div className="App">
			{/* {console.log('App.js: props', props)} */}
			<header className="App-header">
				<Navbar />
				{/*         @TODO:      
                            Add components
                */}
				<Route exact path="/home" component={CreateList} />
				<Route 
					path="/signup" 
					render={(props) => <Signup {...props} 
					getUser={props.getUser} />} />
				<Route path="/login" component={Login} />
			</header>
		</div>
	);
}

export default App;
