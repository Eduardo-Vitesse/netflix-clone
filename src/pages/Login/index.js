import React, { useState, useCallback, useRef } from 'react'
import { Link, Redirect } from 'react-router-dom'

import './style.css'

import logoLogin from '../../assets/logo-01.png'
import faceIcon from '../../assets/faceIcon.png'

function Login() {

    const emailRef = useRef(null)
    const passRef = useRef(null)
    const [ toHome, setToHome ] = useState(null)

    const redrectToHome = useCallback((e)=> {
        e.preventDefault()

        const valueMail = emailRef.current.value
        const valuePass = passRef.current.value
        
        if(valueMail === 'luiz@gmail.com' & valuePass === '123456'){
            setToHome(true)
        } else {
            setToHome(false)
            const showAlert = () => {
                alert("Email ou Senha incorretos...")
                emailRef.current.value = ''
                passRef.current.value = ''
            }
            showAlert()
        }
        
    }, [])

    return (
        <div className="body">
            {toHome ? <Redirect to="/home"/> : null}
            <header className="menu">
                <img className="logo" src={logoLogin} alt="Netflix"/>
            </header>
            <form onSubmit={redrectToHome}>
                <div className="content-fotm">
                    <h2>Sign In</h2>
                    <input type="email" ref={emailRef} placeholder="E-mail ou número de telefone" />
                    <input type="password" ref={passRef} placeholder="Senha" />
                    <button type="submit">Entrar</button>
                </div>
                <div className="content-checkbox">
                    <div>
                        <input type="checkbox" id="checkbox"/>
                        <span id="span01">Remember-me</span>
                    </div>
                    <span id="span2">Need help?</span>
                </div>
                <div className="form-footer">
                    <div className="box01">
                        <img src={faceIcon} alt="Icone do Facebook" /><span>Login with Facebook</span>
                    </div>
                    <div className="box02">
                        <span>New to Netflix? </span><Link href="#">Sign up now.</Link>
                    </div>
                    <span>This page is protected by Google reCAPTCHA to ensure you're not a bot</span>
                </div>
            </form>
            <div className="footerLogin">
                <section>
                    <div className="text01">
                        <p>Questions? Call 0800-761-4632</p>
                    </div>
                    <div className="text02">
                        <span>Gift Card Terms</span>
                        <span>Terms of Use</span>
                        <span>Privacy Statement</span>
                    </div>
                    <button>English</button>
                </section>
            </div>
        </div>
    )
}

export default Login
