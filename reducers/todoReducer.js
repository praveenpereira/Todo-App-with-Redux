import {ADDTODO, DELETETODO, DELETEALL} from '../actions/todoAction';

const initialState = [];

const todoReducer = (state=initialState,action)=>{
       switch(action.type){
         case ADDTODO:
           return [...state, action.payload]
            
           case DELETETODO:
           const filtered = state.filter((item)=>item.id !== action.payload);
            return filtered;

            case DELETEALL:
             return [];
           
          default: return state;
       }
}
export default todoReducer;