import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Signup from './components/Signup';
import SearchForm from './components/SearchForm';
import Login from './components/Login';
import CreateList from './components/CreateList';
import PrivateRoute from './routes/PrivateRoute.js';

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
				<Switch>
					<Route path="/signup" render={(props) => <Signup {...props} getUser={props.getUser} />} />
					<Route path="/login" render={(props) => <Login {...props} getLogin={props.getLogin} />} />
					<Route path="/search" component={SearchForm} />
					<PrivateRoute exact path="/home" component={CreateList} />
				</Switch>
			</header>
		</div>
	);
}

const mapStatetoProps = state => {
    console.log('App.js: mSTP:', state)
    return {
        userId: state.userId
    }
}
export default connect(mapStatetoProps, {})(App);

