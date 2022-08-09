import { BrowserRouter} from 'react-router-dom';
import Header from './components/header'
import Footer from './components/footer'
import MovieRoute from './configRoute/configRoute'
import './App.scss';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <MovieRoute/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App