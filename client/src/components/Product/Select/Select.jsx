// import * as React from "react";
// import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
// import FormControl from "@mui/material/FormControl";
// import { MenuItem } from "@mui/material";
// import Select, { SelectChangeEvent } from "@mui/material/Select";

// export default function Selection() {
// 	const [color, setColor] = React.useState("");

// 	const handleChange = (event) => {
// 		debugger;
// 		setColor(event.target.value);
// 	};
// 	return (
// 		<div>
// 			<FormControl sx={{ width: "200px", color: "blue" }}>
// 				<InputLabel color="secondary" id="demo-simple-select-autowidth-label">
// 					Оберіть колір
// 				</InputLabel>
// 				<Select
// 					labelId="demo-simple-select-autowidth-label"
// 					id="demo-simple-select-autowidth"
// 					value={color}
// 					autoWidth
// 					label="Оберіть колір"
// 					color="secondary"
// 					onChange={handleChange}
// 				>
// 					<MenuItem value={10} sx={{ width: "200px" }}>
// 						Red
// 					</MenuItem>
// 					<MenuItem value={21} sx={{ width: "200px" }}>
// 						White
// 					</MenuItem>
// 					<MenuItem value={22} sx={{ width: "200px" }}>
// 						Black
// 					</MenuItem>
// 				</Select>
// 			</FormControl>
// 		</div>
// 	);
// }
