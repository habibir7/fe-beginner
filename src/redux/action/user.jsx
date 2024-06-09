import axios from "axios";

const base_url = import.meta.env.VITE_BASE_URL;


export const putUser = (id,data,navigate) => async (dispatch, getState) => {
    try {
		let token = getState().auth.data.token
        dispatch({ type: "PUT_USER_PENDING" });
        const res = await axios.put(base_url+"/users/",data,{
			headers: {
				"Authorization" : `Bearer ${token}`,
				"Content-Type": "multipart/form-data"
			}
		})
		console.log("res")
		console.log(res)
		if(res.data.code)
        dispatch({ type: "PUT_USER_SUCCESS", payload: res.data });
		navigate("/edit_profile")
    } catch (err) {
		console.log("err")
		console.log(err)
        console.log(err?.message ? err.message : err);
        dispatch({ type: "PUT_USER_ERROR", payload: err?.response?.data?.message ?? "put resep error" });
    }
};