import {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { Splide,SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide'
import './movie-list.scss'
import tmdbApi, {category} from '../../api/tmbdApi'
import MovieCard from '../movie-card'

const MovieList = props => {
    const [items, setItems] = useState([])
    useEffect(()=>{
        const getList = async ()=>{
            let response = null;
            const params ={}
            if (props.type!== 'similar'){
                switch(props.category){
                    case category.movie:
                        response = await tmdbApi.getMoviesList(props.type, {params})
                        break;
                        default:
                            response = await tmdbApi.getTvList(props.type,{params})
                }
            }else{
                response=await tmdbApi.similar(props.category, props.id)
            }
            setItems(response.data.results)
        }
        getList()
    },[props.id,props.category,props.type])
  return (
    <div className='movie-list'>
        <Splide
         options={{
            perPage:8,
            arrows:false,
            pagination:false,
            drag:'free',
            gap:'2rem'
        }}>
            {
                items.map((item,i)=>(
                    <SplideSlide key={i}>
                        <MovieCard item={item} category={props.category}/>
                    </SplideSlide>
                ))
            }
        </Splide>
      
    </div>
  )
}

MovieList.propTypes = {
    category:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired

}

export default MovieList
