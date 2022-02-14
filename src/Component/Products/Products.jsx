import './Products.css';
import ProductGridPage from '../ProductGrid/productGridPage'
import Skeletonelements from '../../Skeletons/skeletonElements';
import { useSelector } from 'react-redux';

const Productgrid = () => {
    const products = useSelector(state => state.product)
    return (
        <div className='productgrid'>
            <h1 className='productgridTitle'>PRODUCT OVERVIEW</h1>
            {products.loading ? <Skeletonelements/> : products.error ? (
            <h1>{products.error}</h1>
        ): (
        <>
            <ProductGridPage/>
        </>
        )}
        </div>
        );
}

export default Productgrid;