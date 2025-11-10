import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Box } from "@mui/material";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

import "swiper/css";
import "swiper/css/navigation";

function Carousel({ items, renderItem }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      
      <Box
        ref={prevRef}
        sx={{
          position: "absolute",
          top: "50%",
          left: "-50px",
          transform: "translateY(-50%)",
          zIndex: 10,
          cursor: "pointer",
          display: { xs: "none", sm: "block" },
        }}
      >
        <LeftArrow />
      </Box>

      
      <Box
        ref={nextRef}
        sx={{
          position: "absolute",
          top: "50%",
          right: "-50px",
          transform: "translateY(-50%)",
          zIndex: 10,
          cursor: "pointer",
          display: { xs: "none", sm: "block" },
        }}
      >
        <RightArrow />
      </Box>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={5}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        onSwiper={(swiper) => {
          
          setTimeout(() => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
      >
        {items.map((item, i) => (
          <SwiperSlide key={item.id || i}>{renderItem(item)}</SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default Carousel;
