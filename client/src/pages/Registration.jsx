function Registration() {
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="reg-name">Name</label>
                    <input className="border" id="reg-name" type="text" />
                </div>
                <div>
                    <label htmlFor="reg-email">Email</label>
                    <input className="border" id="reg-email" type="text" />
                </div>
                <div>
                    <label htmlFor="reg-pass">Password</label>
                    <input className="border" id="reg-pass" type="text" />
                </div>
                <button className="cursor-pointer">Submit</button>
            </form>
        </div>
    )
}

export default Registration