import { createContext, useState,  } from "react";


const CartContext = createContext([])

const CartContextProvider = (props) => {
    
    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        return cart.find(prod => prod.id === id)
    }

    const addItem = (item, quantity) =>{
        
        if (isInCart(item.id)){
            const index = cart.findIndex(prod => prod.id === item.id)
            const aux = [...cart]
            aux[index].cant = quantity
            setCart(aux)
        }else{
            const newProduct = {...item, cant: quantity}
            setCart([...cart, newProduct])
        }
    }
    
    const clear = () =>{
        return setCart([]);
    }

    const removeItem = (id) =>{
            return setCart(cart.filter(prod => prod.id !== id))
    }

    const getItemQuantity = () =>{
        return cart.reduce((acc,prod)=> acc += prod.cant,0)
    }

    const totalPrice = () =>{
        return cart.reduce((acc,prod)=> acc += (prod.cant * prod.price),0)
    }

    return(
        <CartContext.Provider value={{cart, isInCart, addItem, clear, removeItem, getItemQuantity, totalPrice}}>
            {props.children}
        </CartContext.Provider>
    )


}

export {CartContextProvider, CartContext}