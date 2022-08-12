import {combineReducers} from 'redux';

import superheroesReducer from "./superheroesReducer";

// собирает коллекцию редюсеров в главный
const rootReducer = combineReducers({
    superheroesReducer: superheroesReducer
});
export default rootReducer;