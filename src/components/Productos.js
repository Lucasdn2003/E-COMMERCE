import './Productos.css'
import Boton from './Boton';


const ItemListContainer = ( {juego1, juego2, juego3} ) => { 
  return (
    <section className='Catalogo'>
      <p>{juego1}<Boton/></p>
      <p>{juego2}<Boton/></p>
      <p>{juego3}<Boton/></p>
    </section>
  );
}

export default ItemListContainer;
