import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Homepage from "./pages/Homepage";
import NavbarUser from "./components/NavbarUser";

function App() {
  return (
    <div className="App">
      <NavbarUser />
      <Homepage />
    </div>
  );
}

export default App;
