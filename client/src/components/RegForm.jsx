import MainInput from "../UI/MainInput"
import PassInput from "../UI/PassInput"

function RegForm() {
    return (
        <form>
            <h1 className="mb-4">Sign up</h1>
            <div className='flex flex-col gap-4'>
                <MainInput type="text">name</MainInput>
                <MainInput type="email">email</MainInput>
                <PassInput/>
            </div>
        </form>
    )
}

export default RegForm