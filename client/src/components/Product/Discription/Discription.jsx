import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import "./Discription.scss";

const Discription = () => {
	return (
		<Box sx={{ width: "400px", marginTop: "20px" }}>
			<Grid
				className="popular-block"
				container
				rowSpacing={{ xs: 1, sm: 1, md: 3 }}
				columnSpacing={{ xs: 3, sm: 3, md: 1, lg: 4 }}
			>
				<Grid item xs={4}>
					<p>Тип процесора</p>
				</Grid>
				<Grid item xs={8}>
					<p>Lorem ipsum dolor sit amet consectetur</p>
				</Grid>
				<Grid item xs={4}>
					<p>Памть:</p>
				</Grid>
				<Grid item xs={8}>
					<p>Lorem ipsum dolor sit amet s</p>
				</Grid>
				<Grid item xs={4}>
					<p>Батарея</p>
				</Grid>
				<Grid item xs={8}>
					<p>Lorem</p>
				</Grid>
				<Grid item xs={4}>
					<p>Камера</p>
				</Grid>
				<Grid item xs={8}>
					<p>Lorem ipsum dolor sit amet s</p>
				</Grid>
			</Grid>
		</Box>
	);
};
export default Discription;
