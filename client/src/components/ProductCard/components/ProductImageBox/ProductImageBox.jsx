import React from "react";
import { Link } from "react-router-dom";
import "./ProductImageBox.scss";
import ProductFlag from "../ProductFlag";

const ProductImageBox = ({ sale, image, brand, newItem, id }) => {
	return (
		<Link style={{ textDecoration: "none" }} className="logo__box" to={`/products/${id}`}>
			<ProductFlag sale={sale} newItem={newItem} />
			<img className="logo" src={image} alt={brand} />
		</Link>
	);
};

export default ProductImageBox;
