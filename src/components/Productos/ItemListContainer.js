import { useEffect, useState } from 'react';
import Item from './Item';
import './ItemListContainer.css'
import './Item.css'
import './ItemCount'

const ItemListContainer = () => { 

  const[info, setInfo] = useState()

  useEffect(() => {
    fetch('data.json')
    .then((resp) => resp.json())
    .then((data) => setInfo(data))
  }, []);


  return (
    <div className='Catalogo'>
      {info && info.map(i => <Item nombre={i.nombre} precio={i.precio}/>)}
    </div>
  );
}

export default ItemListContainer;

