import { Card } from "./components/Card";
import { Navbar } from "./components/Navbar";
import { Searchbar } from "./components/Searchbar";
import './App.css';

function App() {
  return <div className='App'>
    <Navbar />
    <Searchbar />
    <div style={{display: "flex"}}>
      <Card />
      <Card />
    </div>
  </div>;
}

export default App;