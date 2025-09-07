import { NavLink, Outlet } from "react-router"
import { Svgblog } from "../../svg/svgBlog"
import './headerComponent.scss'
import { SvgMagnifier } from "../../svg/svgMagnifier"
import { InputComponent } from "../InputComponent/InputComponent"
import { useSearch } from "../../hooks/useSearch"



export const HeaderComponent = () => {

    const { search, setSearch } = useSearch();
    
    return(
        <>
            <header className="header">
                <div className="header-container">
                    <div className="header-wrap">
                        <div className="header-logo">
                            <NavLink className="header-logo-link" to="">
                                <div className="header-logo-image">
                                    <Svgblog/>
                                </div>
                                <div className="header-logo-text">
                                    Meta
                                    <span>
                                        Blog
                                    </span>
                                </div>
                            </NavLink>
                        </div>
                        <div className="header-search-wrap">
                            <InputComponent 
                            placeholder={"Search"}
                            value={search}
                            onChange={setSearch}
                            />
                            <SvgMagnifier/>
                        </div>
                    </div>
                </div>
            </header>
            <Outlet/>
        </>
    )
}