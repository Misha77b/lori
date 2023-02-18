import { Box, Typography, Stack, Container } from "@mui/material";
import Rating from "@mui/material/Rating";
import React, { useEffect, useState, useRef } from "react";
import ProductPrice from "../ProductPrice/ProductPrice";
import Description from "./Description";
import Amount from "./Amount";
import Selection from "./Select";
import "./Product.scss";
import ToCartButton from "../ToCartButton";
import FavoriteHeartIcon from "../FavoriteHeartIcon";

function Product({ props }) {
	const { currentPrice, imageUrls, name, rating, itemNo: id } = props;
	const [mainPhoto, setMainPhoto] = useState();
	const myRef = useRef();
	let color = "";
	const handlerMoving = (ev) => {
		// setMainPhoto(myRef.current.src);
		setMainPhoto(ev.target.src);
	};
	useEffect(() => {
		setMainPhoto(imageUrls[0]);
	}, [imageUrls]);
	const images = imageUrls?.map((item, index) => (
		<div key={index} className="block__imgs--img">
			<img src={item} ref={myRef} onClick={handlerMoving} />
		</div>
	));
	const setCurrentColor = (CurrentColor) => {
		color = CurrentColor;
	};
	return (
		<Container>
			<Box>
				<div className="block">
					<div className="block__imgs">
						<div className="block__imgs--small">{images}</div>
						<div className="block__product">
							<img id="product" src={mainPhoto} alt="ed" title="ed" />
						</div>
					</div>
					<div className="block__description">
						<FavoriteHeartIcon id={id} product={true} />
						<Stack spacing={4}>
							<ProductPrice currentPrice={currentPrice} />
							<Typography
								variant="h3"
								fontWeight="fontWeightBold"
								sx={{ fontSize: "30px" }}
								gutterBottom
							>
								{name}
							</Typography>
							<Box
								sx={{
									"& > legend": { mt: 2 },
								}}
							>
								<Typography component="legend">Рейтинг</Typography>
								<Rating name="read-only" value={rating} readOnly />
							</Box>
							<Amount />
							<Selection allColors={props.allColors} setCurrentColor={setCurrentColor} />
							<ToCartButton id={id} />
						</Stack>
					</div>
				</div>
				<Typography variant="h5" gutterBottom sx={{ marginTop: "40px" }}>
					Характеристика товару:
				</Typography>
				<Description props={props} />
			</Box>
		</Container>
	);
}
export default Product;
