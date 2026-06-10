import { useState } from "react";
import RIGHT_BG_SRC from "../../public/bg.png";
import ARCH_IMG_SRC from "../../public/institute.jpg";
import LOGO_SRC from "../../public/canvade.png";
import { useNavigate } from "react-router-dom";
const CAPTCHA_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
const genCaptcha = () =>
  Array.from(
    { length: 5 },
    () => CAPTCHA_CHARS[Math.floor(Math.random() * CAPTCHA_CHARS.length)],
  ).join("");

export default function CanvadeLogin({ onLoginSuccess, onSignUpClick }) {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [captchaCode, setCaptchaCode] = useState("88538");
  const [captchaInput, setCaptchaInput] = useState("");
const navigate = useNavigate();
const [loading, setLoading] = useState(false);
  const handleLoginSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    if (!loginId || !password) {
      alert("Please enter email and password");
      return;
    }

    if (
      captchaInput.trim().toLowerCase() !==
      captchaCode.trim().toLowerCase()
    ) {
      alert("Invalid captcha");
      return;
    }

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/users/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: loginId,
          password,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }

    // Save token
    if (data.token) {
      localStorage.setItem("token", data.token);
    }

    // Save user
    if (data.user) {
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );
    }

    console.log("Login Success:", data);

    // Optional callback
    onLoginSuccess?.();

    // Redirect
    navigate("/admin/dashboard");

  } catch (error) {
    console.error(error);
    alert(error.message);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="w-full max-w-[360px] sm:max-w-[600px] px-4 animate-in fade-in duration-500">
      <div className="mb-9 flex flex-col items-center">
        <img
          src={LOGO_SRC}
          alt="Canvade"
          className="h-14 w-auto object-contain"
        />
      </div>

      <form onSubmit={handleLoginSubmit} className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-normal text-gray-700">
            Login ID
          </label>
          <input
            type="text"
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
            placeholder="Enter Your Email ID/Phone No:"
            className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-[#24977a] placeholder:text-gray-300"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-normal text-gray-700">
            Password
          </label>
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your Password"
              className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-[#24977a] placeholder:text-gray-300"
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {showPass ? (
                  <>
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </>
                ) : (
                  <>
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex shrink-0 items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2">
            <span className="select-none font-sans text-xl font-bold italic tracking-widest text-black line-through decoration-black">
              {captchaCode}
            </span>
            <button
              type="button"
              onClick={() => setCaptchaCode(genCaptcha())}
              className="text-gray-400 hover:text-[#24977a]"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="1 4 1 10 7 10" />
                <path d="M3.51 15a9 9 0 1 0 .49-3" />
              </svg>
            </button>
          </div>
          <input
            type="text"
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value)}
            placeholder="Enter Captcha"
            className="flex-1 rounded-md border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-[#24977a] placeholder:text-gray-300"
          />
        </div>

        <button
  type="submit"
  disabled={loading}
  className="w-full rounded-md bg-[#24977a] py-3 text-base font-semibold text-white disabled:opacity-70"
>
  {loading ? "Logging in..." : "Login to Your Account"}
</button>
      </form>

      <div className="my-8 flex items-center gap-3">
        <div className="h-px flex-1 bg-gray-200" />
        <span className="text-xs font-medium text-gray-400 uppercase">Or</span>
        <div className="h-px flex-1 bg-gray-200" />
      </div>

      <button
        type="button"
        className="ml-20 -mt-2 flex h-[42px] w-[200px] items-center justify-center gap-2 rounded-md border border-gray-200 bg-gray-200 py-2 text-[13px] font-normal text-gray-600 transition hover:bg-gray-50"
      >
        Sign in with Google
        <img
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
          alt="Google"
          className="h-4 w-4"
        />
      </button>

      <div className="mt-10 flex flex-col items-center gap-5">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-[#3a4e82]">
            Don't have an account?
          </span>
          <button
            type="button"
            onClick={onSignUpClick}
            className="rounded-full bg-[#24977a] px-6 py-1.5 text-xs font-bold text-white transition hover:bg-[#1d7a63]"
          >
            Sign Up
          </button>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-[#3a4e82]">
            Not a Student?
          </span>
          <button
            type="button"
            className="rounded-full bg-[#24977a] px-6 py-1.5 text-xs font-bold text-white transition hover:bg-[#1d7a63]"
          >
            Log in as an Institution
          </button>
        </div>
      </div>
    </div>
  );
}
