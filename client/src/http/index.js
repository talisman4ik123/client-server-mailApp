const API_URL = "http://localhost:5000/api/";

export function registration(data) {
    return async function (dispatch) {
        dispatch({ type: "loading/start" });

        try {
            const response = await fetch(`${API_URL}registration`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const error = await response.json();
                dispatch({
                    type: "loading/finish",
                    payload: error.message || "Error during registration!",
                });
                return;
            }

            const message = await response.json();
            dispatch({ type: "loading/finish", payload: null });
            return {
                status: 200,
                message,
            };
        } catch (error) {
            dispatch({ type: "loading/finish", payload: error.message });
        }
    };
}
