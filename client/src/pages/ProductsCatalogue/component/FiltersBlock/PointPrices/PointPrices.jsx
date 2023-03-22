import TextField from "@mui/material/TextField";
import { InputLabel, Box } from "@mui/material";

export default function PointPrices({ minPrice, maxPrice }) {
	const nameLabel = ["Мінімальна ціна", "Максимальна ціна"];
	const arr = [minPrice, maxPrice];
	const point = arr.map((el, ind) => (
		<>
			<Box>
				<InputLabel sx={{ fontSize: "12px" }}>{nameLabel[ind]}</InputLabel>
				<TextField
					key={ind}
					id="filled-disabled"
					variant="standard"
					defaultValue="    "
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
			</Box>
		</>
	));
	return <Box sx={{ display: "flex", gap: "10px", height: "70px" }}>{point}</Box>;
}
