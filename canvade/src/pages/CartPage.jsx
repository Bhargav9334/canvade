import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Trash2,
  Clock,
  Globe,
  BarChart,
  ShieldCheck,
  Headphones,
  Lock,
  CheckCircle2,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CartItem = ({ item, selected, onSelect, onRemove }) => (
  <div
    onClick={() => onSelect(item.id)}
    className={`bg-[#F9FBFA] rounded-2xl border p-4 mb-4 flex flex-col md:flex-row gap-5 cursor-pointer transition-all duration-200 ${
      selected
        ? "border-emerald-400 ring-2 ring-emerald-100 shadow-sm"
        : "border-gray-100 hover:border-emerald-200 hover:shadow-sm"
    }`}
  >
    {/* Thumbnail */}
    <div className="relative w-full md:w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover"
      />
      {selected && (
        <div className="absolute inset-0 bg-emerald-900/10 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-emerald-500 drop-shadow" />
        </div>
      )}
    </div>

    <div className="flex-grow">
      <div className="flex justify-between items-start mb-2">
        <span className={`text-[10px] px-2 py-1 rounded-md ${item.badgeColor}`}>
          {item.type}
        </span>
        <div className="flex items-center gap-4">
          <span className="text-gray-800 text-[16px]">
            ₹ {item.price.toLocaleString()}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onRemove(item.id);
            }}
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      <h3 className="text-[17px] text-gray-800 mb-1 leading-tight">
        {item.title}
      </h3>
      <p className="text-gray-500 text-[13px] mb-3">{item.provider}</p>

      <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-gray-500 text-[12px]">
        <div className="flex items-center gap-1.5">
          <Clock size={14} className="text-gray-400" />
          {item.duration}
        </div>
        <div className="flex items-center gap-1.5">
          <Globe size={14} className="text-gray-400" />
          {item.mode}
        </div>
        <div className="flex items-center gap-1.5">
          <BarChart size={14} className="text-gray-400" />
          {item.level}
        </div>
      </div>
    </div>
  </div>
);

const CartPage = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1551288049-bbda4833effb?auto=format&fit=crop&q=80&w=200",
      type: "Course",
      badgeColor: "bg-emerald-50 text-emerald-600",
      title: "Data Science Professional Course",
      provider: "Imarticus Learning",
      price: 130000,
      originalPrice: 150000,
      duration: "6 Months",
      mode: "Online",
      level: "Beginner to Advanced",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=200",
      type: "Workshop",
      badgeColor: "bg-purple-50 text-purple-600",
      title: "Digital Marketing Workshop",
      provider: "SkillUp Academy",
      price: 2999,
      originalPrice: 4999,
      duration: "2 Days",
      mode: "Offline",
      level: "All Levels",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=200",
      type: "Short Term Skill Course",
      badgeColor: "bg-orange-50 text-orange-600",
      title: "Python for Beginners",
      provider: "CodeCraft",
      price: 4999,
      originalPrice: 7999,
      duration: "4 Weeks",
      mode: "Online",
      level: "Beginner",
    },
  ]);

  const [selectedId, setSelectedId] = useState(1);

  const selectedItem = cartItems.find((item) => item.id === selectedId);

  const removeItem = (id) => {
    const remaining = cartItems.filter((item) => item.id !== id);
    setCartItems(remaining);
    // If removed item was selected, auto-select first remaining
    if (id === selectedId && remaining.length > 0) {
      setSelectedId(remaining[0].id);
    }
  };

  const discount = selectedItem
    ? (selectedItem.originalPrice || selectedItem.price) - selectedItem.price
    : 0;

  return (
    <div className="min-h-screen bg-white font-heading">
      <Navbar />

      <main className="w-full px-6 md:px-14 lg:px-24 pt-24 pb-20">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left — cart items */}
          <div className="flex-grow">
            {/* Hint */}
            {cartItems.length > 0 && (
              <p className="text-[12px] text-gray-400 mb-4 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                Select a course to review its details before checkout
              </p>
            )}

            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  selected={selectedId === item.id}
                  onSelect={setSelectedId}
                  onRemove={removeItem}
                />
              ))
            ) : (
              <div className="bg-[#F9FBFA] rounded-2xl border border-dashed border-gray-200 p-20 text-center">
                <p className="text-gray-400 text-[16px]">Your cart is empty</p>
              </div>
            )}

            <div className="flex items-center gap-4 mt-8 bg-emerald-50/40 p-4 rounded-xl border border-emerald-100/50 w-fit">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-emerald-600 shadow-sm border border-emerald-50">
                <ShieldCheck size={28} />
              </div>
              <div>
                <p className="text-[15px] text-emerald-900">100% Secure Payment</p>
                <p className="text-[13px] text-emerald-700/80">Your payment details are safe with us.</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[400px] space-y-6 mt-8 lg:mt-8">
            <div className="bg-[#F9FBFA] rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-gray-800 text-[20px] mb-5">Order Summary</h3>

              {selectedItem ? (
                <>
                  

                  <div className="space-y-3 text-[14px] mb-5">
                    {selectedItem.originalPrice && selectedItem.originalPrice !== selectedItem.price && (
                      <div className="flex justify-between text-gray-400">
                        <span>Original Price</span>
                        <span className="line-through">₹ {selectedItem.originalPrice.toLocaleString()}</span>
                      </div>
                    )}
                    {discount > 0 && (
                      <div className="flex justify-between text-emerald-600">
                        <span>Discount</span>
                        <span>- ₹ {discount.toLocaleString()}</span>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-gray-100 pt-4 mb-1">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-800 text-[16px]">Total</span>
                      <span className="text-gray-900 text-[22px] font-semibold">
                        ₹ {selectedItem.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <p className="text-[11px] text-gray-400 mb-1 text-right">All prices inclusive of taxes</p>
                </>
              ) : (
                <p className="text-[13px] text-gray-400 text-center py-6">No item selected</p>
              )}
            </div>

            <div className="bg-[#F3FBF9] rounded-2xl border border-[#E1F2EE] p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white shadow-md">
                  <ShieldCheck size={20} />
                </div>
                <h4 className="text-emerald-900 text-[16px]">One by One Checkout</h4>
              </div>
              <p className="text-[13px] text-emerald-800/80 leading-relaxed mb-6">
                Items in your cart will be purchased and enrolled one at a time.
              </p>

              <button
                onClick={() => navigate("/checkout")}
                disabled={!selectedItem}
                className="w-full bg-[#057A55] hover:bg-[#046c4b] disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 rounded-xl text-[15px] transition-all shadow-lg shadow-emerald-100 mb-4"
              >
                Checkout (One by One)
              </button>

              <div className="flex items-center justify-center gap-2 text-gray-500 text-[12px]">
                <Lock size={14} />
                <span>You will be able to review each item before payment.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Help bar */}
        <div className="mt-16 flex justify-center w-full px-4">
          <div className="bg-[#F9FBFA] rounded-2xl border border-gray-100 p-6 flex flex-col md:flex-row items-center gap-6 w-full max-w-[750px] justify-between shadow-sm">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-emerald-600 flex-shrink-0 border border-gray-100">
                <Headphones size={32} />
              </div>
              <div className="text-center md:text-left">
                <p className="text-[18px] text-gray-800">Need Help?</p>
                <p className="text-[14px] text-gray-500">Our support team is here for you.</p>
              </div>
            </div>
            <button className="w-full md:w-auto px-10 py-3 border border-gray-200 rounded-xl text-[14px] text-gray-700 hover:bg-white hover:border-emerald-200 transition-all shadow-sm">
              Contact Support
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CartPage;