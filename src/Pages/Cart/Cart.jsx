import './Cart.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from 'react-redux';

const Cart = () => {

    const cart = useSelector(state => state.cart.cart)
    const products = useSelector(state => state.product.products)

    return (
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
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">
                            <div className="imageContainear">
                                <img src={products[item.id].image} alt={item.title} className="tableImage" width='100%' />
                            </div>
                        </TableCell>
                        <TableCell align="left">{item.title}</TableCell>
                        <TableCell align="left">{item.price}</TableCell>
                        <TableCell align="right">
                        <div className="inputQuantity">
                                        <div className="minusSign">
                                            <RemoveIcon />
                                        </div>
                                        <input type="number" className="numberInput" min={0} value={item.qty}/>
                                        <div className="plusSign">
                                            <AddIcon />
                                        </div>
                                    </div>
                        </TableCell>
                        <TableCell align="left">{item.price}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Cart;
