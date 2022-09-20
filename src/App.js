import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <header className="App-Header">
        <NavBar />
      </header>
      <div className="App-B1">
        <ItemListContainer greeting={"Bienvenidos a Prime Suplementos"} />
      </div>
    </div>
  );
}

export default App;
