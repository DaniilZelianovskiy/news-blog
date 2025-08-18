import { FormatDate } from '../../hooks/formatDate'
import './cardComponent.scss'

export const CardComponent = ({elem}:any) => {
    return(
        <div className='card' key={elem.id}>
            <div className='card-img-wrap'>
                <img className='card-img' src={elem.image_url}/>
            </div>
            <h3 className='card-title'>{elem.title}</h3>
            <div className='card-wrap-text'>
                <p>{elem.authors[0].name}</p>
                <p><FormatDate isoDate={elem.published_at}/></p>
            </div>
        </div>
    )
}