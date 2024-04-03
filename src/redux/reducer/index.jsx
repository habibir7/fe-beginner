import { combineReducers } from "redux";
import auth from "./auth"
 import resep from "./resep"
// import menu_post from "./menu_post"

const rootReducers = combineReducers({
	auth,
	resep,
	// menu_post
})

export default rootReducers