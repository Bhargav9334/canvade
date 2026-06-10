import { useState } from "react";
import LOGO_SRC from "../../../public/canvade.png";
import { FiEye, FiEyeOff, FiRefreshCw } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
const handleGoogleSignup = () => {
  console.log("Google signup clicked");
};

export default function Signup({ switchToLogin, onSignupSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
const navigate = useNavigate();
 const handleSignup = () => {
  if (!name || !email || !password || !confirm || !captcha) {
    alert("Please fill in all required fields including Captcha.");
    return;
  }

  if (password !== confirm) {
    alert("Passwords do not match.");
    return;
  }

  if (onSignupSuccess) {
    onSignupSuccess();
  }

  navigate("/admin/dashboard");
};

  const inputCls =
    "w-full rounded-md border border-gray-300 px-3 py-2 text-[13px] font-normal outline-none transition focus:border-emerald-500 focus:ring-1 focus:ring-emerald-50";

  const labelCls =
    "mb-1 block text-[12px] font-medium text-gray-600 uppercase tracking-tight";

  return (
    <div className="mx-auto my-10 w-full max-w-[400px] sm:max-w-[600px] bg-white px-4 py-8">
      <div className="mb-6 flex flex-col items-center text-center">
        <img
          src={LOGO_SRC}
          alt="Canvade"
          className="h-10 sm:h-12 w-auto object-contain"
        />
      </div>

      <div className="space-y-3">
        <div>
          <label className={labelCls}>Registered Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Institution Name"
            className={inputCls}
          />
        </div>

        <div>
          <label className={labelCls}>Email ID</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className={inputCls}
          />
        </div>

        <div>
          <label className={labelCls}>Phone No:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
            className={inputCls}
          />
        </div>

        <div className="space-y-2">
          <label className={labelCls}>Create Password</label>
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className={`${inputCls} pr-10`}
            />
            <button
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              type="button"
            >
              {showPass ? <FiEyeOff size={16} /> : <FiEye size={16} />}
            </button>
          </div>

          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              placeholder="Confirm Password"
              className={`${inputCls} pr-10 ${
                confirm && confirm !== password ? "border-red-400" : ""
              }`}
            />
            <button
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              type="button"
            >
              {showConfirm ? <FiEyeOff size={16} /> : <FiEye size={16} />}
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex h-9 w-24 shrink-0 items-center justify-center rounded border border-gray-200 bg-gray-50 px-2">
            <span className="select-none text-md tracking-tighter text-gray-500 line-through font-sans italic font-normal">
              88538
            </span>
            <button
              type="button"
              className="ml-1 text-gray-400 hover:text-emerald-500"
            >
              <FiRefreshCw size={12} />
            </button>
          </div>
          <input
            type="text"
            value={captcha}
            onChange={(e) => setCaptcha(e.target.value)}
            placeholder="Captcha"
            className="h-9 w-full rounded border border-gray-300 px-3 text-[13px] font-normal outline-none focus:border-emerald-500"
          />
        </div>

        <button
          type="button"
          onClick={handleSignup}
          className="mt-2 w-full rounded-md bg-[#24977a] py-2 text-[14px] font-normal text-white transition hover:bg-[#1d7a63] active:scale-[0.98]"
        >
          Sign up to Your Account
        </button>

        <div className="relative flex items-center py-1">
          <div className="flex-grow border-t border-gray-300" />
          <span className="mx-2 text-[10px] font-normal text-gray-500 uppercase">
            OR
          </span>
          <div className="flex-grow border-t border-gray-300" />
        </div>

        <button
          type="button"
          onClick={handleGoogleSignup}
          className="ml-20 flex h-[42px] w-[200px] items-center justify-center gap-2 rounded-md border border-gray-200 bg-gray-200 py-2 text-[13px] font-normal text-gray-600 transition hover:bg-gray-50"
        >
          Sign in with Google
          <FcGoogle size={16} />
        </button>

        <div className="pt-2 space-y-4">
          <div className="flex flex-row items-center justify-center gap-2 sm:gap-4">
            <span className="text-[13px] sm:text-[14px] font-normal text-[#3a4e82] whitespace-nowrap">
              Don't have an account?
            </span>
            <button
              onClick={switchToLogin}
              className="rounded-full bg-[#24977a] px-4 py-1.5 text-[12px] sm:text-[14px] font-normal text-white transition hover:bg-[#1d7a63] active:scale-95 whitespace-nowrap"
            >
              Log in
            </button>
          </div>

          <div className="flex flex-row items-center justify-center gap-2 sm:gap-4">
            <span className="text-[13px] sm:text-[14px] font-normal text-[#3a4e82] whitespace-nowrap">
              Not a Institution?
            </span>
            <button className="rounded-full bg-[#24977a] px-4 py-1.5 text-[12px] sm:text-[14px] font-normal text-white transition hover:bg-[#1d7a63] active:scale-95 whitespace-nowrap">
              Log in as an Student
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
