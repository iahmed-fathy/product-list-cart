import CartList from "./components/CartList/CartList";
import ProductList from "./components/ProductList/ProductList";

function App() {
  return (
    <main className="grid grid-cols-[2fr_1fr] gap-4 min-h-screen m-10">
      <ProductList />
      <CartList />
    </main>
  );
}

export default App;
