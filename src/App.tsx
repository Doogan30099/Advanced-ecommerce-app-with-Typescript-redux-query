import "./App.css";
import ProductList from "./components/ProductList";
import Cart from "./components/cart";

function App() {
  

  return (
    <div className="container py-4">
      <header className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-primary"> Fakestore </h1>
        <Cart />
      </header>

      <ProductList />
    </div>
  );
}

export default App;
