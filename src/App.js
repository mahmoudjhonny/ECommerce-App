import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import Footer from './Component/Footer/Footer';
import Navbar from './Component/NavBar/NavBar';
import store from './Redux/store'
import Productpage from './Component/productPage/productPage';
import Home from './Pages/Home'

function App() {
    return ( 
        <Provider store={store}>
        <Navbar />
        <Routes>
            <Route path = '/' element = {<Home />}/> 
            <Route path= 'product/:id' element={<Productpage/>}/>
        </Routes>
        <Footer /> 
        </Provider>
    );
}

export default App;