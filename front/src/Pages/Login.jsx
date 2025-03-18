import React, { useState, useEffect } from "react";
import { User, Mail, Lock, Tractor, Wheat } from "lucide-react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    farmName: "",
  });

  useEffect(() => {
    // إذا كان المستخدم قد سجل الدخول مسبقًا وبياناته موجودة في localStorage
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setFormData(userData);
      setIsLogin(true); // تأكد من وضع الحالة في "تسجيل الدخول"
    }
  }, []);

const handleSubmit = (e) => {
  e.preventDefault();
  if (isLogin) {
    const storedData = JSON.parse(localStorage.getItem("user"));
    if (
      storedData &&
      storedData.email === formData.email &&
      storedData.password === formData.password
    ) {
      localStorage.setItem("isLoggedIn", "true"); // تحديث حالة تسجيل الدخول
      window.location.reload(); // إعادة تحميل الصفحة لتحديث الواجهة
    } else {
      alert("Invalid credentials!");
    }
  } else {
    // تخزين البيانات في localStorage عند التسجيل
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
    } else {
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          farmName: formData.farmName,
        })
      );
      alert("Account created successfully!");
    }
  }
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-6">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          {/* Logo and Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center gap-2 mb-4">
              <Tractor className="h-8 w-8 text-green-600" />
              <Wheat className="h-8 w-8 text-amber-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              {isLogin ? "Welcome Back" : "Join AgriFarm"}
            </h2>
            <p className="text-gray-600 mt-2">
              {isLogin
                ? "Access your agricultural management tools"
                : "Start managing your farm operations today"}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="John Farmer"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="farmer@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Farm Name
                </label>
                <div className="relative">
                  <Tractor className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    name="farmName"
                    required
                    value={formData.farmName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Green Valley Farm"
                  />
                </div>
              </div>
            )}

            {isLogin && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-green-600 hover:text-green-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200"
            >
              {isLogin ? "Sign In" : "Create Account"}
            </button>
          </form>

          {/* Toggle between login and register */}
          <div className="mt-6 text-center text-sm">
            <span className="text-gray-600">
              {isLogin
                ? "Don't have an account? "
                : "Already have an account? "}
            </span>
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-green-600 font-medium hover:text-green-500"
            >
              {isLogin ? "Sign up" : "Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
