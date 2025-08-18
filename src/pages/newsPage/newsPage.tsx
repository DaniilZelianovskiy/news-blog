import { useState } from "react"
import { CardComponent } from "../../components/cardComponent/cardComponent"
import { SvgArrow } from "../../svg/svgArrow"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import type { AppDispatch } from "../../redux/store/store"
import { getNews } from "../../redux/thunks/newsThunk"
import { selectNewsList } from "../../redux/slices/newsSlice"
import './newsPage.scss'
import { ButtonComponent } from "../../components/buttonComponent/buttonComponent"
import { Link } from "react-router"

export const NewsPage = () => {
    const dispatch = useDispatch<AppDispatch>()

    const [offset,setOffset] = useState<number>(0)

    const incrementClick = ()=>{
        setOffset((elem:number)=>elem + 1)
    }
    const decrementClick = () =>{
        if(offset > 0){
            setOffset((elem:number)=>elem - 1) 
        }else{

        }
    }

    useEffect(()=>{
       dispatch(getNews(offset))
    },[dispatch,offset])

    const blogList = useSelector(selectNewsList)
    
    const [isNew,setIsNew] = useState(false)
    
    const isNewChange = () => {
        setIsNew(!isNew)
    }

    const [isOutdated,setIsOutdated] = useState(false)

    const isOutdatedChange = () => {
        setIsOutdated(!isOutdated)
    }

    const [condition,setCondition] = useState({
        age:"Сначала новые",
        upDate:"Давно обновлялись"
    })


    return(
        <section className="newsBlog">
            <div className="container">
                <h1 className="newsBlog-title">News Blog</h1>
                <div className="newsBlog-menu">
                    <div className="newsBlog-menu-age">
                        <div className="newsBlog-menu-age-wrap" onClick={()=>isNewChange()}>
                            <button className="newsBlog-menu-button">{condition.age}</button>
                            <SvgArrow className={isNew ? "newsBlog-menu-rotateArrow": ""}/>
                        </div>
                        {isNew === true && (
                            <div className="newsBlog-menu-modal">
                                <ul>
                                    <li>Сначала новые</li>
                                    <li>Сначала старые</li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="newsBlog-menu-upDate">
                        <div className="newsBlog-menu-upDate-wrap" onClick={()=>isOutdatedChange()}>
                            <button className="newsBlog-menu-button">{condition.upDate}</button>
                            <SvgArrow className={isOutdated ? "newsBlog-menu-rotateArrow":""}/>
                        </div>
                        {isOutdated === true && (
                        <div className="newsBlog-menu-modal">
                            <ul>
                                <li>Недавно обновлённые</li>
                                <li>Давно обновлялись</li>
                            </ul>
                        </div>
                        )}
                    </div>
                </div>
                <div className="newsBlog-cards">
                    {blogList.map((elem)=>(
                        <Link to={`/newsBlog/${elem.id}`}>
                            <CardComponent key={elem.id} elem={elem}/>
                        </Link> 
                    ))}
                </div>
                <div className="newsBlog-button-wrap">
                    <ButtonComponent handleClick={()=>decrementClick()} className="newsBlog-button" text="Load Prev"/>
                    <ButtonComponent handleClick={()=>incrementClick()} className="newsBlog-button" text="Load Next"/>
                </div>
            </div>
        </section>
    )
}

