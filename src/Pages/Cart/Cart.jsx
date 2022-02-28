import './Cart.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Cartpage from '../../Component/cartPage/cartPage';


const Cart = () => {

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, settotalItems] = useState(0);
    const {cart} = useSelector(state => state.cart)
    const {products} = useSelector(state => state.product)
    const dispatch = useDispatch()

    useEffect(() => {
           let items = 0;
           let price = 0;
           
           cart.forEach(item => {
               items += item.qty;
               price += products[item.id - 1].price * item.qty
           });

           setTotalPrice(price);
           settotalItems(items);
    },[products, cart, totalPrice, totalItems, setTotalPrice, settotalItems])

    return (
        <div className="cartContainear">
            <div className="tableContainer">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Product</TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="left">Price</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell align="left">Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cart.map((item) => (
                                <Cartpage key={item.id} item={item} products={products} dispatch={dispatch}/>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className="processConatinear">
                <div className="processElement">
                    <h4 className="processHeader">
                        Cart Totals
                    </h4>
                    <div className="totalContainear">
                        <h3 className="text">SubTotal</h3>
                        <h4 className="desc_total">$ {totalPrice}</h4>
                    </div>
                    <div className="borderDiv"></div>
                    <div className="shippingContainear">
                        <h3 className="text">Shipping</h3>
                        <div className="desc">
                            <h4 className='descText'>There are no shipping methods available. Please double check your address, or contact us if you need any help.</h4>
                            <h4 className="calculateshipping descText">CALCULATE SHIPPING</h4>
                            <form className="selectShip">
                                <select name="selectCountry" id="selectCountry">
                                    <option value="Choose Country">Choose Country...</option>
                                    <option value="Egypt">Egypt</option>
                                    <option value="USA">USA</option>
                                    <option value="Germany">Germany</option>
                                </select>
                                <input type="text" className="inputField" placeholder='Country / State'/>
                                <input type="text" className="inputField" placeholder='PostCode / Zip'/>
                            </form>
                            <button className="update_btn">Update Total</button>
                        </div>
                    </div>
                    <div className="borderDiv"></div>
                    <div className="totalContainear">
                        <h3 className="text">SubTotal</h3>
                        <h4 className="desc_total">$ {totalPrice}</h4>
                    </div>
                    <button className="process_btn">Proceed to Checkout</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
