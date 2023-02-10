import React from "react";

const Login = () => {
  return (
    <div className="h-screen flex font-rajdhani">
      <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg  dark:bg-gray-800">
        <div className="flex justify-center mx-auto">
          <h1 className="text-3xl font-bold">Login</h1>
        </div>
        <form className="mt-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm text-gray-800 dark:text-gray-200"
            >
              Username
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                Password
              </label>
            </div>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-6 space-x-6">
            <button className=" px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-secoundary  hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              Sign In
            </button>
            <a
              href="#"
              className="text-xs text-gray-600 dark:text-gray-400 hover:underline"
            >
              Forget Password?
            </a>
          </div>
        </form>

        <div className="flex flex-col mt-4">
          <a href="#" className="  text-primary uppercase  font-bold text-2xl">
            New Customer?
          </a>

          <p className="text-xs">
            Sign up for an account to take advantage of order tracking and
            history as well as pre-filled forms during checkout on subsequent
            orders.
          </p>
        </div>

        <div className="flex items-center mt-6 ">
          <button className=" px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#53D3D1]  hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
