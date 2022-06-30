import React, { Fragment } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "./styles.css";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";
import { CardMedia } from "@mui/material";

interface CustomCarouselProps {
  images: Array<string>;
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({ images }) => {
  return (
    <Fragment>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
      >
        {images.map((image: string, index: number) => {
          return (
            <SwiperSlide key={index}>
              <CardMedia
                sx={{ aspectRatio: { xs: "1/1", sm: "16/9", md: "21/9" } }}
                component="img"
                loading="lazy"
                src={image}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Fragment>
  );
};
export default CustomCarousel;
