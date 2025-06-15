import Logo from "../components/Logo"
import MySlider from "../components/MySlider"
import RegForm from "../components/RegForm"
import SubWrapper from "../UI/SubWrapper"
import Wrapper from "../UI/Wrapper"

function Registration() {
    return (
        <Wrapper>
            <SubWrapper>
                <Logo classes={"mb-10 ml-auto"}/>
                <div className="flex">
                    <div className="max-w-[350px] mr-[50px]"><MySlider/></div>
                    <RegForm/>
                </div>
            </SubWrapper>
        </Wrapper>
    )
}

export default Registration