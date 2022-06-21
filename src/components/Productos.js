import './Productos.css'


const ItemListContainer = ( {juego1, juego2, juego3} ) => { 
  return (
    <section className='Catalogo'>
      <p>{juego1}</p>
      <p>{juego2}</p>
      <p>{juego3}</p>
    </section>
  );
}

export default ItemListContainer;
