import React from 'react';
import { NavLink } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>¿ Tienes alguna pregunta ?</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md 5 d-flex justify-content-center">
                        <img src='assets/img/contact.png' alt='contactanos' height="400px" width="400px" />
                    </div>
                    <div className="col-md-6">
                        <form action="">
                            <div className="mb-3">
                                <p className='lead mb-4'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime tempore inventore eligendi praesentium, temporibus harum repudiandae,
                                error esse ex, amet excepturi odio. Libero ipsa omnis dolorum ut ipsam, suscipit nihil. Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Optio corporis eveniet perferendis impedit dicta enim eum voluptatem deserunt sapiente repudiandae qui saepe vel rerum sit vitae, ab debitis corrupti voluptas.
                                </p>
                                <label for="exampleForm" className="form-label"> Nombre completo </label>
                                <input type="text" className="form-control" id="exampleForm" placeholder="Jhon Smit"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label"> Tu Email </label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Jhon@gmail.com"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label"> Mensaje </label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </form>
                        <NavLink to={"/"} className={'btn btn-outline-primary px-5'}> Enviar Mensaje </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;