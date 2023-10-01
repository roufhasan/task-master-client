import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const [showPass, setShowPass] = useState(false);

  const { signIn, signInWithGoogle } = useContext(AuthContext);

  const togglePassword = () => {
    setShowPass(!showPass);
  };

  // Login using Google
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((err) => {
        const message = err.message;
        console.log(message);
      });
  };

  // Login using email and password
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // sign in with email and password
    signIn(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((err) => {
        const message = err.message;
        console.log(message);
      });
  };
  return (
    <div className="md:bg-gradient-to-tl from-[#fc354c] to-[#0abfbc] h-screen min-h-[768px] grid place-items-center">
      <div className="bg-white rounded-3xl md:px-32 md:py-10">
        <h1 className="text-3xl font-medium text-center">Log In</h1>
        <p className="text-center mb-10 text-[#333]">
          Don&apos;t have an account?{" "}
          <Link to="/login" className="underline text-black">
            Sign up
          </Link>
        </p>
        <div
          onClick={handleGoogleLogin}
          className="flex gap-x-4 items-center justify-center py-2 px-8 md:py-5 md:px-36 rounded-[40px] border border-[#333] cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M23.0005 12.7332C23.0005 11.8699 22.9291 11.2399 22.7744 10.5865H12.7148V14.4832H18.6196C18.5006 15.4515 17.8577 16.9099 16.4291 17.8898L16.4091 18.0203L19.5897 20.435L19.8101 20.4565C21.8338 18.6249 23.0005 15.9298 23.0005 12.7332Z"
              fill="#4285F4"
            />
            <path
              d="M12.714 23.0001C15.6068 23.0001 18.0353 22.0667 19.8092 20.4567L16.4282 17.89C15.5235 18.5083 14.3092 18.94 12.714 18.94C9.88069 18.94 7.47596 17.1083 6.61874 14.5767L6.49309 14.5871L3.18583 17.0955L3.14258 17.2133C4.90446 20.6433 8.5235 23.0001 12.714 23.0001Z"
              fill="#34A853"
            />
            <path
              d="M6.62095 14.5767C6.39476 13.9234 6.26386 13.2233 6.26386 12.5C6.26386 11.7767 6.39476 11.0767 6.60905 10.4234L6.60306 10.2842L3.25435 7.7356L3.14478 7.78667C2.41862 9.21002 2.00195 10.8084 2.00195 12.5C2.00195 14.1917 2.41862 15.79 3.14478 17.2133L6.62095 14.5767Z"
              fill="#FBBC05"
            />
            <path
              d="M12.7141 6.05997C14.7259 6.05997 16.083 6.91163 16.8569 7.62335L19.8807 4.73C18.0236 3.03834 15.6069 2 12.7141 2C8.52353 2 4.90447 4.35665 3.14258 7.78662L6.60686 10.4233C7.47598 7.89166 9.88073 6.05997 12.7141 6.05997Z"
              fill="#EB4335"
            />
          </svg>
          <button className="text-xl">Log in with Google</button>
        </div>
        <div className="text-2xl flex items-center justify-center gap-x-6 my-10">
          <div className="h-[2px] w-full bg-[#666] opacity-25"></div>
          OR
          <div className="h-[2px] w-full bg-[#666] opacity-25"></div>
        </div>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="text-lg">
              Your email
            </label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              className="border border-[#c3c3c3] rounded-xl w-full py-3 focus:outline-0 px-2 md:px-5 mb-6"
            />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="password" className="text-lg">
                Your password
              </label>
              {showPass ? (
                <div
                  onClick={togglePassword}
                  className="flex gap-x-2 text-gray-500 cursor-pointer"
                >
                  <FaEye size={24} className="text-[#c3c3c3]" />
                  Show
                </div>
              ) : (
                <div
                  onClick={togglePassword}
                  className="flex gap-x-2 text-gray-500 cursor-pointer"
                >
                  <FaEyeSlash size={24} className="text-[#c3c3c3]" />
                  Hide
                </div>
              )}
            </div>
            <input
              type={showPass ? "text" : "password"}
              name="password"
              id="password"
              className="border border-[#c3c3c3] rounded-xl w-full py-3 focus:outline-0 md:px-5 px-2"
            />
          </div>
          <p className="underline text-right mt-2 mb-6 cursor-pointer">
            Forget your password?
          </p>
          <input
            type="submit"
            value="Log in"
            className="text-xl font-medium rounded-[40px] border w-full py-4 border-none bg-black text-white cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
