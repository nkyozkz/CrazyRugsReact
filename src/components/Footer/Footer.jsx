import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="container footer-content">
            <ul className="footer-info">
                <p>Contacto</p>
            
                <li className='fontSize4'>info.crazyrugs@gmail.com</li>
                <li className='fontSize4'>+56876543321</li>
            </ul>
            <ul className="footer-redes">
                <li><a href="https://www.whatsapp.com"><i className="fab fa-whatsapp"></i></a></li>
                <li><a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a></li>
            </ul>
            </div>
            <p>© Crazy Rugs 2022</p>
        </footer>
    );
}

export default Footer;