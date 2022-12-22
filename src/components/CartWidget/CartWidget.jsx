import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../Context/CartContext';
import { useContext } from 'react';


const CartWidget = () => {

    const {getItemQuantity} = useContext(CartContext)

    return ( 
        <Link to='/Cart'>
            <button type="button" className="btn btn-secondary position-relative mx-3">
                <FontAwesomeIcon icon={faCartShopping} />
                {getItemQuantity()>0 &&   
                <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
                {getItemQuantity()}
                </span>
                }
            </button>
        </Link>
    );
}

export default CartWidget;
