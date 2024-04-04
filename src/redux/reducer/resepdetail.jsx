const initialState = {
    data: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
	ErrorMessage: null,
};

const ResepIDReducers = (state = initialState, action) => {
    if (action.type === "GET_RESEPID_PENDING") {
        return {
            ...state,
            data: null,
            isError: false,
            isSuccess: false,
            isLoading: true,
			ErrorMessage: null,
        };
    } else if (action.type === "GET_RESEPID_SUCCESS") {
        return {
            ...state,
            data: action.payload,
            isError: false,
            isSuccess: true,
            isLoading: false,
			ErrorMessage: null,
        };
    } else if (action.type === "GET_RESEPID_ERROR") {
        return {
            ...state,
            data: null,
            isError: true,
            isSuccess: false,
            isLoading: false,
			ErrorMessage: action.payload
        };
    } else {
        return state;
    }
};

export default ResepIDReducers;