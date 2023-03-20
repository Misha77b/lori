import TextField from "@mui/material/TextField";

export default function PointPrices({ minPrice, maxPrice }) {
	const nameLabel = ["Мінімальна ціна", "Максимальна ціна"];
	const arr = [minPrice, maxPrice];
	const point = arr.map((el, ind) => (
		<TextField
			key={ind}
			id="standard-basic"
			variant="standard"
			label={nameLabel[ind]}
			value={el}
			disabled
			sx={{
				width: 120,
				height: 67,
				margin: 0,
				"& .css-1x51dt5-MuiInputBase-input-MuiInput-input.Mui-disabled": {
					padding: "25 0 0 0",
					color: "#2e7d32",
					"-webkit-text-fill-color": "#2e7d32",
				},
			}}
			color="secondary"
		/>
	));
	return point;
}
