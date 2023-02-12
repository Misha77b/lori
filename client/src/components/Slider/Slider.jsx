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
		<Box sx={{ maxWidth: "1200px", maxHeight: "445px", margin: "0 auto" }}>
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
				<SwiperSlide>
					<img
						style={{ width: "100%", height: "100%" }}
						src="https://res.cloudinary.com/dsx708og4/image/upload/v1676212059/Lori_project/Slide1_iPhone-14-pro-max_ricall.png"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						style={{ width: "100%", height: "100%" }}
						src="https://res.cloudinary.com/dsx708og4/image/upload/v1676212071/Lori_project/Slide2_Samsung-s23-ultra_lgxfhu.png"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						style={{ width: "100%", height: "100%" }}
						src="https://res.cloudinary.com/dsx708og4/image/upload/v1676212138/Lori_project/Slide3_Huawei-mate-50-series_jweyvh.png"
					/>
				</SwiperSlide>
			</Swiper>
		</Box>
	);
};

export default Slider;
