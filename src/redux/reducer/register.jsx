const initialState = {
    data: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    ErrorMessage: null,
};

const RegisterReducers = (state = initialState, action) => {
    if (action.type === "POST_USERS_PENDING") {
        return {
            ...state,
            data: null,
            isError: false,
            isSuccess: false,
            isLoading: true,
            ErrorMessage: null,
        };
    } else if (action.type === "POST_USERS_SUCCESS") {
        return {
            ...state,
            data: action.payload,
            isError: false,
            isSuccess: true,
            isLoading: false,
            ErrorMessage: null,
        };
    } else if (action.type === "POST_USERS_ERROR") {
        return {
            ...state,
            data: action.payload,
            isError: true,
            isSuccess: false,
            isLoading: false,
            ErrorMessage: action.payload,
        };
    } else {
        return state;
    }
};

export default RegisterReducers;