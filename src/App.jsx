import "./App.scss";
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {

  return (
    <div>

      <NavBar />

      <ItemListContainer
        saludo1="Bienvenido a JoyveriE " saludo2="El lugar ideal para tus joyas y accesorios..."
      />
    </div>
  );
}

export default App;
