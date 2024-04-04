import axios from "axios";

const base_url = import.meta.env.VITE_BASE_URL;

export const authLogin = (data,navigate) => async (dispatch, getState) => {
    try {
        dispatch({ type: "POST_AUTH_PENDING" });
        const res = await axios.post(base_url + "/auth",data, {
			headers: {
				"Content-Type" : "application/x-www-form-urlencoded"
			}
		});
        dispatch({ type: "POST_AUTH_SUCCESS", payload: res.data });
		navigate("/")
    } catch (err) {
        dispatch({ type: "POST_AUTH_ERROR",payload: err?.response?.data?.messages ?? "login error"  });
    }
};

export const authLogout = () => async (dispatch,getState) => {
	dispatch({type: "AUTH_LOGOUT"})
}


export const postUsers = (data,navigate) => async (dispatch, getState) => {
    try {
        dispatch({ type: "POST_USERS_PENDING" });
        const res = await axios.post(base_url + "/users",data, {
			headers: {
				"Content-Type" : "application/x-www-form-urlencoded"
			}
		})
		console.log("res")
		console.log(res)
		if(res.data.code)
        dispatch({ type: "POST_USERS_SUCCESS", payload: res.data });
		navigate("/login")
    } catch (err) {
		console.log("err")
		console.log(err)
        console.log(err?.message ? err.message : err);
        dispatch({ type: "POST_USERS_ERROR", payload: err?.response?.data?.message ?? "Register error" });
    }
};
