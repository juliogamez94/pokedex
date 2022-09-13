import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
