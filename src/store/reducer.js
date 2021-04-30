//Data
import * as Data from '../VerbData';


const initialState = {
  currentVerb: Data.verbs[0]
}

const reducer = (state = initialState, action) => {
 if(action.type ==='CHANGE'){
   let newState = {
     ...state,
     currentVerb: Data.verbs[action.id]
    }
    return newState
 }
 return state;
   
}

export default reducer;