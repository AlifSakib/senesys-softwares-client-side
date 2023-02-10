import product1 from "../../assets/products/product 1.png";
import product2 from "../../assets/products/product 2.png";
import product3 from "../../assets/products/product 3.png";
import product4 from "../../assets/products/product 4.png";

const FeaturedProducts = () => {
  return (
    <div>
      <section>
        <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 font-rajdhani">
          <header class="text-center">
            <h3 className="font-homemade_apple text-secoundary font-bold">
              Whats New
            </h3>
            <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
              Shop The Latest
            </h2>

            <p class="max-w-md mx-auto mt-4 text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>
          </header>

          <ul class="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
            <li>
              <a href="#" class="block overflow-hidden group">
                <img
                  src={product1}
                  alt=""
                  class=" w-full h-full transition duration-500 group-hover:scale-105"
                />

                <div class="relative pt-3 bg-white">
                  <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    The Ohio Bar - Cerakote
                  </h3>

                  <p class="mt-2">
                    <span class="sr-only"> Regular Price </span>

                    <span class="tracking-wider text-gray-900">
                      {" "}
                      £24.00 GBP{" "}
                    </span>
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a href="#" class="block overflow-hidden group">
                <img
                  src={product2}
                  alt=""
                  class=" w-full h-full transition duration-500 group-hover:scale-105"
                />

                <div class="relative pt-3 bg-white">
                  <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Rogue Adjustable Bench 3.0
                  </h3>

                  <p class="mt-2">
                    <span class="sr-only"> Regular Price </span>

                    <span class="tracking-wider text-gray-900">
                      {" "}
                      £24.00 GBP{" "}
                    </span>
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a href="#" class="block overflow-hidden group">
                <img
                  src={product3}
                  alt=""
                  class=" w-full h-full transition duration-500 group-hover:scale-105"
                />

                <div class="relative pt-3 bg-white">
                  <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Rogue USA Nylon Lifting Belt
                  </h3>

                  <p class="mt-2">
                    <span class="sr-only"> Regular Price </span>

                    <span class="tracking-wider text-gray-900">
                      {" "}
                      £24.00 GBP{" "}
                    </span>
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a href="#" class="block overflow-hidden group">
                <img
                  src={product4}
                  alt=""
                  class=" w-full h-full transition duration-500 group-hover:scale-105"
                />

                <div class="relative pt-3 bg-white">
                  <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Rogue HG 2.0 Bumper Plates
                  </h3>

                  <p class="mt-2">
                    <span class="sr-only"> Regular Price </span>

                    <span class="tracking-wider text-gray-900">
                      {" "}
                      £24.00 GBP{" "}
                    </span>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default FeaturedProducts;