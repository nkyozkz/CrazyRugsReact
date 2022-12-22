
import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc, getDocs, getDoc, doc} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAS25xds8ne4qqqf81ElFQJQk1sH-neYkc",
    authDomain: "crazyrugs-react.firebaseapp.com",
    projectId: "crazyrugs-react",
    storageBucket: "crazyrugs-react.appspot.com",
    messagingSenderId: "968901929846",
    appId: "1:968901929846:web:8a183f81001b773be3e857"
};


const app = initializeApp(firebaseConfig);

const dataBase = getFirestore()

const loadBD = async () =>{
    const promise = await fetch('./Data/productos.json')
    const data = await promise.json()

    data.forEach(async (prod) => {
        await addDoc(collection(dataBase, 'productos'),{
            name:prod.name,
            price:prod.price,
            description:prod.description,
            img:prod.img,
            category:prod.category,
            stock:prod.stock
        })
    });
}

const getProduct = async () =>{
    const product = await getDocs(collection(dataBase,'productos'))
    const items = product.docs.map(prod=> {return {...prod.data(), id:prod.id}})
    return items
}
const getOnlyProduct = async (id) =>{
    const product = await getDoc(doc(dataBase,'productos',id))
    let item 
    if (product.data()){
        item = {...product.data(), id: product.id}
    }else{
        item = 0
    }
    return item
}

const createTicket = async (client, total, date) =>{
    const ticket = await addDoc(collection(dataBase, 'OrdenDeCompra'),{
        fecha: date,
        nombre: client.nombre,
        Email: client.email,
        direccion: client.direccion,
        tel: client.tel,
        precioTotal: total
    })
    return ticket
}

const getTicket = async (id) =>{
    const item = await getDoc(doc(dataBase, 'OrdenDeCompra', id))
    const ticket = {...item.data(), id:item.id}
    return ticket

}

export {loadBD, getProduct, getOnlyProduct, createTicket, getTicket}