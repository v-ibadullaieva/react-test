import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import usersReducer from "./features/users/reducer";

const rootReducer = combineReducers({
	app: usersReducer,
	form: formReducer
});

export default rootReducer;