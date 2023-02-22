import { Button, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";
import "../PopularBrands.scss";

const paragraph = {
	margin: "0",
	fontSize: "16px",
	position: "relative",
	"z-index": 1,
};
const heading = {
	margin: "0",
	fontSize: "30px",
	position: "relative",
	"z-index": 1,
	color: "#fff",
};
const button = {
	cursor: "pointer",
	width: "134px",
	height: "38px",
	"&:hover": {
		color: "#FFFF",
		backgroundColor: "#007042",
	},
};

const GridItem = ({ products }) => {
	const brandsBlock = [];
	const brands = new Map();

	function createMapBrandPhones(prod) {
		// {"Huawei" => Array(3)}, {"Samsung" => Array(14)}, {"Xiaomi" => Array(4)}
		prod?.forEach(({ brand, name }) => {
			if (!brands.has(brand)) {
				brands.set(brand, []);
			}
			brands.get(brand).push(name);
		});
	}
	createMapBrandPhones(products);
	brands.forEach((phones, name) => {
		const params = new URLSearchParams();
		params.append("brand", name);

		const phoneNames = phones.slice(0, 2).map((item, index) => <div key={index}>{item}</div>);

		brandsBlock.push(
			<>
				<Grid item xs={12} sm={12} md={6} key={name + 1}>
					<div className={`popular popular--${name}`}>
						<div className="popular--overlay">
							<div className="popular--text">
								<Stack spacing={4}>
									<Stack spacing={1}>
										<Typography
											variant="h4"
											fontWeight="fontWeightBold"
											sx={heading}
											className="typography"
											gutterBottom
										>
											{name}
										</Typography>
										<Typography
											variant="h5"
											fontWeight="fontWeightMedium"
											sx={paragraph}
											className="typography--p"
										>
											{phoneNames}
										</Typography>
									</Stack>
									<Link to={`/products/filter?${params.toString()}`} className="link">
										<Button color="primary" variant="contained" sx={button}>
											Детальніше
										</Button>
									</Link>
								</Stack>
							</div>
						</div>
					</div>
				</Grid>
			</>,
		);
	});

	return <>{brandsBlock}</>;
};
export default GridItem;
