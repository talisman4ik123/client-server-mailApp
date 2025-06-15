import LogForm from "../components/LogForm"
import Logo from "../components/Logo"
import MySlider from "../components/MySlider"
import SubWrapper from "../UI/SubWrapper"
import Wrapper from "../UI/Wrapper"

function Login() {
    return (
        <Wrapper>
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