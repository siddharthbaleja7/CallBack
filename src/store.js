import { createStore } from "redux";

// store has reducer and global state 
// reducer manipulate the global state
function cartReducer(state = {item: {}},action){
    switch(action.type){
        case 'ADD_ITEM':
            return{
                // this is use for change the state by making first the deep copy and change whatever we want to change
                // using ...state
                ...state,
                item: action.payload
            };
            
        default:
            return state;
    }
}
const store = createStore(cartReducer);
export default store;

// action is an object which has 2 keys one is type of action and the second is the item or anything which want to add or remove
// also called payload