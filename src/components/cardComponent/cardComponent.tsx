import { Link } from 'react-router'
import { FormatDate } from '../../hooks/formatDate'
import './cardComponent.scss'


type Telem = {
    id:number,
    image_url:string,
    title:string,
    published_at:string,
    authors: { name: string }[],
}

type CardProps = {
    elem:Telem
}

export const CardComponent = ({elem}:CardProps) => {
    return(
        <div className='card'>
            <Link to={`/newsBlog/${elem.id}`} key={elem.id}>
                <div className='card-img-wrap'>
                    <img className='card-img' src={elem.image_url}/>
                </div>
                <h3 className='card-title'>{elem.title}</h3>
                <div className='card-wrap-text'>
                    <p>{elem.authors[0]?.name}</p>
                    <p><FormatDate isoDate={elem.published_at}/></p>
                </div>
            </Link>
        </div>
    )
}