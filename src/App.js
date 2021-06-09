import './App.css';
import { Navbar } from './Component/Navigation/Navbar';
import { Footer } from './Component/Footer/Footer';
import { Slide } from './Component/ImageSlider/Slide';
import { Content } from './Component/Content/Content';


function App() {
  return (
    <div className="App">
       <Navbar/>
       <Slide/>
       <Content/>
       <Footer/>
    </div>
  );
}

export default App;
