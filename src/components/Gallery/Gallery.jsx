import React from "react";
import photo1 from "../../assets/gallery/photo 1.png";
import photo2 from "../../assets/gallery/photo 2.png";
import photo3 from "../../assets/gallery/photo 3.png";
import photo4 from "../../assets/gallery/photo 4.png";
import photo5 from "../../assets/gallery/photo 5.png";

const Gallery = () => {
  return (
    <div className="bg-primary">
      <section>
        <div class="max-w-screen-2xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8  mt-10 font-rajdhani">
          <header class="text-center">
            <h2 className="font-homemade_apple text-secoundary text-xl">
              gallery
            </h2>
            <h2 class="text-4xl font-extrabold text-[#FBECEB]">INSTAGRAM</h2>

            <p class="max-w-md mx-auto mt-4 text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>
          </header>

          <ul class="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-5">
            <li>
              <a href="#" class="block overflow-hidden group">
                <img
                  src={photo1}
                  alt=""
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
              </a>
            </li>

            <li>
              <a href="#" class="block overflow-hidden group">
                <img
                  src={photo2}
                  alt=""
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
              </a>
            </li>

            <li>
              <a href="#" class="block overflow-hidden group">
                <img
                  src={photo3}
                  alt=""
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
              </a>
            </li>

            <li>
              <a href="#" class="block overflow-hidden group">
                <img
                  src={photo4}
                  alt=""
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
              </a>
            </li>
            <li>
              <a href="#" class="block overflow-hidden group">
                <img
                  src={photo5}
                  alt=""
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
