import { useEffect, useState } from 'react';
import './ItemListContainer.css'
import Card from './Card';
import './Card.css'
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
      {info && info.map(i => <Card nombre={i.nombre} precio={i.precio}/>)}
    </div>
  );
}

export default ItemListContainer;

