import logo from './logo.svg';
import './App.css';
import Navbar from './Componenets/Navbar';
import TextForm from './Componenets/TextForm';




function App() {
  return (
    <div className="App">
   <Navbar/>
   <div className="container my-3" >
   <TextForm heading = "Enter the text to Analyze below "/>
   </div>
    </div>
  );
}


export default App;
