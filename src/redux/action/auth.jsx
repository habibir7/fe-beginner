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
