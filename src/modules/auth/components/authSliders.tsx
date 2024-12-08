import onboarding1 from "@/assets/images/onboarding-1.png";
import onboarding2 from "@/assets/images/onboarding-2.png";
import FixedButton from "@/components/ui/button/FixedButton";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { MutableRefObject } from "react";
import { Swiper as SwiperType } from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const customStyles = `
  .swiper-pagination {
    position: absolute;
    top: 50px !important;
    left: 150px !important;
    pointer-events: none; 

  }

  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    opacity: 1;
    transition: all 0.3s ease;
    margin: 0 4px !important;
  }

  .swiper-pagination-bullet-active {
    width: 20px;
    height: 8px;
    background: white;
    border-radius: 4px;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
  }


`;

const AuthSliders = ({
  onOpen,
  swiperRef,
  isOpen,
}: {
  onOpen: () => void;
  swiperRef: MutableRefObject<SwiperType | null>;
  isOpen: boolean;
}) => {
  const handleModalOpen = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay?.stop();
    }
    onOpen();

    setTimeout(() => {
      const inputElement: any = document.querySelector(
        'input[name="phoneNumber"]'
      );
      if (inputElement) {
        inputElement?.focus();
      }
    }, 0);
  };

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          height: "100dvh",
          width: "100%",
          maxWidth: "460px",
          backgroundColor: "black",
        }}
      >
        <style>{customStyles}</style>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
          }}
          slidesPerView={1}
          dir="ltr"
          loop={true}
          allowTouchMove={true}
          autoplay={
            !isOpen
              ? {
                  delay: 4000,
                }
              : false
          }
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          <SwiperSlide>
            <Box
              sx={{
                position: "relative",
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: 0,
              }}
            >
              <Image
                src={onboarding1}
                alt="Plant"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
              <Box
                display="flex"
                flexDirection="column"
                bottom={100}
                px="16px"
                position="absolute"
              >
                <Typography variant="h2Bold" color="white">
                  پاداش, آخرین مقصد سرمایه گذاری شماست
                </Typography>
                <Typography mt="4px" color="white" variant="subH2Regular">
                  یک مقصد کامل برای تمامی نیازهای مالی شما
                </Typography>

                <FixedButton
                  sx={{ mt: "40px" }}
                  fullWidth
                  onClick={handleModalOpen}
                >
                  ورود
                </FixedButton>
              </Box>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box
              sx={{
                position: "relative",
                height: "100dvh",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: 0,
              }}
            >
              <Image
                src={onboarding2}
                alt="Plant"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
              <Box
                display="flex"
                flexDirection="column"
                bottom={100}
                px="16px"
                position="absolute"
              >
                <Typography variant="h2Bold" color="white">
                  پاداش, آخرین مقصد سرمایه گذاری شماست
                </Typography>
                <Typography mt="4px" color="white" variant="subH2Regular">
                  یک مقصد کامل برای تمامی نیازهای مالی شما
                </Typography>
                <FixedButton
                  sx={{ mt: "40px" }}
                  fullWidth
                  onClick={handleModalOpen}
                >
                  ورود
                </FixedButton>
              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
};
export default AuthSliders;
