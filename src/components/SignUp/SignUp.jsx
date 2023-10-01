import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const SignUp = () => {
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser } = useContext(AuthContext);

  const togglePassword = () => {
    setShowPass(!showPass);
  };

  // Sign up using email and password
  const onSubmit = (data) => {
    console.log(data);
    if (data.password !== data.confirmPassword) {
      setError("Password didn't match");
    }
    createUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
        toast.success("Sign Up Successful");
        setError("");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="md:bg-gradient-to-tl from-[#fc354c] to-[#0abfbc] h-screen min-h-[768px] grid place-items-center">
      <div className="bg-white rounded-3xl md:px-32 md:py-10">
        <h1 className="text-2xl font-medium text-center md:px-36">
          Welcome To Task Master
        </h1>
        <h1 className="text-3xl font-medium text-center mt-3 mb-1">Sign Up</h1>
        <p className="text-center mb-10 text-[#333]">
          Already have an account?{" "}
          <Link to="/login" className="underline text-black">
            Log in
          </Link>
        </p>
        <div className="text-2xl flex items-center justify-center gap-x-6 my-10">
          <div className="h-[2px] w-full bg-[#666] opacity-25"></div>
          OR
          <div className="h-[2px] w-full bg-[#666] opacity-25"></div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email" className="text-lg">
              Your email
            </label>
            <br />
            <input
              required
              type="email"
              {...register("email")}
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
              required
              type={showPass ? "text" : "password"}
              {...register("password", {
                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              })}
              id="password"
              className="border border-[#c3c3c3] rounded-xl w-full py-3 focus:outline-0 md:px-5 px-2"
            />
            {errors.password?.type === "pattern" && (
              <p className="my-2 text-sm text-red-400">
                Password must be min 8 characters, one letter and one number.
              </p>
            )}
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="text-lg">
              Confirm Password
            </label>
            <br />
            <input
              required
              type="password"
              {...register("confirmPassword", {
                pattern: "^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$",
              })}
              id="confirmPassword"
              className={` ${
                error && "border-red-400"
              }border border-[#c3c3c3] rounded-xl w-full py-3 focus:outline-0 px-2 md:px-5 mb-6 mt-2`}
            />
          </div>
          <p className="mb-4 text-red-600 animate-bounce">{error}</p>
          <input
            type="submit"
            value="Sign Up"
            className="text-xl font-medium rounded-[40px] border w-full py-4 border-none bg-black text-white cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
