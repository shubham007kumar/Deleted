import './App.css';
import { Navbar } from './Component/Navigation/Navbar';
import { Footer } from './Component/Footer/Footer';
import { Slide } from './Component/ImageSlider/Slide';


function App() {
  return (
    <div className="App">
       <Navbar/>
       <Slide/>
       <Footer/>
    </div>
  );
}

export default App;
