import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
// import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 20px;
	flex-wrap: wrap;
`;
const Card = styled.div`
	width: 100px;
	border: 1px solid black;
	background: red;
	color: white;
`;
const Search = styled.div`
	display: flex;
	flex-direction: column;
	width: 200px;
	margin: 20px;
`;

const SearchForm = ({ status }) => {
	const [ list, setList ] = useState([]);

	useEffect(
		() => {
			if (status) {
				setList([ ...list, status ]);
			}
		},
		[ status ]
	);

	function clearList() {
		setList([]);
	}

	return (
		<div>
			<div>
				<Form>
					<Search>
						<label>
							Search:
							<Field type="text" name="name" />
						</label>
						<button onClick={clearList}>Submit!</button>
					</Search>
				</Form>
			</div>

			<Container>
				{list.map((item) => (
					<Card>
						<h3>Title: {item.title}</h3>
						<h4>Date: {item.due_by}</h4>
						<h4>Description: {item.description}</h4>
					</Card>
				))}
			</Container>
		</div>
	);
};

const FormikSearchForm = withFormik({
	mapPropsToValues({ name, user_id }) {
		return {
			name: name || 'Search'
			// user_id: user_id || '1'
		};
	},
	handleSubmit(values, { setStatus }) {
		console.log(values);
		axiosWithAuth()
			.get(`https://wunderlist2019.herokuapp.com/tasks/all`)
			.then((response) => {
				console.log('response', response);
				response.data.forEach((item) => {
					if (item.title.includes(values.name)) {
						setStatus(item);
					}
				});

				//setStatus(response.data);
			})
			.catch((error) => {
				console.log('SearchForm: handleSubmit: the data was not displayed', error);
			});
	}
})(SearchForm);

export default FormikSearchForm;
