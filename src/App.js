import './App.css';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Header from './Pages/Header';
import Login from './Pages/Login';
import Product from './Pages/Product';
import ProductDetails from './Pages/ProductDetails';
import Welcome from './Pages/Welcome';

function App() {
  let component
   switch (window.location.pathname) {
    case "/":
      component = <Welcome />
      break;
    case "/about" :
      component = <About />
      break;
    case "/productDetails":
      component = <ProductDetails />
      break;  
    case "/contact" :
      component = <Contact/>
      break;
    case "/login" :
      component = <Login/>
      break;
    default:
      break;
   }
  return (
    <div>
      
      <Header/>
      <div className='container'>
         {component}
      </div>
    </div>
  );
}

export default App;
