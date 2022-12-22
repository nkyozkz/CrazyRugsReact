import Item from '../Item/Item';

const ItemList = ({product}) => {

  return(
    <>
      {product.map(product => <Item key={product.id} prod={product}/>)}
    </>

  )

};

export default ItemList;
