import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import catImage from "../../assets/pic/vacc/VIR-101_EN.b197b0.jpg";
import catImage2 from "../../assets/pic/vacc/VIR-102_EN.b197b0.jpg";
import catImage3 from "../../assets/pic/vacc/VIR-105_EN-2.b197b0.jpg";




  /************************************************************************************************ */
  /************************************************************************************************ */



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


  /************************************************************************************************ */
  /************************************************************************************************ */


const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center mt-10 text-red-500">Product not found!</div>
    );
  }

  /************************************************************************************************ */
  /************************************************************************************************ */

  // ✅ Add to Cart
  const handleAddToCart = () => {
    // Add your cart logic here
    alert(`Added ${product.name} to cart!`);
  };

  /************************************************************************************************ */
  /************************************************************************************************ */

  return (
    <div className="max-w-6xl mx-auto p-6">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6 text-blue-600 hover:underline"
      >
        <ArrowLeft className="w-5 h-5" /> Back
      </button>

      <div className="border rounded-lg overflow-hidden shadow-lg">
        <div className="flex flex-col md:flex-row">
          {/* Left Side - Product Information */}
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-3">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-gray-500 mb-6">{product.details}</p>
              <div className="mb-8">
                <p className="text-sm text-gray-500 mb-1">Category</p>
                <p className="font-medium">{product.category}</p>
              </div>
            </div>

            <div className="mt-auto">
              <div className="flex justify-between items-center mb-4">
                <p className="text-green-600 font-semibold text-2xl">
                  {product.price} JD
                </p>
                <button
                  onClick={handleAddToCart}
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center gap-2 transition-colors"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Product Image */}
          <div className="md:w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
