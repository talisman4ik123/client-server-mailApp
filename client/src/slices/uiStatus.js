const initialState = {
    loading: false,
    error: null,
};

export default function uiStatusReducer(state = initialState, action) {
    switch (action.type) {
        case "loading/start":
            return { ...state, loading: true, error: null };

        case "loading/finish":
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
}
