import {useState} from 'react';
import './itemCount.css'
import { Link } from 'react-router-dom';

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(1)

    const add = () => count < stock && setCount(count + 1)
    const subtract = () => count > 1 && setCount(count - 1)

    const addProductCart = () =>{
        onAdd(count)
    } 

    return (
        <>
            <div className='d-flex flex-column contenedor m-3' >
                <div>
                    <button onClick={subtract} className='btn btn-outline-danger size3 mx-3'>-</button>
                    {count}
                    <button onClick={add} className='btn btn-outline-success size3 mx-3'>+</button>
                </div>   
                <button onClick={addProductCart} className='btn btn-warning m-3'>Agregar al Carrito</button>
                <Link to={'/checkout'}><button onClick={addProductCart} className="btn btn-success">Finalizar Compra</button></Link> 
            </div>
        </>   
    );
}

export default ItemCount;
