// import { FETCHING_MESSAGE_SUCCESS } from "../actions";

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
    // case FETCHING_MESSAGE_SUCCESS:
    //   return {
    //     ...state,
    //     smurfs: action.payload
    //   }
    default:
        return state;
  }
} 