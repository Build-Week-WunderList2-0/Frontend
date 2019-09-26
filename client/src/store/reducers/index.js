import { FETCHING_MESSAGE_SUCCESS } from "../../actions/LoginAction";

const initialState = {
  'smurfs': [
  {
    name: "Brainey",
    age: 200,
    height: "5cm",
    id: 0
  }
]};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_MESSAGE_SUCCESS:
      return{
        ...state,
        message: action.payload,
        status: '',
        error: ''
      }
    default:
      return state;
  }
} 