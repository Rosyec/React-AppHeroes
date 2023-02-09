import React, { SyntheticEvent, useContext, useState } from 'react'
import './LoginPage.css'
import { Navigate, useNavigate } from 'react-router-dom'
import Avatar from '../../assets/avatar.jpg'
import { FormularioLogin } from '../../heroes/components/formulario-login/FormularioLogin'
import { AuthContext } from '../context/AuthContext'

export const LoginPage = () => {

  const navigate = useNavigate();
  const [Label, setLabel] = useState('Usuario');
  const Context = useContext(AuthContext);

  const cambiarLabel = (newLabel: React.FormEvent<HTMLInputElement>) => {
    const { value } = (newLabel.target as HTMLInputElement);
    setLabel((newLabel.target as HTMLInputElement).value);
    if (value.length === 0) setLabel('Usuario');
  }

  const onLogin = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const username = evt.currentTarget.elements.namedItem('username') as HTMLInputElement;
    const email = evt.currentTarget.elements.namedItem('email') as HTMLInputElement;
    Context.onLogin(username.value);
    navigate('/app/dc', { replace: true })
  }

return (
  <>
  {
    ( Context.state.logged ) && <Navigate to={'/app/dc'} replace={true} />
  }
    <div className="container text-center animate__animated animate__fadeIn">
      <div className="login d-flex align-items-center justify-content-center">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col img-avatar__ia">
                <img id='myImage' src={Avatar}></img>
              </div>
            </div>
            <div className="row title">
              <span className='display-5'>{Label}</span>
            </div>
            <FormularioLogin onLogin={onLogin} onLabel={cambiarLabel} />
          </div>
        </div>
      </div>
    </div>
  </>
)
}
