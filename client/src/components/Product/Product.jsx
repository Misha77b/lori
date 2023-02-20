import { Box, Typography, Stack, Button, Container } from "@mui/material";
import Rating from "@mui/material/Rating";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ProductPrice from "../ProductPrice/ProductPrice";
import Description from "./Description";
import Amount from "./Amount";
import Selection from "./Select";
import "./Product.scss";
import { DOMAIN } from "../../config/API";
import ToCartButton from "../ToCartButton";

function Product({ props }) {
	const { currentPrice, imageUrls, name, rating, color } = props;
	const [mainPhoto, setMainPhoto] = useState();
	const history = useNavigate();
	/* 	const myRef = useRef(); */
	let difColor = "";
	const handlerMoving = (ev) => {
		// setMainPhoto(myRef.current.src); ref={myRef}
		setMainPhoto(ev.target.src);
	};
	useEffect(() => {
		setMainPhoto(imageUrls[0]);
	}, [imageUrls]);
	const images = imageUrls?.map((item, index) => (
		<div key={index} className="block__imgs--img">
			<img src={item} onClick={handlerMoving} />
		</div>
	));

	async function fetchChoiceColor(params) {
		const response = await fetch(`${DOMAIN}/products/filter?${params.toString()}`);
		const data = await response.json();
		if (data.products.length) {
			const { itemNo } = data.products[0];
			history(`/products/${itemNo}`);
		}
	}

	const setCurrentColor = (CurrentColor) => {
		difColor = CurrentColor;

		const params = new URLSearchParams();
		params.append("name", name);
		params.append("color", difColor);
		fetchChoiceColor(params);
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
						<Stack spacing={4}>
							<ProductPrice currentPrice={currentPrice} />
							<Typography
								variant="h3"
								fontWeight="fontWeightBold"
								sx={{ fontSize: "30px" }}
								gutterBottom
							>
								{name}
								<span>{color}</span>
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

							<Button
								color="secondary"
								variant="contained"
								sx={{
									width: "245px",
									height: "46px",
								}}
							>
								У кошик
								<ShoppingCartCheckoutIcon sx={{ marginLeft: "10px" }} />
							</Button>
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
