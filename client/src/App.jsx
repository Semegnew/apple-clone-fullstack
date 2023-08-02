import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Resource/css/styles.css'
import { Routes,Route} from 'react-router-dom';
//components
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home'
import Mac from './Pages/Mac'
import Iphone from './Pages/Iphone'
import  Support from './Pages/Support';
import  Tv from './Pages/Tv';
import  Watch from './Pages/Watch';
import  Music from './Pages/Music';
import  Ipad from './Pages/Ipad';
import Cart from './Pages/Cart'
import Four04 from './Pages/Four04';
import Productpage from "./Pages/SingleProduct";


function App() {
  return (
    <>
    
    <Header />
    <Routes >
      <Route path='/' element={<Home />} />
      <Route path='/mac' element={<Mac />} />
      <Route path='/iphone' element={<Iphone/>} />
      <Route path="/iphone/:pid" element={<Productpage/>} />
      <Route path='/ipad' element={<Ipad/>} />
      <Route path='/watch' element={<Watch/>} />
      <Route path='/tv' element={<Tv/>} />
      <Route path='/music' element={<Music />} />
      <Route path='/support' element={<Support />} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/*' element={<Four04/>} />
    </Routes>
    <Footer />
    
    </>
  );
}

export default App;
