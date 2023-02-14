import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.scss";

import { Box, Button, Typography } from "@mui/material";

import { slideContent } from "./sxMuiComponents/slideContentBox";
import { lightSlideTitle, darkSlideTitle } from "./sxMuiComponents/slideTitle";
import { lightSlideDescription, darkSlideDescription } from "./sxMuiComponents/slideDescription";
import { darkBackButton, lightBackButton } from "./sxMuiComponents/slideButton";

import { fetchSlides } from "../../store/reducers/slidesSlice";
import { selectSlidesData } from "../../store/selectors";

const Slider = () => {
	const dispatch = useDispatch();
	const slides = useSelector(selectSlidesData);

	useEffect(
		() => () => {
			dispatch(fetchSlides());
		},
		[],
	);

	console.log(slides);

	return (
		<Box sx={{ maxWidth: "1200px", margin: "0 auto" }}>
			<Swiper
				navigation={true}
				slidesPerView={1}
				loop={true}
				speed={600}
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				modules={[Navigation, Pagination]}
				className="mySwiper"
			>
				<SwiperSlide className="swiper-item">
					{/* <Box
						component="div"
						className="slide-box"
					> */}
					<img
						className="swiper-slide-img"
						style={{ width: "100%", height: "100%" }}
						src="https://res.cloudinary.com/dsx708og4/image/upload/v1676222627/Lori_project/Slide1_iPhone-14-pro-max_paqdb6.jpg"
					/>
					<Box component="div" className="slide-content" sx={slideContent}>
						<Typography
							variant="h3"
							fontWeight="fontWeightBold"
							sx={lightSlideTitle}
							className="slide-content-title"
						>
							iPhone 14 Pro Max
						</Typography>

						<Typography sx={lightSlideDescription} className="slide-content-descr">
							Не пропустіть нашу гарячу пропозицію!
						</Typography>

						<Button
							color="primary"
							variant="contained"
							sx={darkBackButton}
							className="slide-content-button"
						>
							Детальніше
						</Button>
					</Box>
					{/* </Box> */}
				</SwiperSlide>

				<SwiperSlide className="swiper-item">
					<Box component="div" className="slide-box">
						<img
							className="swiper-slide-img"
							style={{ width: "100%", height: "100%" }}
							src="https://res.cloudinary.com/dsx708og4/image/upload/v1676222653/Lori_project/Slide2_Samsung-s23-ultra_nlgwjf.jpg"
						/>
						<Box className="slide-content" sx={slideContent}>
							<Typography
								variant="h3"
								fontWeight="fontWeightBold"
								sx={lightSlideTitle}
								className="slide-ingo-title"
							>
								Samsung S23 Ultra
							</Typography>

							<Typography sx={lightSlideDescription} className="slide-info-descr">
								Не пропустіть нашу гарячу пропозицію!
							</Typography>

							<Button color="primary" variant="contained" sx={darkBackButton}>
								Детальніше
							</Button>
						</Box>
					</Box>
				</SwiperSlide>

				<SwiperSlide className="swiper-item">
					<Box component="div" className="slide-box">
						<img
							className="swiper-slide-img"
							style={{ width: "100%", height: "100%" }}
							src="https://res.cloudinary.com/dsx708og4/image/upload/v1676222787/Lori_project/slide3_Huawei-mate-50-series_whoidn.jpg"
						/>
						<Box className="slide-content" sx={slideContent}>
							<Typography
								variant="h3"
								fontWeight="fontWeightBold"
								sx={darkSlideTitle}
								className="slide-ingo-title"
							>
								Huawei Mate 50
							</Typography>

							<Typography sx={darkSlideDescription} className="slide-info-descr">
								Не пропустіть нашу гарячу пропозицію!
							</Typography>

							<Button color="secondary" variant="contained" sx={lightBackButton}>
								Детальніше
							</Button>
						</Box>
					</Box>
				</SwiperSlide>

				<SwiperSlide className="swiper-item">
					<Box component="div" className="slide-box">
						<img
							className="swiper-slide-img"
							style={{ width: "100%", height: "100%" }}
							src="https://res.cloudinary.com/dsx708og4/image/upload/v1676223534/Lori_project/Slide4_Xiaomi-11-lite_d23daa.jpg"
						/>
						<Box className="slide-content" sx={slideContent}>
							<Typography
								variant="h3"
								fontWeight="fontWeightBold"
								sx={darkSlideTitle}
								className="slide-ingo-title"
							>
								Xiaomi 11 Lite
							</Typography>

							<Typography sx={darkSlideDescription} className="slide-info-descr">
								Не пропустіть нашу гарячу пропозицію!
							</Typography>

							<Button color="secondary" variant="contained" sx={lightBackButton}>
								Детальніше
							</Button>
						</Box>
					</Box>
				</SwiperSlide>
			</Swiper>
		</Box>
	);
};

export default Slider;
