import Logo from "../components/Logo"
import MySlider from "../components/MySlider"
import RegForm from "../components/RegForm"
import SubWrapper from "../UI/SubWrapper"
import Wrapper from "../UI/Wrapper"

function Registration() {
    return (
        <Wrapper>
            <SubWrapper>
                <Logo classes={"mb-10"}/>
                <div className="flex">
                    <MySlider/>
                    <RegForm/>
                </div>
            </SubWrapper>
        </Wrapper>
    )
}

export default Registration