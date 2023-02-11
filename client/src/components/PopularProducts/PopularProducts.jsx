import React from "react";
import CategoryTitle from "../CategoryTitle";
import ProductCard from "../ProductCard";

const PopularProducts = () => {
	return (
		<div>
			<CategoryTitle text="Популярні товари" />
			<div
				className="cards__container"
				style={{
					gap: "24px",
					padding: "2% 1% 6% 1%",
					display: "grid",
					gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
				}}
			>
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</div>
		</div>
	);
};

export default PopularProducts;
