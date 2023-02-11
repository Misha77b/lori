import React from "react";

const ProductPrice = ({ price, color }) => {
	return (
		<div
			className="price__wrapper"
			style={{
				fontFamily: "Montserrat, sans-serif",
				fontSize: "30px",
				fontWeight: "900",
				lineHeight: "29px",
				color: "#007042",
			}}
		>
			53 199 грн
		</div>
	);
};

export default ProductPrice;
