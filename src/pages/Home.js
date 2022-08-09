import {Link} from 'react-router-dom'
import { OutlineButton } from '../components/button'
import HeroSlide from '../components/hero-slide'
import MovieList from '../components/movie-list'
import { category,movieType, tvType } from '../api/tmbdApi'
const Home = () => {
  return (
    <div className='wrapper'>
        <HeroSlide/>
        <div className='container'>
          <div className='section mb-3'>
            <div className='section_header mb-2'>
              <h2>Trending Movies</h2>
              <Link to='/movie'>
                <OutlineButton className='small'>View more </OutlineButton>
              </Link>
            </div>
            <MovieList category={category.movie} type={movieType.popular}/>
          </div>

          <div className='section mb-3'>
            <div className='section_header mb-2'>
              <h2>Top rated Movies</h2>
              <Link to='/movie'>
                <OutlineButton className='small'>View more </OutlineButton>
              </Link>
            </div>
            <MovieList category={category.movie} type={movieType.top_rated}/>
          </div>
          
          <div className='section mb-3'>
            <div className='section_header mb-2'>
              <h2>Trending TV</h2>
              <Link to='/tv'>
                <OutlineButton className='small'>View more </OutlineButton>
              </Link>
            </div>
            <MovieList category={category.tv} type={tvType.popular}/>
          </div>

          <div className='section mb-3'>
            <div className='section_header mb-2'>
              <h2>Top Rated TV</h2>
              <Link to='/tv'>
                <OutlineButton className='small'>View more </OutlineButton>
              </Link>
            </div>
            <MovieList category={category.tv} type={tvType.top_rated}/>
          </div>

        </div>
    </div>
  )
}

export default Home