import { FETCHING_MESSAGE_SUCCESS } from "../../actions/LoginAction";

const initialState = {
 
  
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    // case FETCHING_MESSAGE_SUCCESS:
    //   console.log('Reducer, index.js', action.payload)
    //   return{
    //     // ...state,
    //     //   userId: {
    //     //     ...state.userId,
    //     //     user_id: action.payload.user_id
    //     //   }

    //   }
    default:
      return state;
  }
} 