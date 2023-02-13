import React from "react";
import "./ProductImageBox.scss";
import ProductFlag from "../ProductFlag";

const ProductImageBox = ({ saleStatus, image, brand, newItem }) => {
	return (
		<div className="logo__box">
			<ProductFlag saleStatus={saleStatus} newItem={newItem} />
			<img className="logo" src={image} alt={brand} />
		</div>
	);
};

export default ProductImageBox;
