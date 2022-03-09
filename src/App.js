import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer/Footer';
import Navbar from './Component/NavBar/NavBar';
import Productpage from './Component/productPage/productPage';
import Shop from './Pages/Shop/Shop';
import { Home } from "./Pages";
import Cart from './Pages/Cart/Cart'
import Blog from './Pages/Blog/Blog';
import Blogdetailed from './Component/BlogDetailed/blogDetailed';
import About from './Pages/About/About';

// import FavoriteList from './Component/favoriteList/favoriteList';
//pathes-allias 
//lazy loading in react 
//suspence in react 
function App() {
    return ( 
        <>
            <Navbar />
            <Routes>
                <Route path = '/' element = {<Home />}/> 
                <Route path='/shop' element={<Shop />}/>
                <Route path='/cart' element={<Cart />}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/detailed' element={<Blogdetailed/>}/>
                <Route path= '/:id' element={<Productpage/>}/>
                {/* <Route path='/favoriteList' element={<FavoriteList/>} /> */}
            </Routes>
            <Footer />
        </> 
    );
}

export default App;