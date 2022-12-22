import './cart.css';
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from 'react-router-dom';


const Cart = () =>{

    const {cart, clear, removeItem, totalPrice} = useContext(CartContext)

    return(
        <div className='d-flex justify-content-center'>
            <div className="cart">
            {
                cart.length === 0 ?
                <div>
                    <h1>Carrito Vacio</h1>
                    <Link to={'/'}><button className='btn btn-secondary'>ir al Inicio</button></Link>
                </div>
                : 
                <div>
                    <h2>Productos en Carrito</h2>
                    {
                        cart.map((prod,index)=>(
                            <div key={index} className="card mb-3" style={{ maxWidth: '540px', color: 'black' }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={prod.img} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8 d-flex">
                                        <div className="card-body">
                                            <h5 className="card-title">{prod.name}</h5>
                                            <p className="card-text"> Cantidad: {prod.cant}</p>
                                            <p className="card-text">Precio ${prod.price}</p>
                                            <p className="card-text">Subtotal ${prod.price * prod.cant}</p>
                                        </div>
                                        <div className='d-flex align-items-center m-3'>
                                            <button className='btnBorrar' onClick={()=>{removeItem(prod.id)}}>
                                                <img style={{width: '24px'}} src='./img/borrar.png' alt=''/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    
                    <Link to={'/'}><button className='btn btn btn-outline-success mb-4 mx-3'>Seguir Comprando</button></Link>
                    <Link to={'/checkout'}><button className='btn btn-success mb-4'>Finalizar Compra</button></Link>
                    <div>
                        <h5 className='h5Total'>Total Compra ${totalPrice()}</h5>
                        <button className='btn btn-danger' onClick={clear}>Limpiar Carrito</button>
                    </div>
                </div>
            }
            </div>

        </div>
    )
}

export default Cart