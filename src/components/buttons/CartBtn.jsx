import React from 'react';
import { NavLink } from 'react-router-dom';

const CartBtn = () => {
  return (
    <>
      <NavLink to='/Cart' className='btn btn-outline-primary ms-2'>
        <span className='fa fa-shopping-cart me-1'></span> Carrito (0)
      </NavLink>
    </>
  );
}

export default CartBtn;
