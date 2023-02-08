import React from 'react'

export const FormularioLogin = ({ onLogin, onLabel }: Props) => {
    return (
        <>
            <form onSubmit={onLogin}>
                <div className="input my-2 mt-5">
                    <input onInput={onLabel} type="text" placeholder='Username' maxLength={10} name='username' autoComplete='new-password' required />
                </div>
                <div className="input my-2">
                    <input type="email" placeholder='Email' name='email' autoComplete='new-password' required />
                </div>
                <div className="row">
                    <div className="btn-confirm mt-3">
                        <button type='submit' id='myBtnConfirm'>Entrar</button>
                    </div>
                    <a className='mt-3 nav-link' style={{ cursor: 'pointer' }}>¿Olvidaste tu contraseña? Click aquí!</a>
                </div>
            </form>
        </>
    )
}

interface Props {
    onLogin: (evt: React.FormEvent<HTMLFormElement>) => void,
    onLabel: (evt: React.FormEvent<HTMLInputElement>) => void
}
