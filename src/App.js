// import logo from './logo.svg';
import Cupcake from './components/Cupcake'
import cupcakeImg from './images/cupcake.jpg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Bienvenidos a mi pagina</h1>
        {/* <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visita el sitio web
        </a> */}
      </header>
      <main>
        <section className="cupcakes-container">
          <Cupcake 
            color="Rojo"
            sabor="Cereza"
            imagen={ cupcakeImg }
          />
          <Cupcake 
            color="Azul"
            sabor="Moras"
            imagen={ cupcakeImg }
          />
          <Cupcake 
            color="Rosa"
            sabor="Fresa"
            imagen={ cupcakeImg }
          />
          <Cupcake 
            color="Verde"
            sabor="Uva"
            imagen={ cupcakeImg }
          />
          <Cupcake 
            color="Anaranjado"
            sabor="Naranja"
            imagen={ cupcakeImg }
          />
          <Cupcake 
            color="Cafe"
            sabor="Café"
            imagen={ cupcakeImg }
          />
        </section>
      </main>
    </div>
  );
}

export default App;
