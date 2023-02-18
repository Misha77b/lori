import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { deleteCardIdFromStore, setLocalItem } from "../../helpers/utils";

const FavoriteHeartIcon = ({ id, product }) => {
	const [liked, setLiked] = useState(false);
	const likeUpdateHandler = () => {
		setLiked((prev) => !prev);
	};
	const addToFavoritesHandler = () => {
		// eslint-disable-next-line no-unused-expressions
		!liked ? setLocalItem("favorites", id) : deleteCardIdFromStore(id, "favorites");
	};
	return (
		<FavoriteIcon
			onClick={() => {
				likeUpdateHandler();
				addToFavoritesHandler();
			}}
			color={liked ? "error" : "main"}
			sx={
				product
					? {
							position: "absolute",
							right: "0",
							fontSize: "50px",
							cursor: "pointer",
							// eslint-disable-next-line no-mixed-spaces-and-tabs
					  }
					: { position: "absolute", cursor: "pointer", fontSize: "40px" }
			}
		/>
	);
};
export default FavoriteHeartIcon;
