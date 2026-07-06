import Navbar from "../components/layout/navbar";
import FilterPanel from "../components/layout/filterpanel";
import ProductGrid from "../components/layout/productGrid";
import CartSidebar from "../components/layout/cartSider";
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