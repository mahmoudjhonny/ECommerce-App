// import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/NavBar/NavBar';
import Home from './Pages/Home'

function App() {

  // const [products, setProducts] = useState([])
  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products')
  //           .then(res=>res.json())
  //           .then(product=>console.log(product))
  // })

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
