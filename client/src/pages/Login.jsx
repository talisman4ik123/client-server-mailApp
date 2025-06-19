import { useLocation } from "react-router-dom"
import LogForm from "../components/LogForm"
import Logo from "../components/Logo"
import MySlider from "../components/MySlider"
import SubWrapper from "../UI/SubWrapper"
import Wrapper from "../UI/Wrapper"
import Notify from "../UI/Notify"
import { useSelector } from "react-redux"
import Loading from "../UI/Loading"

function Login() {
    
    const location = useLocation();
    const data = location.state?.message;

    const loading = useSelector(state => state.statusData.loading);
    const error = useSelector(state => state.statusData.error);

    return (
        <Wrapper>
            {data && <Notify type={"success"}>{data.message}</Notify>}
            {loading && <Loading/>}
            {error && <Notify type={"error"}>{error}</Notify>}
            <SubWrapper>
                <Logo classes={"mb-[50px]"}/>
                <div className="flex">
                    <LogForm/>
                    <div className="max-w-[350px] ml-[50px]"><MySlider/></div>
                </div>
            </SubWrapper>
        </Wrapper>
    )
}

export default Login