import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router"
import { selectNewsInfo } from "../../redux/slices/newsSlice";
import { useEffect } from "react";
import { getNewsInfo } from "../../redux/thunks/newsThunk";
import type { AppDispatch } from "../../redux/store/store";
import { FormatDate } from "../../hooks/formatDate";
import './newsInfo.scss'


export const NewsInfo = () => {
    const { id } = useParams<{id:string}>();
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const newsInfo = useSelector(selectNewsInfo)

    useEffect(()=>{
        if(id){
            dispatch(getNewsInfo(id))
        }else{
            navigate('/')
        }
    },[id,dispatch])
    return(
        <section className="newsInfo">
            <div className="container">
                <div className="newsInfo-wrap">
                    <h2 className="newsInfo-title">{newsInfo?.title}</h2>
                    <div className="newsInfo-intelligence">
                        <p>{newsInfo?.authors[0].name}</p>
                        <p><FormatDate isoDate={newsInfo?.published_at}/></p>
                    </div>
                    <div className="newsInfo-img-wrap">
                        <img className="newsInfo-img" src={newsInfo?.image_url}/>
                    </div>
                    <div className="newsInfo-text-wrap">
                        <p className="newsInfo-text">{newsInfo?.summary}</p>
                    </div>
                    <div>
                        <Link className="newsInfo-link" to="/">Go to site</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}