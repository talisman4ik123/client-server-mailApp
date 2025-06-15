function Logo({classes}) {
    return (
        <div className={`flex items-center ${classes}`}>
            <img className="max-w-16" src="/logo.avif"/>
            <span className="ml-[-8px] font-semibold underline underline-offset-4">Mail App</span>
        </div>
    )
}

export default Logo