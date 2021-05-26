import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Menu from './components/menu';
import Products from './components/pages/Products'
import {CartProvider} from './context/cart'
import Counter from './components/functionComponent';

function App() {
  return (
   <CartProvider>
      <Router>
        <Menu/>
        <Route path="/products" component={Products} />
      </Router>
      <Counter/>
    </CartProvider>   
  );
}

export default App;
