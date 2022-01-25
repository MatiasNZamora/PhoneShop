import React from 'react';
import  DATA  from '../Data'

const Product = () => {
    
    const cardItem = (item) => {
        return (
            <div class="card" style={{width: "18rem"}}>
                <img src={ item.image } class="card-img-top" alt={item.title}/>
                    <div class="card-body">
                        <h5 class="card-title"> {item.title} </h5>
                        {/* <p class="card-text"> {item.decription} </p> */}
                        <p className='lead'> $ {item.price} </p>
                        <a href="#" class="btn btn-primary"> Add to card </a>
                    </div>
            </div>
        );
    }

    return (
        <div>
            <div className="container py-5  ">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1> Productos </h1>
                        <hr/>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {DATA.map(cardItem)}
                </div>
            </div>
        </div>
    )

}

export default Product;