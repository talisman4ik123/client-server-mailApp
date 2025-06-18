import { useSelector } from "react-redux"
import Logo from "../components/Logo"
import MySlider from "../components/MySlider"
import RegForm from "../components/RegForm"
import SubWrapper from "../UI/SubWrapper"
import Wrapper from "../UI/Wrapper"
import Loading from "../UI/Loading"
import Notify from "../UI/Notify"

function Registration() {

    const loading = useSelector(state => state.statusData.loading);
    const error = useSelector(state => state.statusData.error);

    return (
        <Wrapper>
            {loading && <Loading/>}
            {error && <Notify>{error}</Notify>}
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