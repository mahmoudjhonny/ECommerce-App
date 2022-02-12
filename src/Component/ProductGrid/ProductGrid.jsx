import './ProductGrid.css';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../Redux/Actions/productActions';
import { NavLink } from 'react-router-dom';

const Productgrid = ({fetchProducts, products}) => {
    const [active, setActive] = useState('All');
    useEffect(() => {
        // fetch('https://fakestoreapi.com/products')
        //     .then(res=>res.json())
        //     .then(products => setProducts(products))
        fetchProducts()
    },[])

    // const allCategories = ['All', ...new Set(products.map(product => product.category))];

    return (
        <div className='productgrid'>
            {/* <h1 className='productgridTitle'>PRODUCT OVERVIEW</h1>
            <nav className='productNav'>
                <div className="navLinks">
                    {allCategories.map((link) => (
                        <div className="divButton" key={products.id}>
                            <button className={`navLinksOption ${link === active ? 'activeNavProduct' : null}`} onClick={() => setActive(link)}>{link}</button>
                        </div>
                    ))}
                </div>
                <div className='NavOptions'>
                    <button className='filterButton'><FilterListIcon/>  Filter</button>
                    <button className="searchButton"><SearchIcon/>  Search</button>
                </div>
            </nav>

            
            <div className="productsBody">
                {active === 'All' ? products.map(products => (
                    <div className='productbody' key={products.id}>
                            <img src={products.image} className='productImg' alt={products.category}/>
                            <NavLink to={`product/${products.id}`} className='quickView'>Quick View</NavLink>
                            <p className="productTitle">{products.title}</p>
                            <div className="productprice">
                                <p className="productpriceNember">{products.price} $</p>
                                <span className='favoriteIcon'>
                                <FavoriteBorderIcon />
                                </span>
                            </div>
                    </div>
                )): products.map(products => (
                    (products.category === active) && (
                        <div className='productbody' key={products.id}>
                            <img src={products.image} className='productImg' alt={products.category}/>
                            <NavLink to={`product/${products.id}`} className='quickView'>Quick View</NavLink>
                            <p className="productTitle">{products.title}</p>
                            <div className="productprice">
                                <p className="productpriceNember">{products.price} $</p>
                                <span className='favoriteIcon'>
                                <FavoriteBorderIcon />
                                </span>
                        </div>
                    </div>)
                    ))}
            </div> */}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        products: state.product
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Productgrid);
