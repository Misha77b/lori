import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button, Container, Box } from "@mui/material";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import CategoryTitle from "../CategoryTitle";
import ProductCard from "../ProductCard";

import "./styles.scss";
import { swiperBreakpoints } from "./swiperBreakpoints/swiperBreakpoints";

const PopularProducts = ({ products, advertisement = false, authFav }) => {
	return (
		<Container>
			<Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
				{!advertisement && <CategoryTitle text="Популярні товари" />}
				{advertisement && <CategoryTitle text="Ви також можете розглянути товари на знижкі" />}
				{!advertisement && (
					<Link style={{ textDecoration: "none" }} to="/products">
						<Button color="secondary" variant="contained">
							Усі товари
						</Button>
					</Link>
				)}
			</Box>
			<Swiper
				spaceBetween={50}
				navigation={true}
				pagination={{
					clickable: true,
				}}
				modules={[Navigation, Pagination]}
				className="productsSwiper"
				breakpoints={swiperBreakpoints}
			>
				{products?.map((card, index) => {
					if (!advertisement) {
						return (
							card.popular && (
								<SwiperSlide key={index} className="popularProducts-swiperSlide">
									<ProductCard key={index} card={card} withCart={false} />
								</SwiperSlide>
							)
						);
					}
					return (
						card.sale && (
							<SwiperSlide key={index} className="popularProducts-swiperSlide">
								<ProductCard key={index} card={card} withCart={false} />
							</SwiperSlide>
						)
					);
				})}
			</Swiper>
		</Container>
	);
};
PopularProducts.defaultProps = {
	advertisement: false,
};
PopularProducts.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	products: PropTypes.array.isRequired,
	advertisement: PropTypes.bool,
};
export default PopularProducts;
