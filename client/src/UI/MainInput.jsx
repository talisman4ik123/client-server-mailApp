import { TextField } from '@mui/material';

function MainInput({children, type}) {
    return (
        <TextField 
            id={`outlined-basic-${type}`} 
            label={children} 
            variant="outlined" 
            size='small'
            type={type}
            autoComplete="off"
            required
            sx={{
                // пример стилизации
                '& .MuiInputBase-root': {
                    backgroundColor: 'transparent',
                    minWidth: "300px",
                    fontSize: "14px"
                },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'black',
                    borderWidth: "1px",
                },
                '& .MuiInputLabel-root.Mui-focused': {
                    color: 'black',
                },
                '& label': {
                    color: '#79747e',
                    fontSize: "14px"
                },
                '& input:-webkit-autofill': {
                    bgcolor: 'white', // или любой цвет, который хотите
                    WebkitBoxShadow: '0 0 0px 1000px white inset', // чтобы убрать желтый фон
                    transition: 'background-color 5000s ease-in-out 0s', // чтобы избежать мигания
                },
            }}/>
    )
}

export default MainInput