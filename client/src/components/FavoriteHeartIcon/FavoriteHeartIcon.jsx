import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorite } from "../../store/selectors";
import { removeItemFavorite, setFavorite } from "../../store/reducers/favoriteSlice";

const FavoriteHeartIcon = ({ id, product }) => {
	const dispatch = useDispatch();
	const favorites = useSelector(selectFavorite);
	const [liked, setLiked] = useState(false);
	const likeUpdateHandler = () => {
		if (liked) {
			dispatch(removeItemFavorite(id));
			setLiked(false);
		} else {
			dispatch(setFavorite(id));
			setLiked(true);
		}
	};

	useEffect(() => {
		setLiked(favorites.some((el) => el === id));
	});
	return (
		<FavoriteIcon
			onClick={() => {
				likeUpdateHandler();
			}}
			color={liked ? "error" : "mediumgrey"}
			sx={{ position: "absolute", cursor: "pointer", fontSize: "40px" }}
		/>
	);
};
FavoriteIcon.propTypes = {
	id: PropTypes.string,
};
export default FavoriteHeartIcon;
