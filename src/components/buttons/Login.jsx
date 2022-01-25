import React from 'react';

const Login = () => {
return (
    <>
        {/* <!-- Button trigger modal --> */}
        <button type="button" className="btn btn-outline-primary ms-auto" data-bs-toggle="modal" data-bs-target="#loginModal">
            <span className='fa fa-sign-in me-1'></span> Ingresar 
        </button>
          {/* <!-- Modal --> */}
        <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel"> Inicio de Sesion </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label"> Correo Electronico </label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    <div id="emailHelp" className="form-text"> Nunca compartas tu correo electrónico con nadie más. </div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label"> Contraseña </label>
                                <input type="password" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <hr/>
                                <label className='mb-4 d-flex justify-content-center'> Ingresa con </label>
                            <button className='btn btn-primary w-100 mb-4'>
                                <span className='fa fa-google me-2'></span>
                                Iniciar con Google
                            </button>
                            <button className='btn btn-primary w-100 mb-4'>
                                <span className='fa fa-facebook me-2'></span>
                                Iniciar con Facebook
                            </button>
                            <button type="submit" className="btn btn-outline-primary w-100 mt-5"> Ingresar </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Login;
