import React from "react";
import PropTypes from "prop-types";
import { Box, Slider } from "@mui/material";

function RangeSlider({ setPriceParams, min, max }) {
	const handleChangeCommitted = (event, newValue) => {
		setPriceParams(newValue[0], newValue[1]);
	};
	return (
		<Box sx={{ width: 250, margin: 0 }}>
			<Slider
				sx={{
					margin: 0,
					"& .css-14pt78w-MuiSlider-rail": { margin: 0 },
					"& .css-ouckof-MuiSlider-valueLabel": { backgroundColor: "#2e7d32", padding: "3px" },
					"& .MuiSlider-valueLabelLabel": {
						left: "calc(-50% + 4px)",
						padding: 0,
						margin: 0,
						color: "#ffffff",
					},
				}}
				color="secondary"
				getAriaLabel={() => "Ціна"}
				value={[min, max]}
				onChangeCommitted={handleChangeCommitted}
				valueLabelDisplay="auto"
				min={min}
				max={max}
			/>
		</Box>
	);
}
RangeSlider.propTypes = {
	setPriceParams: PropTypes.func.isRequired,
};
export default RangeSlider;
