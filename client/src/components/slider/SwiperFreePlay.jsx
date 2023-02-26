import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "@mui/material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/modules/free-mode/free-mode.min.css';
import 'swiper/modules/navigation/navigation.scss';
import "swiper/css/navigation";
import slide1 from "../../assets/First.jpg";
// import slide1 from "../assests/slide1.jpg";
import slide2 from "../../assests/Second.jpg";
import slide3 from "../../assests/Third.jpg";
import slide4 from "../../assests/Forth.jpg";
import slide5 from "../../assests/Fifth.jpg";
import slide6 from "../../assests/Sixth.jpg";
// import slide7 from "../assests/slide7.jpg";
// import slide8 from "../assests/slide8.jpg";
// import slide9 from "../assests/slide9.jpg";
// import slide10 from "../assests/slide10.jpg";
// import slide11 from "../assests/slide11.jpg";
// import slide12 from "../assests/slide12.jpg";
// import slide13 from "../assests/slide13.jpg";
// import slide14 from "../assests/slide14.jpg";
// import slide15 from "../assests/slide15.jpg";
// import slide16 from "../assests/slide16.jpg";
// import slide17 from "../assests/slide17.jpg";

const data = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
];

export default function NewFile() {
  const matches = useMediaQuery("(max-width:700px)");
  return (
    <>
      <Swiper
        slidesPerView={matches ? 2 : 5}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {data.map((img, i) => {
          return (
            <SwiperSlide key={i}>
              <img
                src={img}
                alt=""
                width={matches ? "130px" : "250px"}
                height={matches ? "130px" : "250px"}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
