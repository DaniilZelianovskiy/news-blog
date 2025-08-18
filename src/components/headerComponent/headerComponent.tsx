import { NavLink, Outlet } from "react-router"
import { Svgblog } from "../../svg/svgBlog"
import './headerComponent.scss'
import { SvgMagnifier } from "../../svg/svgMagnifier"



export const HeaderComponent = () => {
    return(
        <>
            <header className="header">
                <div className="container">
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
                            <input className="header-search" placeholder="Search"/>
                            <SvgMagnifier/>
                        </div>
                    </div>
                </div>
            </header>
            <Outlet/>
        </>
    )
}