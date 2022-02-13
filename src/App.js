import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer/Footer';
import Navbar from './Component/NavBar/NavBar';
import Productpage from './Component/productPage/productPage';
import Shop from './Pages/Shop/Shop';
import Home from './Pages/Home/Home';

function App() {
    return ( 
        <>
            <Navbar />
            <Routes>
                <Route path = '/' element = {<Home />}/> 
                <Route path='/shop' element={<Shop />}/>
                <Route path= 'product/:id' element={<Productpage/>}/>
            </Routes>
            <Footer />
        </> 
    );
}

export default App;