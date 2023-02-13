import React from "react";
import "./ProductFlag.scss";

const ProductFlag = ({ saleStatus, newItem }) => {
	const [orange, red] = ["#e4a11e", "#e03737"];
	const text = ["sale", "new item"];
	return (
		<div className="ribbon ribbon-top-right">
			<span>{saleStatus ? text[0] : text[1]}</span>
		</div>
	);
};

export default ProductFlag;
