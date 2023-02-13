export const slideTextContentStyle = {
	position: "absolute",
	maxWidth: "350px",
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	left: "170px",
	top: "70px",
	"@media (max-width: 1024px)": {
		left: "140px",
		top: "40px",
	},
	"@media (max-width: 900px)": {
		maxWidth: "250px",
		left: "100px",
		top: "30px",
	},
};

export const lightSlideTitle = {
	color: "#FFF",
	"@media (max-width: 900px)": {
		fontSize: "34px",
	},
};
export const darkSlideTitle = {
	color: "#000",
	"@media (max-width: 900px)": {
		fontSize: "34px",
	},
};

export const lightSlideDescription = {
	padding: "20px 0",
	fontSize: "30px",
	color: "#FFF",
	"@media (max-width: 1024px)": {
		padding: "15px 0",
	},
	"@media (max-width: 900px)": {
		padding: "10px 0",
		fontSize: "24px",
	},
};
export const darkSlideDescription = {
	padding: "20px 0",
	fontSize: "30px",
	color: "#000",
	"@media (max-width: 1024px)": {
		padding: "15px 0",
	},
	"@media (max-width: 900px)": {
		padding: "10px 0",
		fontSize: "24px",
	},
};

export const darkBackButton = {
	width: "172px",
	height: "44px",
	background: "#FFF",
};

export const lightBackButton = {
	width: "172px",
	height: "44px",
	background: "#007042",
};
