import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Notify({children, type}) {

    const dispatch = useDispatch();

    const [open, setOpen] = useState(true);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
        dispatch({ type: "loading/finish", payload: null });
    };

    return (
        <div>
            <Snackbar open={open} onClose={handleClose} autoHideDuration={5000} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                <Alert
                    severity={type}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                {children}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Notify