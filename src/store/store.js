import { createStore, applyMiddleware, combineReducers, compose } from 'redux'

import thunk from 'redux-thunk'
import { shapeReducer } from '../store/shape-reducer'




const rootReducer = combineReducers({
    shapeModule: shapeReducer,

})


// attaching to redux tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
// thunk- interaction with redux tools such as dispatch and getState... ?