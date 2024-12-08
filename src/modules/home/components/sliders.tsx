import "swiper/css";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import homepageBanner1 from "@/assets/images/homepage-banner1.png";
import { Box } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const SliderHomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    { id: 1, image: homepageBanner1 },
    { id: 2, image: homepageBanner1 },
    { id: 3, image: homepageBanner1 },
    { id: 4, image: homepageBanner1 },
  ];
  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      spaceBetween={15}
      slidesPerView={"auto"}
      initialSlide={1}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 80,
        modifier: 1,
        slideShadows: false,
      }}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      modules={[EffectCoverflow, Autoplay]}
      style={{ width: "100%", paddingTop: "20px", paddingBottom: "20px" }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide
          key={slide.id}
          style={{
            width: "50%",
            transition: "all 0.3s",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: "15px",
              overflow: "hidden",
              filter: activeIndex === index ? "none" : "blur(0.1px)",
              opacity: activeIndex === index ? 1 : 0.8,
              transition: "filter 0.3s, opacity 0.3s",
            }}
          >
            <Image
              src={slide.image}
              alt={`slide-${index}`}
              layout="responsive"
              width={1200}
              height={600}
              objectFit="cover"
              priority={activeIndex === index}
            />
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default SliderHomePage;
