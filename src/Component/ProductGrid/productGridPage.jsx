import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import { NavLink } from 'react-router-dom';

const productGridPage = ({active, products, allCategories, setActive}) => {
    return (
        <>
            <nav className='productNav'>
                <div className="navLinks">
                    {allCategories.map((link, i) => (
                        <div className="divButton" key={i}>
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
                {active === 'All' ? products.products.map(products => (
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
                )): products.products.map(products => (
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
            </div>
        </>
    );
}

export default productGridPage;
