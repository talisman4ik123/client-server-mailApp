import MainInput from "../UI/MainInput"
import PassInput from "../UI/PassInput"
import Button from '@mui/material/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { registration } from "../http";
import { useDispatch } from "react-redux"
import useInput from "../hooks/useInput";

function RegForm() {

    const userName = useInput('');
    const userEmail = useInput('');
    const userPass = useInput('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegistr = async (e) => {
        e.preventDefault();

        const data = {
            name: userName.value,
            email: userEmail.value,
            password: userPass.value
        }

        const result = await dispatch(registration(data));

        if(result && result.status === 200) {
            navigate('/', {state: {message: result.message}})
        }
    }

    return (
        <form>
            <h1 className="mb-1 font-bold text-[rgb(49,49,49)] text-2xl">Sign up</h1>
            <p className="mb-8 text-[#313131] opacity-[0.75] text-sm">Create your account to use mail</p>
            <div className='flex flex-col gap-4'>
                <MainInput inputState={userName} type="text">name</MainInput>
                <MainInput inputState={userEmail} type="email">email</MainInput>
                <PassInput inputState={userPass}/>
                <Button onClick={handleRegistr} variant="contained" sx={{textTransform: "none", marginTop: "10px"}}>Create account</Button>
                <div className="flex justify-center mt-6">
                    <span>Already have an account?</span>
                    <NavLink className={'ml-2 font-bold text-[#ff8682] underline underline-offset-4'} to={'/'}>Login</NavLink>
                </div>
            </div>
        </form>
    )
}

export default RegForm