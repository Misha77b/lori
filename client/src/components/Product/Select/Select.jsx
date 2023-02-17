import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function Selection({ allColors, setCurrentColor }) {
	const [color, setColor] = React.useState("");
	const colorsTag = allColors?.map((el) => (
		<MenuItem key={el} value={el} sx={{ width: "200px" }}>
			{el}
		</MenuItem>
	));
	const handleChange = (event) => {
		setColor(event.target.value);
		setCurrentColor(event.target.value);
	};
	return (
		<div>
			<FormControl sx={{ width: "200px" }}>
				<InputLabel color="secondary" id="demo-simple-select-autowidth-label">
					Оберіть колір
				</InputLabel>
				<Select
					labelId="demo-simple-select-autowidth-label"
					id="demo-simple-select-autowidth"
					value={color}
					autoWidth
					label="Оберіть колір"
					color="secondary"
					onChange={handleChange}
				>
					{colorsTag}
				</Select>
			</FormControl>
		</div>
	);
}
