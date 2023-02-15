import { Box, Typography, Stack, Button, Container } from "@mui/material";
import Rating from "@mui/material/Rating";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useEffect, useState, React } from "react";
import ProductPrice from "../ProductPrice/ProductPrice";
import Description from "./Description";
import Amount from "./Amount";
import Selection from "./Select";
import "./Product.scss";
import ToCartButton from "../ToCartButton";

function Product({ props }) {
	const { currentPrice, imageUrls, name, rating } = props;
	let color = "";
	const [mainPhoto, setMainPhoto] = useState();

	const handerMoving = (ev) => {
		setMainPhoto(ev.target.src);
	};
	useEffect(() => {
		setMainPhoto(imageUrls[0]);
	}, [imageUrls]);
	const images = imageUrls?.map((item, index) => (
		<div className="block__imgs--img">
			<img src={item} key={index} onClick={handerMoving} />
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
