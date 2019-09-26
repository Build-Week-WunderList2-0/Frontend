import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import ListItems from './ListItems';
import { Link } from 'react-router-dom';
import '../App.css';
// import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import SearchForm from './SearchForm';

const CreateList = ({ status }) => {
	const [ list, setList ] = useState([ { due_by: '09/24/2019', title: 'Title', monthly: false } ]);
	// const [editing, setEditing] = useState(false)
	// const [itemToEdit, setItemToEdit] = useState()
	
	// const editItem = item => {
	// 	setEditing(true);
	// }

	// const saveEdit = e => {
	// 	e.preventDefault();
	// 	axiosWithAuth()
	// 	  .put(`/tasks/update/${}`, itemToEdit)
	// 	  .then(res => {
	// 		 // console.log(res)
	// 		setEditing(false)
	// 	  })
	// 	  .catch(err =>console.log(err))
		
	// };
	
	//   const deleteColor = color => {
	// 	// make a delete request to delete this color
	// 	axiosWithAuth()
	// 	  .delete(`/colors/${color.id}`)
	// 	  .then(res => console.log(res))
	// 	  .catch(err => console.log(err))
	// };

	useEffect(() => {
		axiosWithAuth()
		
			.get("https://wunderlist2019.herokuapp.com/tasks/",)
			.then((response) => {
				console.log('CreateList.js: useEffect: axiosWithAuth:', response);
				response.data.map((item) => {
					console.log('CreateList.js: useEffect: axiosWithAuth: response: item', item);
					// setList([ ...list, item ]);
					setList([ ...list, item ]);
				});

				//setStatus(response.data);
			})
			.catch((error) => {
				console.log('the data was not displayed', error);
			});
	}, []);

	useEffect(
		() => {
			if (status) {
				setList([ ...list, status ]);
				console.log('Our list', list);
			}
		},
		[ status ]
	);

	// useEffect(() => {
	// 	axiosWithAuth()
	// 		.get(`https://wunderlist2019.herokuapp.com/tasks/all`)
	// 		.then((response) => {
	// 			console.log('data', response.data);
	// 			setList([ ...list, response.data ]);

	// 			//setStatus(response.data);
	// 		})
	// 		.catch((error) => {
	// 			console.log('the data was not displayed', error);
	// 		});
	// }, []);

	// function addTask(){
	//     .push(input)
	// }

	function isDaily(item) {
		return !item.monthly;
	}
	function isMonthly(item) {
		return item.monthly;
	}

	return (
		<div className="list">
			<Link to="/search" className="links">
				Search
			</Link>
			Create List
			<Form className="form">
				<div>
					Date of list
					<Field type="text" name="due_by" placeholder="mm/dd/yyyy" />
				</div>
				<div>
					Title:
					<Field type="text" name="title" placeholder="Title" />
				</div>
				<div>
					Do you want this list to be scheduled weekly?
					<Field type="checkbox" name="weekly" />
				</div>
				<div>
					Do you want this list to be scheduled monthly?
					<Field type="checkbox" name="monthly" />
				</div>
			
				<button>Submit!</button>
			</Form>
			<div className="list-container">
				<h1>Daily ToDo Lists: </h1>
				{list.filter(isDaily).map((list) => (
					<div className="list-items">
						<p>Date: {list.due_by}</p>
						<p>Title: {list.title}</p>
						<ListItems />
						<button className="list-button">List Complete!</button>
					</div>
				))}
			</div>
			<div className="list-container">
				<h1>Monthly ToDoLists:</h1>
				<div>
					{list.filter(isMonthly).map((list) => (
						<div className="list-items">
							<p>Date: {list.due_by}</p>
							<p>Title: {list.title}</p>
							<ListItems />
							<button className="list-button">List Complete!</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

const FormikCreate = withFormik({
	mapPropsToValues({ due_by, title, monthly, weekly, completed, user_id, description, segment }) {
		// console.log('mapPropsToValues',mapPropsToValues)
		return {
			user_id: user_id || '',
			due_by: due_by || '',
			title: title,
			weekly: weekly || false,
			monthly: monthly || false,
			completed: completed || false,
			description: description || 'none',
			segment: segment || 'none'
		};
	},
	validationSchema: Yup.object().shape({
		due_by: Yup.string().required('date is required'),
		title: Yup.string().required('list is required')
	}),
	handleSubmit(values, { setStatus, props }) {
		// props.getUser(values);
		// https://wunderlist2019.herokuapp.com/tasks/
		axiosWithAuth()
			.post(`https://wunderlist2019.herokuapp.com/tasks/add`, values)
			.then((response) => {
				console.log('CreateList.js: handleSubmit: post response', response);
				localStorage.setItem('token', response.data.payload);

			})
			.catch((error) => console.log(error.response));
		setStatus(values);
	}
})(CreateList);

export default FormikCreate;
