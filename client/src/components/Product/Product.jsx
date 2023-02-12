import { Box, Typography } from "@mui/material";
import "./Product.scss";

function Product() {
	return (
		<Box>
			<Typography>Modile example</Typography>
			<div className="block">
				<div className="block__imgs">
					<div className="block__imgs--small">
						<div className="block__imgs--img">img1</div>
						<div className="block__imgs--img">img2</div>
						<div className="block__imgs--img">img3</div>
						<div className="block__imgs--img">img4</div>
					</div>

					<div className="block__product">Product</div>
				</div>
				<div className="block__description">characteristics</div>
			</div>
			<div>characteristics_2</div>
		</Box>
	);
}
export default Product;
