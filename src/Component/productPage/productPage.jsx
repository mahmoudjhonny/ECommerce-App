import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import './productPage.css';
import {addToCart} from '../../Redux/Actions/cartActions'
import { useDispatch } from 'react-redux';

const Productpage = () => {
    const {id} = useParams();
    const [product, setproduct] = useState([]);
    const dispatch =  useDispatch();
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(product => setproduct(product))
    },[]);

    return (
        <div className='productContainear'>
            <div className="productImgContainear">
                <img src={product.image} alt={product.title} width='400px' height='400px'/>
            </div>
            <div className="productDetailedContainear">
                <h4 className="productCategory">
                    {product.category}
                </h4>
                <h1 className="DetailedproductTitle">
                    {product.title}
                </h1>
                <p className="lead">
                    Rating {product.rating && product.rating.rate}
                    <StarIcon />
                </p>
                <p className="productPrice">
                    {product.price} $
                </p>
                <h5 className="productDatailed">
                    {product.description}
                </h5>

                <div className="buttonsClass">
                    <button className="addtocart button" onClick={() => dispatch(addToCart(product.id))}>Add To Cart</button>
                    <button className="gotocart button">Go To Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Productpage;
