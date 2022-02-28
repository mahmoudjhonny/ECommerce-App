import { Link } from 'react-router-dom';
import './Featuares.css'

const Featuares = () => {
    return (
        <div className='cardsContainear'>
           <div className="cards">
               <img src="https://preview.colorlib.com/theme/cozastore/images/xbanner-01.jpg.pagespeed.ic.Uj5FE94mgU.webp" alt="Women" width='100%' height='100%' className='featuaresCard'/>
                <div className="cardsInfo">
                    <p className="cardsInfoTitle">Women</p>
                    <p className="cardsInfoDetailes">Spring 2021</p>
                </div>
                <div className="shop_btn">
                    <Link to='#'>Shop Now</Link>
                </div>
           </div>
           <div className="cards">
               <img src="https://preview.colorlib.com/theme/cozastore/images/xbanner-02.jpg.pagespeed.ic.MQuZq6F18q.webp" width='100%' height='100%' alt="Men" className='featuaresCard'/>
               <div className="cardsInfo">
                    <p className="cardsInfoTitle">Men</p>
                    <p className="cardsInfoDetailes">Spring 2021</p>
                </div> 
                <div className="shop_btn">
                    <Link to='#'>Shop Now</Link>
                </div>
           </div>
           <div className="cards card_3">
               <img src="https://preview.colorlib.com/theme/cozastore/images/xbanner-03.jpg.pagespeed.ic.1rqLomOaMb.webp" width='100%' height='100%' alt="Access" className='featuaresCard' />
               <div className="cardsInfo">
                    <p className="cardsInfoTitle">Accessories</p>
                    <p className="cardsInfoDetailes">New Trend</p>
                </div>
                <div className="shop_btn">
                    <Link to='#'>Shop Now</Link>
                </div>
            </div> 
        </div>
    );
}

export default Featuares;
