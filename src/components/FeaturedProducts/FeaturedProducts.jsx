import product1 from "../../assets/products/product 1.png";
import product2 from "../../assets/products/product 2.png";
import product3 from "../../assets/products/product 3.png";
import product4 from "../../assets/products/product 4.png";

const FeaturedProducts = () => {
  return (
    <div>
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 font-rajdhani">
          <header className="text-center">
            <h3 className="font-homemade_apple text-secoundary font-bold">
              Whats New
            </h3>
            <h2 className="text-5xl font-extrabold text-gray-900  ">
              Shop The Latest
            </h2>

            <p className="max-w-md mx-auto mt-4 text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>
          </header>

          <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
            <li>
              <a href="#" className="block overflow-hidden group">
                <img
                  src={product1}
                  alt=""
                  className=" w-full h-full transition duration-500 group-hover:scale-105"
                />

                <div className="relative pt-3 bg-white">
                  <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4 font-bold">
                    The Ohio Bar - Cerakote
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900 line-through">
                      {" "}
                      $440.00 USD{" "}
                    </span>
                    <span className="tracking-wider px-2 font-extrabold text-red-600 text-2xl">
                      {" "}
                      $240.00 USD{" "}
                    </span>
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a href="#" className="block overflow-hidden group">
                <img
                  src={product2}
                  alt=""
                  className=" w-full h-full transition duration-500 group-hover:scale-105"
                />

                <div className="relative pt-3 bg-white">
                  <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4 font-bold">
                    Rogue Adjustable Bench 3.0
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900">
                      {" "}
                      $24.00 USD{" "}
                    </span>
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a href="#" className="block overflow-hidden group">
                <img
                  src={product3}
                  alt=""
                  className=" w-full h-full transition duration-500 group-hover:scale-105"
                />

                <div className="relative pt-3 bg-white">
                  <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4 font-bold">
                    Rogue USA Nylon Lifting Belt
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900">
                      {" "}
                      $24.00 USD{" "}
                    </span>
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a href="#" className="block overflow-hidden group">
                <img
                  src={product4}
                  alt=""
                  className=" w-full h-full transition duration-500 group-hover:scale-105"
                />

                <div className="relative pt-3 bg-white">
                  <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4 font-bold">
                    Rogue HG 2.0 Bumper Plates
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900">
                      {" "}
                      $24.00 USD{" "}
                    </span>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <div className="flex justify-center">
        <a
          className="group relative inline-block text-sm font-medium text-secoundary focus:outline-none focus:ring active:text-primary"
          href="/download"
        >
          <span className="absolute inset-0 border border-current"></span>
          <span className="block border border-current bg-white px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 font-rajdhani font-bold text-xl">
            View All Products
          </span>
        </a>
      </div>
    </div>
  );
};

export default FeaturedProducts;
