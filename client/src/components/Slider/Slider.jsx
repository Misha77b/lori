import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box } from "@mui/material";
import "./Slider.scss";

const Slider = () => {
	return (
		<Box sx={{ maxWidth: "1200px", margin: "0 auto" }}>
			<Swiper
				navigation={true}
				slidesPerView={1}
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				modules={[Navigation, Pagination]}
				className="mySwiper"
			>
				<SwiperSlide className="swiper-item">
					<img
						className="swiper-slide-img"
						style={{ width: "100%", height: "100%" }}
						src="https://res.cloudinary.com/dsx708og4/image/upload/v1676222627/Lori_project/Slide1_iPhone-14-pro-max_paqdb6.jpg"
					/>
				</SwiperSlide>
				<SwiperSlide className="swiper-item">
					<img
						className="swiper-slide-img"
						style={{ width: "100%", height: "100%" }}
						src="https://res.cloudinary.com/dsx708og4/image/upload/v1676222653/Lori_project/Slide2_Samsung-s23-ultra_nlgwjf.jpg"
					/>
				</SwiperSlide>
				<SwiperSlide className="swiper-item">
					<img
						className="swiper-slide-img"
						style={{ width: "100%", height: "100%" }}
						src="https://res.cloudinary.com/dsx708og4/image/upload/v1676222787/Lori_project/slide3_Huawei-mate-50-series_whoidn.jpg"
					/>
				</SwiperSlide>
				<SwiperSlide className="swiper-item">
					<img
						className="swiper-slide-img"
						style={{ width: "100%", height: "100%" }}
						src="https://res.cloudinary.com/dsx708og4/image/upload/v1676223534/Lori_project/Slide4_Xiaomi-11-lite_d23daa.jpg"
					/>
				</SwiperSlide>
			</Swiper>
		</Box>
	);
};

export default Slider;
