function SubWrapper({children}) {
    return (
        <div className="bg-white rounded-[14px] px-[30px] py-[14px] flex flex-col w-fit shadow-[3px_4px_39px_0_rgba(0,0,0,0.12)]">
            {children}
        </div>
    )
}

export default SubWrapper