import './App.css';
import NavBar from './components/NavBar';
import Inicio from './components/Inicio/Inicio';
import Carrito from './components/Carrito/Carrito'
import ItemListContainer from './components/Productos/ItemListContainer';
import {Routes, Route} from 'react-router-dom'




function App() {
  return (
    <div className="App">
        <NavBar/>
        <hr/>
        <Routes>
          <Route path='/Inicio' element={ <Inicio />}></Route>
          <Route path='/Productos' element={ <ItemListContainer/>}></Route>
          <Route path='/Carrito' element={ <Carrito />}></Route>
        </Routes>

         
        
          
             
    </div>
    
  );
}

/* juego1='GTA 5'
          juego2='ARK: Survival Evolved'
          juego3='Elden Ring' */




export default App;

