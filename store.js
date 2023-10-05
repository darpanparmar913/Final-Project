import { applyMiddleware, compose, createStore } from "redux";
import mainReducer from "./src/Component/Services/ProductReducer";
import thunk from "redux-thunk";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(

    mainReducer,
    composeEnhancers(applyMiddleware(thunk))

);


export default store
