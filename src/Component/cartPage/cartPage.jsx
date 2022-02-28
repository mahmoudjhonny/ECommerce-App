import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import { adjustQty, removeFromCart } from '../../Redux/Actions/cartActions';

const Cartpage = ({item, products, dispatch}) => {

    const [input, setInput] = useState(item.qty)
    const handleChange = (e) => {
        setInput(e.target.value);
        dispatch(adjustQty(item.id, e.target.value))
    }

    return (
        <>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                    <div className="hoverParent" onClick={(id) => dispatch(removeFromCart(item.id))}>
                        <div className="imageContainear">
                            <img src={products[item.id - 1].image} alt={products[item.id - 1].title} className="tableImage" width='100%' />
                        </div>
                    </div>
                </TableCell>
                <TableCell align="left">{products[item.id - 1].title}</TableCell>
                <TableCell align="left">{products[item.id - 1].price}</TableCell>
                <TableCell align="right">
                    <div className="inputQuantity">
                        <input type="number" className="numberInput" value={input} onChange={handleChange}/>
                    </div>
                </TableCell>
                <TableCell align="left">{item.qty * products[item.id - 1].price}</TableCell>
            </TableRow>   
        </>
    );
}

export default Cartpage;
