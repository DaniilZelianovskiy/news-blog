type Tbutton = {
    text:string,
    className:string,
    handleClick: () => void,
    disabled?:boolean
}

export const ButtonComponent = ({text,className,handleClick,disabled}:Tbutton) => {
    return(
        <button disabled={disabled} className={className} onClick={handleClick}  type="button">{text}</button>
    )
}