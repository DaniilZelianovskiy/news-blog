export const InputComponent = ({ placeholder, value, onChange }: any) => {
    
    return(
        <input className="header-search" placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)}/>
    )
}