import './App.css';
import NavBar from './components/NavBar';
import Productos from './components/Productos';
/* import Boton from './components/Boton'; */



function App() {
  return (
    <div className="App">
        <NavBar/>
        <h2>Tenemos increibles ofertas</h2> 
        <Productos
        juego1='GTA 5'
        juego2='ARK: Survival Evolved'
        juego3='Elden Ring'/>
        
          
      
        
    </div>
    
  );
}




export default App;

