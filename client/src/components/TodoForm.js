import React, {useState, useEffect} from 'react'
import { withFormik, Form, Field } from 'formik';
import { axiosWithAuth } from '../utils/axiosWithAuth'
import * as Yup from 'yup';







const TodoForm = ({ values, errors, touched, status }) =>{
    
    const [ todo, setTodo ] = useState([]);

	useEffect(
		() => {
			if (status) {
				setTodo([ ...todo, status ]);
				// console.log(user);
			}
		},
		[ status ]
    );
return (
        <div className = "register">
			<h1>Add Todo</h1>
			<Form>
				<div>
					{touched.title && errors.title && <p>{errors.title}</p>}
					<Field className="username" type="text" name="title" placeholder="add title" />
				</div>
				<div>
					{touched.description && errors.description&& <p>{errors.description}</p>}
					<Field className="username" type="text" name="description" placeholder="add description" />
				</div>
                <div>
					{touched.segment && errors.segment && <p>{errors.segment}</p>}
					<Field className="username" type="text" name="segment" placeholder="add segment" />
				</div>

                <div>
					{touched.due_by && errors.due_by && <p>{errors.due_by}</p>}
					<Field className="username" type="text" name="due_by" placeholder="add date" />
				</div>
              
				
                Do you want this task to be scheduled weekly?
				<Field type="checkbox" name="weekly" />
				Do you want this task to be scheduled monthly?
				<Field type="checkbox" name="monthly" />

				<button type = "submit">Submit</button>
			</Form>


            <div>
        {/* {todo && todo.map(item =>(
          <p> {item.title}</p> 
        ))} */}
        </div>
		</div>
       
    
    
    )
    

    
}

const  TodoFormik = withFormik({
    mapPropsToValues({ due_by, title, monthly, weekly, completed, description, segment }) {
        return {
            user_id: parseInt(localStorage.getItem('userID')),
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
    handleSubmit(values, { setStatus,props}) {
        // props.getUser(values);
        // https://wunderlist2019.herokuapp.com/tasks/
      
        axiosWithAuth()
            .post(`https://wunderlist2019.herokuapp.com/tasks/add`, values)
            .then((response) => {
                console.log('CreateList.js: handleSubmit: post response', response);
                
            })
            .catch((error) => console.log(error));
        setStatus(values);
        props.addTodo(values)
    }
})(TodoForm)


export default TodoFormik;