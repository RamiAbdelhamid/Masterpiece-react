import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom"; // ✅ استخدام React Router
import { useState, useEffect } from "react"; // لاستخدام حالة لتخزين حالة تسجيل الدخول

const navigation = [
  { name: "Home", to: "/", current: true },
  { name: "About", to: "/about", current: false },
  { name: "Contact", to: "/contact", current: false },
  { name: "Veterinarians", to: "/Veterinarians", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  // استخدام localStorage لتخزين حالة تسجيل الدخول وصورة الملف الشخصي
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfilePicture, setUserProfilePicture] = useState("");

  // عند تحميل الصفحة، التحقق من حالة تسجيل الدخول
  useEffect(() => {
    const storedLoginState = localStorage.getItem("isLoggedIn");
    const storedProfilePicture = localStorage.getItem("userProfilePicture");

    if (storedLoginState === "true") {
      setIsLoggedIn(true);
      setUserProfilePicture(storedProfilePicture);
    }
  }, [isLoggedIn]); // إضافة isLoggedIn كـ dependency لتحديث الواجهة عندما تتغير الحالة

  const handleLogin = () => {
    // من المفترض أن يتم تسجيل الدخول هنا
    setIsLoggedIn(true);
    const profilePic =
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
    setUserProfilePicture(profilePic);

    // تخزين حالة التسجيل وصورة الملف الشخصي في localStorage
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userProfilePicture", profilePic);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserProfilePicture("");

    // إزالة حالة التسجيل وصورة الملف الشخصي من localStorage
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userProfilePicture");
  };

  return (
    <Disclosure as="nav" className="bg-[#33a641]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* زر القائمة الجانبية في الهاتف */}
            <DisclosureButton className="relative p-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md">
              <Bars3Icon className="block h-6 w-6" />
            </DisclosureButton>
          </div>

          {/* اللوجو + روابط القائمة */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block ">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* أيقونة الإشعارات */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            

            {/* قائمة المستخدم */}
            {isLoggedIn ? (
              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="relative flex rounded-full bg-gray-800 text-sm">
                    <img
                      src={userProfilePicture}
                      alt="User"
                      className="h-8 w-8 rounded-full"
                    />
                  </MenuButton>
                </div>
                <MenuItems className="absolute right-0 z-10 mt-2 w-48 bg-white shadow-lg ring-1 ring-black/5 rounded-md py-1">
                  <MenuItem>
                    {({ active }) => (
                      <Link
                        to="/Userprofile"
                        className={`block px-4 py-2 text-sm ${
                          active ? "bg-gray-100" : ""
                        }`}
                      >
                        Your Profile
                      </Link>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <Link
                        to="/settings"
                        className={`block px-4 py-2 text-sm ${
                          active ? "bg-gray-100" : ""
                        }`}
                      >
                        Settings
                      </Link>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <button
                        onClick={handleLogout}
                        className={`block px-4 py-2 text-sm ${
                          active ? "bg-gray-100" : ""
                        }`}
                      >
                        Sign out
                      </button>
                    )}
                  </MenuItem>
                </MenuItems>
              </Menu>
            ) : (
              <div className="flex space-x-4">
                <Link
                  to="/login"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* القائمة الجانبية للهاتف */}
      <DisclosurePanel className="sm:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              to={item.to}
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              {item.name}
            </DisclosureButton>
          ))}
          {!isLoggedIn && (
            <>
              <DisclosureButton
                as={Link}
                to="/login"
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Login
              </DisclosureButton>
              <DisclosureButton
                as={Link}
                to="/signup"
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Sign Up
              </DisclosureButton>
            </>
          )}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
