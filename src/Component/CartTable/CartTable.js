import React from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const CartTable = ({ item ,handelete}) => {
    const {id, img, name, price, quantity } = item;
    const subTotal=price*quantity
    
    return (
                   
        <tr className=''>
            <td><img className='w-10' src={img} alt="" /></td>
            <td>{name.slice(1,10)}</td>
            <td>$ {price}</td>
            <td>{quantity}</td>
            <td>$ {subTotal}</td>
            <td><FontAwesomeIcon className='text-orange-400' icon={faTrash} onClick={()=>handelete(id)}></FontAwesomeIcon></td>
        </tr>

 

    );
};

export default CartTable;