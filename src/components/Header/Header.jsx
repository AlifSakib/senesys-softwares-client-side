import hero from "../../assets/hero.jpg";
const Header = () => {
  return (
    <div className="relative h-screen">
      <img
        src={hero}
        className="absolute inset-0 object-cover w-full h-screen"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-75 h-screen">
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  h-screen">
          <div className="flex flex-col justify-center items-center text-center h-screen">
            <h2 className="text-8xl font-rajdhani font-extrabold text-white leading-[122.6px]">
              Sports Clothing & <br /> Fitness Equipment <br /> Shopify Theme
            </h2>
            <button className=" dark:bg-white dark:text-gray-800 bg-blue-800 py-4   text-white mt-8 flex justify-center items-center  focus:outline-none focus:ring-2 focus:ring-offset-2 font-rajdhani px-10 text-2xl font-bold focus:ring-gray-800 hover:bg-gray-700">
              VIEW SHOP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
