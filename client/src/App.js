import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import Signup from './components/forms/Signup';
import Login from './components/forms/Login';
import './App.css';
import { connect } from 'react-redux';

import {getUser} from './components/actions/index.js'

function App(props) {
	
	return (
		
		<div className="App">
			{/* {console.log('App.js: props', props)} */}
			<header className="App-header">
				<Navbar />
				{/*         @TODO:      
                            Add components
                */}
				<Route exact path="/" />
				<Route path="/signup" render={(props) => <Signup{...props} getUser={props.getUser}/>} />
				<Route path="/login" component={Login} />
			</header>
		</div>
	);
}

const mapStatetoProps = state => {
    // console.log(state.)
    return {

    }
}
export default connect(mapStatetoProps, {getUser})(App);
