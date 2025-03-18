
import React, { useState, useEffect } from "react";
import { Search, Filter, ShoppingCart, X, Plus, Eye } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../Component/ui/hover-card";
import catImage from '../assets/pic/vacc/VIR-101_EN.b197b0.jpg';
import catImage2 from '../assets/pic/vacc/VIR-102_EN.b197b0.jpg';
import catImage3 from '../assets/pic/vacc/VIR-105_EN-2.b197b0.jpg';
import { useNavigate } from "react-router-dom";


const Livevacc = () => {
  const [showCart, setShowCart] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Vir 101",
      description: "Premium quality organic fertilizer for all types of crops",
      price: 29.99,
      category: "chicken vaccine",
      image: catImage,
      details:
        "Rich in nutrients and beneficial microorganisms. Ideal for sustainable farming.",
    },
    {
      id: 2,
      name: "Vir 102",
      description: "Complete natural pest control solution for your farm",
      price: 49.99,
      category: "chicken vaccine",
      image: catImage2,
      details: "Environment-friendly pest control kit with botanical extracts.",
    },
    {
      id: 3,
      name: "Vir 105",
      description: "Professional soil testing equipment for accurate results",
      price: 79.99,
      category: "chicken vaccine",
      image: catImage3,
      details:
        "Tests pH, nutrients, and moisture levels. Essential for precision farming.",
    },
  ];

  // ✅ تحميل البيانات من LocalStorage عند فتح الصفحة
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  /************************************************************************************************ */
  /************************************************************************************************ */

  // Cart
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add and remove from cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  /************************************************************************************************ */
  /************************************************************************************************ */

  //Search and Filter
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  /************************************************************************************************ */
  /************************************************************************************************ */


  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header with Search and Cart */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
          >
            <Filter className="w-5 h-5" />
            Filters
          </button>

          <button
            onClick={() => setShowCart(!showCart)}
            className="relative flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
          >
            <ShoppingCart className="w-5 h-5" />
            Cart
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
                {cartItems.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Filters */}
      {showFilters && (
        <div className="mb-8 p-4 border rounded-lg bg-gray-50">
          <h3 className="font-semibold mb-4">Categories</h3>
          <div className="flex gap-4">
            {["all", "chicken vaccine", "pesticides", "tools"].map(
              (category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg capitalize ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-white border hover:bg-gray-50"
                  }`}
                >
                  {category}
                </button>
              )
            )}
          </div>
        </div>
      )}

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg p-6 z-50">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Shopping Cart</h2>
            <button onClick={() => setShowCart(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b pb-4"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">${item.price}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <div className="pt-4">
                <p className="font-semibold">
                  Total: $
                  {cartItems
                    .reduce((sum, item) => sum + item.price, 0)
                    .toFixed(2)}
                </p>
                <button
                  onClick={() => navigate("/checkout")}
                  className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <HoverCard key={product.id}>
            <HoverCardTrigger>
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <p className="text-green-600 font-semibold mb-4">
                    {product.price} JD
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => addToCart(product)}
                      className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
                    >
                      <Plus className="w-4 h-4" />
                      Add to Cart
                    </button>
                    <button
                      onClick={() => navigate(`/product/${product.id}`)}
                      className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 z-50">
              <div className="space-y-2">
                <h4 className="font-semibold">{product.name}</h4>
                <p className="text-sm text-gray-500">{product.details}</p>
                <div className="pt-2">
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Livevacc;




