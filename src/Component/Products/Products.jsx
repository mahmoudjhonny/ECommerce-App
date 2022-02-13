import './Products.css';
import { useEffect, useState } from 'react';
import ProductGridPage from '../ProductGrid/productGridPage'
import { connect } from 'react-redux';
import { fetchProducts } from '../../Redux/Actions/productActions';
import Skeletonelements from '../../Skeletons/skeletonElements';

const Productgrid = ({fetchProducts, products}) => {
    const [active, setActive] = useState('All');
    useEffect(() => {
        fetchProducts()
    },[])


    const allCategories = ['All', ...new Set(products.products.map(product => product.category))];
    
    return (
        <div className='productgrid'>
            <h1 className='productgridTitle'>PRODUCT OVERVIEW</h1>
            {products.loading ? <Skeletonelements/> : products.error ? (
            <h1>{products.error}</h1>
        ): (
        <>
            <ProductGridPage active={active} products={products} allCategories={allCategories} setActive={setActive}/>
        </>
        )}
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
