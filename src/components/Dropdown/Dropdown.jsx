import { Link } from "react-router-dom";
import './dropdown.css'

const Dropdown = () => {
    return (
        <li className="nav-item dropdown">
            <span className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Productos
            </span>
            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to='/category/Large'>Large</Link></li>
                <li><Link className="dropdown-item" to='/category/Medium'>Medium</Link></li>
                <li><Link className="dropdown-item" to='/category/Small'>Small</Link></li>
            </ul>
        </li>
    );
}

export default Dropdown;
