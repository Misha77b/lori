import React from "react";
import ProductImageBox from "./components/ProductImageBox";
import ProductDescription from "./components/ProductDescription";
import ProductPrice from "../ProductPrice";
import ProductFlag from "./components/ProductFlag";

const ProductCard = ({ flagStatus }) => {
	return (
		<div
			className="card__wrapper"
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "25px",
				padding: "0.5%",
				position: "relative",
			}}
		>
			<ProductFlag flagStatus={flagStatus} />
			<ProductImageBox />
			<ProductDescription />
			<ProductPrice />
		</div>
	);
};

export default ProductCard;
