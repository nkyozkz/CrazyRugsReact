import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getOnlyProduct } from "../../Assets/firebase"
import Error404 from "../Error/Error404"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () =>{

    const [product, setProduct] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        getOnlyProduct(id).then(productos => {
          setProduct(productos)
        })
    },[id])

    return(
      <>
      {
        product !== 0 ?
      <div className="containerMain">
        <ItemDetail product={product}/>
      </div>
      : <Error404/>
      }
      </>
    )
}

export default ItemDetailContainer