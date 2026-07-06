import Navbar from '../components/product/navbar';
import FilterPanel from '../components/product/filterPanel';
import ProductGrid from '../components/product/productGrid';
import CartSidebar from '../components/cart/CartSidebar';
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="mx-auto flex max-w-7xl gap-6 p-6">
        <div className="flex-1">
          <FilterPanel />
          <ProductGrid />
        </div>

        <CartSidebar />
      </div>
    </div>
  );
};

export default Home;