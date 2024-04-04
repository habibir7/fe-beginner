import axios from "axios";

const base_url = import.meta.env.VITE_BASE_URL;

export const getResep = () => async (dispatch, getState) => {
    try {
        dispatch({ type: "GET_RESEP_PENDING" });
        const res = await axios.get(base_url + "/resep");
        dispatch({ type: "GET_RESEP_SUCCESS", payload: res.data.data });
    } catch (err) {
        console.log(err?.message ? err.message : err);
        dispatch({ type: "GET_RESEP_ERROR" });
    }
};

export const getResepByID = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: "GET_RESEPID_PENDING" });
        const res = await axios.get(base_url + "/resep/" + id);
        dispatch({ type: "GET_RESEPID_SUCCESS", payload: res.data.data });
    } catch (err) {
        console.log(err?.message ? err.message : err);
        dispatch({ type: "GET_RESEPID_ERROR" });
    }
};

export const getResepUser = (id) => async (dispatch, getState) => {
    try {
        let token = getState().auth.data.token
        dispatch({ type: "GET_RESEPUSER_PENDING" });
        const res = await axios.get(base_url + "/resep/users/" + id,{
			headers: {
				"Authorization" : `Bearer ${token}`
			}
		});
        dispatch({ type: "GET_RESEPUSER_SUCCESS", payload: res.data.data });
    } catch (err) {
        console.log(err?.message ? err.message : err);
        dispatch({ type: "GET_RESEPUSER_ERROR" });
    }
};

export const postMenu = (data,navigate) => async (dispatch, getState) => {
    try {
		let token = getState().auth.data.token
        dispatch({ type: "POST_RESEP_PENDING" });
        const res = await axios.post(base_url+"/resep",data,{
			headers: {
				"Authorization" : `Bearer ${token}`,
				"Content-Type": "multipart/form-data"
			}
		})
		console.log("res")
		console.log(res)
		if(res.data.code)
        dispatch({ type: "POST_RESEP_SUCCESS", payload: res.data });
		navigate("/search")
    } catch (err) {
		console.log("err")
		console.log(err)
        console.log(err?.message ? err.message : err);
        dispatch({ type: "POST_RESEP_ERROR", payload: err?.response?.data?.message ?? "post resep error" });
    }
};


export const putMenu = (id,data,navigate) => async (dispatch, getState) => {
    try {
		let token = getState().auth.data.token
        dispatch({ type: "PUT_RESEP_PENDING" });
        const res = await axios.put(base_url+"/resep/" + id,data,{
			headers: {
				"Authorization" : `Bearer ${token}`,
				"Content-Type": "multipart/form-data"
			}
		})
		console.log("res")
		console.log(res)
		if(res.data.code)
        dispatch({ type: "PUT_RESEP_SUCCESS", payload: res.data });
		navigate("/user_resep")
    } catch (err) {
		console.log("err")
		console.log(err)
        console.log(err?.message ? err.message : err);
        dispatch({ type: "PUT_RESEP_ERROR", payload: err?.response?.data?.message ?? "put resep error" });
    }
};