import './ProductGrid.css';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useEffect, useState } from 'react';

const Productgrid = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            // .then(json => console.log(json))
            .then(products => setProducts(products))
    },[])
    const allCategories = ['All', ...new Set(products.map(product => product.category))];

    const filterHandel = (cat) => {
        if(cat === 'All') {
            setProducts(products)
            return;
        }
        const filter = products.filter(product => product.category === cat);
        setProducts(filter)
    }
    

    return (
        <div className='productgrid'>
            <h1 className='productgridTitle'>PRODUCT OVERVIEW</h1>
            <nav className='productNav'>
                <div className="navLinks">
                    {allCategories.map((cat, i) => (
                        <div className="divButton" key={products.id}>
                            <button className='navLinksOption' onClick={() => filterHandel(cat)}>{cat}</button>
                        </div>
                    ))}
                </div>
                <div className='NavOptions'>
                    <button className='filterButton'><FilterListIcon/>  Filter</button>
                    <button className="searchButton"><SearchIcon/>  Search</button>
                </div>
            </nav>

            
            <div className="productsBody">
                {products.map(products => (
                    <div className='productbody' key={products.id}>
                        <div className="productImg">
                            <img src={products.image} className='productImg' alt={products.category}/>
                        </div>
                        <p className="productTitle">{products.title}</p>
                        <div className="productprice">
                            <p className="productpriceNember">{products.price} $</p>
                            <span className='favoriteIcon'>
                             <FavoriteBorderIcon />
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Productgrid;
