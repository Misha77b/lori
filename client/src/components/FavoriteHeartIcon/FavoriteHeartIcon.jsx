import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { deleteCardIdFromStore } from "../../helpers/deleteCardIdFromStore";
import { setLocalItem } from "../../helpers/setLocalItem";
import { selectFavorite } from "../../store/selectors";
import { setFavorite } from "../../store/reducers/productsSlice";

const FavoriteHeartIcon = ({ id, product }) => {
	const dispatch = useDispatch();
	const [liked, setLiked] = useState(false);
	const likeUpdateHandler = () => {
		setLiked((prev) => !prev);
	};
	const addToFavoritesHandler = () => {
		// eslint-disable-next-line no-unused-expressions
		/* !liked ? setLocalItem("favorites", id) : deleteCardIdFromStore(id, "favorites"); */
		dispatch(setFavorite(id));
	};
	return (
		<FavoriteIcon
			onClick={() => {
				likeUpdateHandler();
				addToFavoritesHandler();
			}}
			color={liked ? "error" : "mediumgrey"}
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
