//Data
import * as Data from '../VerbData';


const initialState = {
  currentVerb: Data.verbs[0],
  verbSearch: " "
}

const reducer = (state = initialState, action) => {
 if(action.type ==='CHANGE'){
   let newState = {
     ...state,
     currentVerb: action.verb
    }
    return newState
 }
 if(action.type === 'CHANGE_SEARCH'){
   let searchWord = state.verbSearch;
   searchWord = action.search;
   let newState = {
     ...state,
     verbSearch: searchWord
   }
   return newState
 }
 if(action.type === 'CLEAR'){
   let clear = " ";
   let newState = {
     ...state,
     verbSearch: clear
   }
   return newState
 }
 return state;
   
}

export default reducer;