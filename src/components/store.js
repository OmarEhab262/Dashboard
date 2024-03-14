import { createStore } from "redux";
import rootReducer from "./reducers"; // Assuming you have a root reducer defined in './reducers'

const store = createStore(rootReducer); // Create your Redux store with the root reducer

export default store; // Export the store
