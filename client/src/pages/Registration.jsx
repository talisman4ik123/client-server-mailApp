import Logo from "../components/Logo"
import RegForm from "../components/RegForm"
import Slider from "../components/slider"
import SubWrapper from "../UI/SubWrapper"
import Wrapper from "../UI/Wrapper"

function Registration() {
    return (
        <Wrapper>
            <SubWrapper>
                <Logo/>
                <div>
                    <Slider/>
                    <RegForm/>
                </div>
            </SubWrapper>
        </Wrapper>
    )
}

export default Registration