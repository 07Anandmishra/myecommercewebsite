import rootReducer from "./redux/reducers/main";
import { createStore } from "redux";

const store=createStore(
    rootReducer
)
export default store