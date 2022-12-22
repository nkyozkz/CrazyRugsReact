import { Link } from "react-router-dom";
import './item.css'

const Item = ({prod}) => {
    return (
        <div className="card m-3" style={{ width: "18rem" }} >
        <img src={prod.img} className="card-img-top card-img" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title ">{prod.name}</h5>
          <h5 className="card-text price" >Precio ${prod.price}</h5>
          <p className="card-text">Stock: {prod.stock}</p>
          <Link to={`/Item/${prod.id}`}><button className="btn btn-warning">Ver Detalle</button></Link>
        </div>
      </div>
    );
}

export default Item;
