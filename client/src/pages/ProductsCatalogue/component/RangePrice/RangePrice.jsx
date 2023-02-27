import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
	return `${value}`;
}

export default function RangeSlider() {
	const [value, setValue] = React.useState([2000, 20000]);

	const handleChange = (event, newValue = []) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: 250, margin: 0, color: "red" }}>
			<Slider
				sx={{
					margin: 0,
					"& .css-14pt78w-MuiSlider-rail": { margin: 0 },
					"& .css-ouckof-MuiSlider-valueLabel": { backgroundColor: "rgba(0,112,66,0.3)" },
					"& .MuiSlider-valueLabelLabel": {
						left: "calc(-50% + 4px)",
						padding: 0,
						margin: 0, // прибираємо margin
						color: "#000000",
					},
				}}
				color="secondary"
				getAriaLabel={() => "Ціна"}
				value={value}
				onChange={handleChange}
				valueLabelDisplay="auto"
				min={0}
				max={60000}
				step={500}
				getAriaValueText={valuetext}
			/>
		</Box>
	);
}
