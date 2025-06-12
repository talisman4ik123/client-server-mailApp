function Wrapper({children}) {
    return (
        <div className="flex items-center justify-center h-lvh w-lvw">
            {children}
        </div>
    )
}

export default Wrapper