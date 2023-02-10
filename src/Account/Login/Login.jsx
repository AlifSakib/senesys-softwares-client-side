import React from "react";

const Login = () => {
  return (
    <div className="h-screen flex font-rajdhani">
      <div class="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div class="flex justify-center mx-auto">
          <h1 className="text-3xl font-bold">Login</h1>
        </div>

        <form class="mt-6">
          <div>
            <label
              for="username"
              class="block text-sm text-gray-800 dark:text-gray-200"
            >
              Username
            </label>
            <input
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div class="mt-4">
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm text-gray-800 dark:text-gray-200"
              >
                Password
              </label>
            </div>
            <input
              type="password"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div class="mt-6 space-x-6">
            <button class=" px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-secoundary rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              Sign In
            </button>
            <a
              href="#"
              class="text-xs text-gray-600 dark:text-gray-400 hover:underline"
            >
              Forget Password?
            </a>
          </div>
        </form>

        <div class="flex flex-col mt-4">
          <a href="#" class="  text-primary uppercase  font-bold text-2xl">
            New Customer?
          </a>

          <p className="text-xs">
            Sign up for an account to take advantage of order tracking and
            history as well as pre-filled forms during checkout on subsequent
            orders.
          </p>
        </div>

        <div class="flex items-center mt-6 ">
          <button class=" px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#53D3D1] rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
