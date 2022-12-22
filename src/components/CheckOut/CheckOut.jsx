import React from 'react';
import './checkOut.css';
import { CartContext } from '../../Context/CartContext';
import { useContext } from 'react';
import { createTicket, getTicket } from '../../Assets/firebase';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';


const CheckOut = () => {
    const [mail, setMail] = useState('')
    const [mail1, setMail1] = useState('')

    let navigate = useNavigate()
    
    const {clear,totalPrice, cart} = useContext(CartContext)

    const formInput = React.useRef()

    const consultForm = (e) =>{
        e.preventDefault()

        const dateInput = new FormData(formInput.current)
        const valueInput = Object.fromEntries(dateInput)

        createTicket(valueInput, totalPrice(), new Date().toLocaleString()).then(data => 
            getTicket(data.id).then(order=> {
                Swal.fire({
                    background: '#FF8000',
                    color: '#fff',
                    iconColor: 'rgb(41, 158, 6)',
                    icon: 'success',
                    title: 'Su Compra se realizo con exito',
                    html:`<p><b>Ticket:</b> ${order.id}</p>`+
                        `<p><b>Fecha:</b> ${order.fecha}</p>`+
                        `<p><b>NOMBRE:</b> ${order.nombre}</p>`+
                        `<p><b>Direccion:</b> ${order.direccion}</p>`+
                        `<p><b>Precio Final $</b>${order.precioTotal}</p>`,
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                clear()
                e.target.reset()
                navigate('/')
            }))
    
    }

    return (
        <div className='d-flex justify-content-center '>
            <form className='formulario' onSubmit={consultForm} ref={formInput}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label" >Nombre y Apellido</label>
                    <input type="text" className="form-control" name='nombre' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-Mail</label>
                    <input type="email" className="form-control" name='email' onChange={(e)=>{setMail(e.target.value)}} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email1" className="form-label">Repetir E-Mail</label>
                    <input type="email" className="form-control" name='email1'  onChange={(e)=>{setMail1(e.target.value)}} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Direccion</label>
                    <input type="text" className="form-control" name='direccion' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="tel" className="form-label">Telefono</label>
                    <input type="number" className="form-control" name='tel' />
                </div>
        
                {
                    mail === mail1 && cart.length > 0 ?
                    <button type="submit" className="btn btn-success" >Finalizar Compra</button>
                    :
                    <div>
                        <button type="submit" className="btn btn-success mx-3" disabled >Finalizar Compra</button>
                        <span>Para finalizar Compra debe tener productos en el carrito e ingresar correctamente 2 veces su mail</span>
                    </div>
                
                }    
                
            </form>
        </div>
    );
}

export default CheckOut;
