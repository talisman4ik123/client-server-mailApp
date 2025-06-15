import MainInput from "../UI/MainInput"
import PassInput from "../UI/PassInput"
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

function LogForm() {
    return (
        <form>
            <h1 className="mb-1 font-bold text-[rgb(49,49,49)] text-2xl">Login</h1>
            <p className="mb-8 text-[#313131] opacity-[0.75] text-sm">Login to access your mail account</p>
            <div className='flex flex-col gap-4'>
                <MainInput type="email">email</MainInput>
                <PassInput/>
                <Button variant="contained" sx={{textTransform: "none", marginTop: "10px"}}>Login</Button>
                <div className="flex justify-center mt-6">
                    <span>Don't have an account?</span>
                    <NavLink className={'ml-2 font-bold text-[#ff8682] underline underline-offset-4'} to={'/registration'}>Sign up</NavLink>
                </div>
            </div>
        </form>
    )
}

export default LogForm