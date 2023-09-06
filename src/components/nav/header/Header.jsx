import './header.css'
import React, { useEffect, useState } from 'react';
import Logo from '../../../icons/logo.png'
import Clock from './relogio';

function Header() {

    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const date = new Date();
        setCurrentDate(date.toLocaleDateString());
    }, []);


    return (
        <div className="containerHeader">
            <div className="data">
                <img id='logo' src={Logo}></img>
                <h1>Área do Docente</h1>
                <p>{currentDate}</p>
                <Clock />
            </div>


        </div>


    )
}

export default Header;
