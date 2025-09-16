import { useState } from "react"
import { CardComponent } from "../../components/cardComponent/cardComponent"
import { SvgArrow } from "../../svg/svgArrow"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import type { AppDispatch } from "../../redux/store/store"
import { getNews } from "../../redux/thunks/newsThunk"
import { selectNewsList, selectNext, selectPrevious } from "../../redux/slices/newsSlice"
import './newsPage.scss'
import { ButtonComponent } from "../../components/buttonComponent/buttonComponent"
import { useSearch } from "../../hooks/useSearch"
import { SvgCheckMark } from "../../svg/svgCheckMark"

export const NewsPage = () => {
    const dispatch = useDispatch<AppDispatch>()

    const { search } = useSearch();

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
        upDate:"Недавно обновлённые"
    })

    const next = useSelector(selectNext);
    const previous = useSelector(selectPrevious);


    const [ordering, setOrdering] = useState<string>("-published_at");
  
      useEffect(() => {
        dispatch(getNews({ ordering, search: search || "" }));
      }, [dispatch, ordering, search]);

      useEffect(() => {
        if (blogList && blogList.length > 0) {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }, [blogList])

    return(
        <section className="newsBlog">
            <div className="newsBlog-container">
                <h1 className="newsBlog-title">News Blog</h1>
                <div className="newsBlog-menu">
                    <div className="newsBlog-menu-age">
                        <div className="newsBlog-menu-age-wrap" onClick={()=>isNewChange()}>
                            <button className="newsBlog-menu-button">{condition.age}</button>
                            <SvgArrow className={isNew ? "newsBlog-menu-rotateArrow": "newsBlog-menu-Arrow"}/>
                        </div>
                        {isNew === true && (
                            <div className="newsBlog-menu-modal">
                                <ul>
                                    <li
                                    onClick={() => {
                                        setOrdering("-published_at");
                                        setCondition({ ...condition, age: "Сначала новые" });
                                        setIsNew(false);
                                    }}
                                    >
                                        Сначала новые   {ordering === "-published_at" && <SvgCheckMark/>} 
                                    </li>
                                    <li
                                    onClick={() => {
                                        setOrdering("published_at");
                                        setCondition({ ...condition, age: "Сначала старые" });
                                        setIsNew(false);
                                    }}
                                    >
                                        Сначала старые  {ordering === "published_at" && <SvgCheckMark/>} 
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="newsBlog-menu-upDate">
                        <div className="newsBlog-menu-upDate-wrap" onClick={()=>isOutdatedChange()}>
                            <button className="newsBlog-menu-button">{condition.upDate}</button>
                            <SvgArrow className={isOutdated ? "newsBlog-menu-rotateArrow":"newsBlog-menu-Arrow"}/>
                        </div>
                        {isOutdated === true && (
                        <div className="newsBlog-menu-modal">
                            <ul>
                                <li
                                onClick={() => {
                                    setOrdering("-updated_at");
                                    setCondition({...condition,upDate: "Недавно обновлённые",});
                                    setIsOutdated(false);
                                  }}
                                >
                                    Недавно обновлённые  {ordering === "-updated_at" && <SvgCheckMark/>} 
                                </li>
                                <li
                                onClick={() => {
                                    setOrdering("updated_at");
                                    setCondition({...condition,upDate: "Давно обновлялись",});
                                    setIsOutdated(false);
                                }}
                                >
                                    Давно обновлялись   {ordering === "updated_at" && <SvgCheckMark/>} 
                                </li>
                            </ul>
                        </div>
                        )}
                    </div>
                </div>
                <div className="newsBlog-cards">
                    {blogList?.map((elem)=>(
                        <CardComponent key={elem.id} elem={elem}/>
                    ))}
                </div>
                <div className="newsBlog-button-wrap">
                <ButtonComponent
                    disabled={!previous}
                    handleClick={() => previous && dispatch(getNews({ url: previous }))}
                    className="newsBlog-button"
                    text="Load Prev"
                />
                <ButtonComponent
                    disabled={!next}
                    handleClick={() => next && dispatch(getNews({ url: next }))}
                    className="newsBlog-button"
                    text="Load Next"
                />
                </div>
            </div>
        </section>
    )
}

