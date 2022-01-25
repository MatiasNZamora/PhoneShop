import React from 'react';

const SignUp = () => {
  return (
    <div>
        {/* <!-- Button trigger modal --> */}
        <button type="button" className="btn btn-outline-primary ms-2" data-bs-toggle="modal" data-bs-target="#signupModal">
        <span className='fa fa-user-plus me-1'></span> Registrase 
        </button>
          {/* <!-- Modal --> */}
        <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel"> Registrase </h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="mb-3">
                          <label for="exampleInput" className="form-label"> Usuario </label>
                          <input type="text" className="form-control" id="exampleInput" />
                        </div>
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
                          <label className='mb-4 d-flex justify-content-center'> Registrate con </label>
                        <button className='btn btn-primary w-100 mb-4'>
                          <span className='fa fa-google me-2'></span>
                          Iniciar con Google
                        </button>
                        <button className='btn btn-primary w-100 mb-4'>
                          <span className='fa fa-facebook me-2'></span>
                          Iniciar con Facebook
                        </button>
                        <div class="mb-3 form-check">
                          <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                          <label class="form-check-label" for="exampleCheck1">Acepto los terminos y condiciones</label>
                          </div>
                        <button type="submit" className="btn btn-outline-primary w-100 mt-4"> Registrase </button>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp;