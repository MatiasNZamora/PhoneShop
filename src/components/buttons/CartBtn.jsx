import React from 'react';
import { NavLink } from 'react-router-dom';

const CartBtn = () => {
  return (
    <>
      <NavLink className='btn btn-outline-primary'>
        <span className='fa fa-shopping-cart'></span> Carrito()
      </NavLink>
    </>
  );
}

export default CartBtn;
