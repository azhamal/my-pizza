import "./App.css";
import Navigation from "./navagition/Navigation";
import Header from "./header/Header";
import Slaider from "./components/slaider/Slaider";

function App() {
  return (
    <div className="mainContainer">
      <Header />
      < Navigation />
      <Slaider/>
    </div>
  );
}

export default App;
