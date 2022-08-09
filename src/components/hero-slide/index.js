import {useEffect, useState,useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import Button, {OutlineButton} from '../button'
import{Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import tmdbApi,{category, movieType} from '../../api/tmbdApi'
import apiConfig from '../../api/apiConfig'
import './hero-slide.scss'
import Modal,{ModalContent}from '../modal'


const HeroSlide = () => {
    const [movieItems, setMovieItems] = useState([])

    useEffect (()=>{
            const getMovies = async()=>{
                const params ={page:1}
                try{
                    const response = await tmdbApi.getMoviesList(movieType.popular, {params})
                    setMovieItems(response.data.results.slice(1,5))
                    // const timer =setTimeout(()=>{ setCurrentSlide(currentSlide+1)},autoPlayTime)
                    // return ()=>{clearTimeout(timer)}
                }catch{
                    console.log('error')
                }

            } 
        getMovies()
    },[])


  return (
    <div className='hero-slide'>
        <Splide
            options={{
                perPage:1,
                arrows:true,
                pagination:true,
                drag:'free',
                gap:'5rem',
                autoplay:'loop'
            }}
        >
            {
                movieItems.map((item, i)=>{
                  const background=  apiConfig.originalImage(item.backdrop_path?item.backdrop_path:item.poster_path)
                    return (
                        <SplideSlide   key={i}>
                            <div className='hero-slide_item' style={{backgroundImage:`url(${background})`}}>
                                
                                <img  
                                src={apiConfig.w500Image(item.poster_path)} 
                                alt={item.title}
                                />
                                <HeroSlideItems item={item}/>     
                            </div>   
                        </SplideSlide >
                       
                    )
                })
            }
         
        </Splide>
        <div>
        {
            movieItems.map((item,i)=><TrailerModal key={i} item={item}></TrailerModal>)
        }
        </div>
       
    </div>
  )
}
const HeroSlideItems = props =>{
    let navigate = useNavigate()
    const item = props.item
    const setModalActive = async()=>{
            const modal = document.querySelector(`#modal_${item.id}`)
            const videos = await tmdbApi.getVideos(category.movie, item.id);
            if (videos.data.results.length > 0) {
                const videSrc = 'https://www.youtube.com/embed/' + videos.data.results[0].key;
                modal.querySelector('.modal_content>iframe').setAttribute('src', videSrc);
            } else {
                modal.querySelector('.iframe').innerHTML = 'No trailer';
            }
    
            modal.classList.toggle('active');
    } 
    

    return (
     
        <div className='hero-side_item_content container'>
            <div className='hero-slide_item_cotent_info'>
                <h2 className='title' >{item.title}</h2>
                <div className='overview'>{item.overview}</div>
                <div className='btns'>
                    <Button onClick={()=>navigate('/movie')+item.id}>
                        Watch Now
                    </Button>
                    <OutlineButton onClick={setModalActive}>
                        watch trailer
                    </OutlineButton> 
                </div>
            </div>
        </div>
    
    )
}

const TrailerModal = props => {
    const item = props.item;

    const iframeRef = useRef(null);

    const onClose = () => iframeRef.current.setAttribute('src', '');

    return (
        <Modal active={false} id={`modal_${item.id}`} >
            <ModalContent onClose={onClose} className='modal_content '>
                <iframe ref={iframeRef} width="100%" height="500px" title="trailer" className='iframe '></iframe>
            </ModalContent>
        </Modal>
    )
}
export default HeroSlide