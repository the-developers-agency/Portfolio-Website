"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialSlider() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded && (
        <Slider {...settings}>
          {[...Array(4)]?.map((_, i) => (
            <div>
              <div className="relative pb-[50px]">
                <div className="absolute left-[0px] top-[0px]">
                  <svg
                    width="38"
                    height="42"
                    viewBox="0 0 38 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.3 -3.8147e-06L8.9 21.2H13.7V41.8H0.300001V21.2L5.3 -3.8147e-06H12.3ZM36.5 -3.8147e-06L33.1 21.2H37.9V41.8H24.5V21.2L29.5 -3.8147e-06H36.5Z"
                      fill="#C7C7C7"
                    />
                  </svg>
                </div>
                <div className="px-[80px] pt-[50px]">
                  <p className="text-center text-[#949494] text-xl font-Sen font-[300]">
                    Rapid Innovation has demonstrated an end-user goal
                    commitment to deliver that is rare in the Software
                    Development industry. They have a rich understanding of
                    technology, blockchain, and interaction development. The
                    options presented whenever we discovered challenges were
                    consistently reasonable, and appropriate for the resources,
                    timelines, and goals. I personally count Jesse and his team
                    among fewer than 7 individuals in my 25-year career that I
                    would dream of having on my own dream-team.
                  </p>

                  <div className="text-center mt-[50px]">
                    <h6 className="font-bold font-Sen text-transparent align-middle  bg-clip-text bg-gradient-to-b from-[#956B00] to-[#FFDA58] text-xl">
                      Chuck Williams
                    </h6>
                    <p className="mt-[20px] text-gray-300">
                      TECHNICAL ARCHITECT AT AGILETHOUGHT
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </>
  );
}
