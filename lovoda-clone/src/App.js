import "./App.css";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Pages/AllRoutes";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Home/>
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
