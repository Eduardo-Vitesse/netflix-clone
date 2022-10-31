import React from 'react'

import './style.css'

import logo from '../../assets/logo.png'
import user from '../../assets/profile-user.png'

function Header({ black }) {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <img src={logo} alt="Logo netFlix" />
            </div>
            <div className="header--user">
                <img src={user} alt="Imagem do usuário" />
            </div>
        </header>
    )
}

export default Header
