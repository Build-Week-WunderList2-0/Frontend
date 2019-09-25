import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import Signup from './components/forms/Signup';
import Login from './components/forms/Login';
import CreateList from './components/forms/CreateList';
import SearchForm from './components/forms/SearchForm';

import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Navbar />
				{/*         @TODO:      
                            Add components
                */}
				<Route exact path="/home" component={CreateList} />
				<Route path="/signup" render={(props) => <Signup {...props} getUser={props.getUser} />} />
				<Route path="/login" component={Login} />
				<Route path="/search" component={SearchForm} />
			</header>
		</div>
	);
}

export default App;
