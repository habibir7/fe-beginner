const initialState = {
    data: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
	ErrorMessage: null,
};

const ResepReducers = (state = initialState, action) => {
    if (action.type === "PUT_RESEP_PENDING") {
        return {
            ...state,
            data: null,
            isError: false,
            isSuccess: false,
            isLoading: true,
			ErrorMessage: null,
        };
    } else if (action.type === "PUT_RESEP_SUCCESS") {
        return {
            ...state,
            data: action.payload,
            isError: false,
            isSuccess: true,
            isLoading: false,
			ErrorMessage: null,
        };
    } else if (action.type === "PUT_RESEP_ERROR") {
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

export default ResepReducers;