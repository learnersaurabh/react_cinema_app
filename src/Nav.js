import './Nav.css';
import React, {useEffect, useState} from 'react';
import logo from './cinema_otg_logo.png';
import avtarLogo from './avtar__logo.png';

function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true);
            }else handleShow(false);
        });
        return ()=>{
            window.removeEventListener("scroll");
        };
    },[]);
    return (
        <div className={`nav ${show && "nav__background"}`}>
            <img
                className="app__logo"
                src={logo}
                alt="Netflix Logo"/>
            <img
                className="avtar__logo"
                src={avtarLogo}
                alt="Avtar Logo"/>
            
        </div>
    )
}

export default Nav;
