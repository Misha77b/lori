import React from "react";
import "./ProductImageBox.scss";
import ProductFlag from "../ProductFlag";

const ProductImageBox = ({ flagStatus }) => {
	return (
		<div className="logo__box">
			<ProductFlag flagStatus={flagStatus} />
			<img
				className="logo"
				src="https://res.cloudinary.com/dsx708og4/image/upload/v1676117985/Lori_project/iphone13Blue_a7i237.png"
				alt="iphone"
			/>
		</div>
	);
};

export default ProductImageBox;
