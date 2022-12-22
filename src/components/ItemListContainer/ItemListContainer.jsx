
import {getProduct} from '../../Assets/firebase'
import { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';



const ItemListContainer = () => {

  const [product, setProduct] = useState([])
  const {category} = useParams()

  useEffect(() => {
    if (category){
      getProduct().then(product => {
        const productosFiltrados = product.filter(prod => prod.category === category)
        const cardProduct = <ItemList product = {productosFiltrados}/>
        setProduct(cardProduct)
      })
    }else{
      getProduct().then(product => {
        const cardProduct = <ItemList product = {product}/>
        setProduct(cardProduct)
      } )
    }
  }, [category]);
  
  return(
    
        <div className="row container-fluid d-flex justify-content-center">
            {product}    
        </div>
    
  ) 
  
}

export default ItemListContainer;
