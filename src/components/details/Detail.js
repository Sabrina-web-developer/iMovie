import {useState,useEffect} from 'react'
import { useParams} from 'react-router-dom'
import apiConfig from '../../api/apiConfig'
import tmdbApi from '../../api/tmbdApi'
import './detail.scss'

const Detail = () => {
  const {category, id} = useParams()
  const [item, setItem] = useState(null)
  
  useEffect(()=>{
    const getDtail = async()=>{
      const response = await tmdbApi.detail(category, id, {params:{}})
      setItem(response.data)
      window.scrollTo(0,0)
    }
    getDtail()
  },[category, id])

  return (
    <>
      {
        item && (
          <>
            <div className="banner" 
            style={{backgroundImage:`url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})`}}>
            </div>
            <div className='mb-3 movie-content container'>
              <div className='movie-content_poster'>
                   <div className='movie-content_poster_img'style={{backgroundImage:`url(${apiConfig.originalImage(item.poster_path || item.backdrop_path)})`}}></div>
              </div>
              <div className='movie-content_info'> 
                <h1 className="title">
                    {item.title || item.name}
                </h1>
                <div className="genres">
                    {
                        item.genres && item.genres.slice(0, 5).map((genre, i) => (
                            <span key={i} className="genres__item">{genre.name}</span>
                        ))
                    }
                </div>
                <p className="overview">{item.overview}</p>
                  <div className='cast'>
                    <div className='section_header'>
                      <h2>Casts</h2>
                    </div>
                    {/* cast lists */}
                  </div>
              </div>
            </div>
          </>
        )
      }
    </>
  )
}

export default Detail