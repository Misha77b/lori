import { Box, Typography, Stack, Button } from "@mui/material";
import styled from "styled-components";
import Rating from "@mui/material/Rating";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import CategoryTitle from "../CategoryTitle";
import Discription from "./Discription";
import Selection from "./Select";
import "./Product.scss";

const Price = styled.div`
	font-family: Montserrat, sans-serif;
	font-size: 40px;
	font-weight: 900;
	line-height: 29px;
	color: #007042;
`;

function Product() {
	const handerMoving = (ev) => {
		const product = document.querySelector("#product");
		product.src = ev.target.src;
	};
	return (
		<Box>
			<CategoryTitle text="Modile example" />
			<div className="block">
				<div className="block__imgs">
					<div className="block__imgs--small">
						<div className="block__imgs--img">
							<img
								src="https://res.cloudinary.com/dsx708og4/image/fetch/v1676120727/https://res.cloudinary.com/dsx708og4/image/upload/v1676117985/Lori_project/iphone13ProBlue_iofhgk.webp"
								alt="ed"
								title="ed"
								onClick={handerMoving}
							/>
						</div>
						<div className="block__imgs--img">
							<img
								src="https://res.cloudinary.com/dsx708og4/image/fetch/v1676120726/https://res.cloudinary.com/dsx708og4/image/upload/v1676117985/Lori_project/iphone13Green_znqyz6.jpg"
								alt="ed"
								title="ed"
								onClick={handerMoving}
							/>
						</div>
						<div className="block__imgs--img">
							<img
								src="https://res.cloudinary.com/dsx708og4/image/fetch/v1676120726/https://res.cloudinary.com/dsx708og4/image/upload/v1676117985/Lori_project/iphone13red_dndirv.webp"
								alt="ed"
								title="ed"
								onClick={handerMoving}
							/>
						</div>
						<div className="block__imgs--img">
							<img
								src="https://res.cloudinary.com/dsx708og4/image/fetch/v1676120726/https://res.cloudinary.com/dsx708og4/image/upload/v1676117985/Lori_project/iphone14ProMax_ciicnu.jpg"
								alt="ed"
								title="ed"
								onClick={handerMoving}
							/>
						</div>
					</div>
					<div className="block__product">
						<img
							id="product"
							src="https://res.cloudinary.com/dsx708og4/image/fetch/v1676120727/https://res.cloudinary.com/dsx708og4/image/upload/v1676117985/Lori_project/iphone13ProBlue_iofhgk.webp"
							alt="ed"
							title="ed"
						/>
					</div>
				</div>
				<div className="block__description">
					<Stack spacing={4}>
						<Price>23 5677</Price>
						<Typography
							variant="h4"
							fontWeight="fontWeightBold"
							sx={{ fontSize: "40px" }}
							gutterBottom
						>
							Samsung G23
						</Typography>
						<Box
							sx={{
								"& > legend": { mt: 2 },
							}}
						>
							<Typography component="legend">Рейтинг</Typography>
							<Rating
								name="read-only"
								value={3}
								readOnly
							/>
						</Box>
						<Selection />
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
			<Typography
				variant="h5"
				gutterBottom
				sx={{ marginTop: "40px" }}
			>
				Характеристика товару:
			</Typography>
			<Discription />
		</Box>
	);
}
export default Product;