type Tbutton = {
    text:string,
    className:string
    handleClick: () => void
}

export const ButtonComponent = ({text,className,handleClick}:Tbutton) => {
    return(
        <button className={className} onClick={handleClick} type="button">{text}</button>
    )
}