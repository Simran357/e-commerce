const Navbar =()=>{
  return(<>
  <nav className="sticky top-0 z-50 bg-white shadow-md">
    <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
<h1 className="text-2xl font-bold text-blue-600">
  Shop
</h1>
<div className="w-1/3">
<input
type="text"
placeholder="Search products..."
 className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
          />
        </div>

        {/* Cart */}
        <button className="relative rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
          🛒 Cart

          <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            0
          </span>
        </button>
      </div>
    </nav>
  </>);
};

export default Navbar;