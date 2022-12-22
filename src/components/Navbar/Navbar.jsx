import './navbar.css'
import { Link } from 'react-router-dom';
import Dropdown from "../Dropdown/Dropdown";
import CartWidget from '../CartWidget/CartWidget';


const Navbar = () => {
    return (
      <div className='head'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark m-6">
          <div className="container-fluid">
            <Link className='navbar-brand tittle logo' to='/' > CrazyRugs</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link className="seccionesColor nav-link " to='/' >INICIO</Link>
              </li>
              
              <Dropdown/>
              
              </ul>
              <CartWidget/>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default Navbar;



