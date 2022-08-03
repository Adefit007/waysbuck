import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Homepage from "./pages/Homepage";
import NavbarUser from "./components/NavbarUser";
import NavbarLogin from "./components/NavbarLogin";
import { useState } from "react";
import NavbarAdmin from "./components/NavbarAdmin";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div className="App">
      {isLogin ? <NavbarUser /> : <NavbarLogin />}
      {isAdmin ? <NavbarUser /> : <NavbarAdmin />}

      <Homepage />
    </div>
  );
}

export default App;
