export const slideTextContentStyle = {
	position: "absolute",
	maxWidth: "290px",
	height: "100%",
	// display: "flex",
	// flexDirection: "column",
	// alignItems: "flex-start",
	left: "15%",
	top: "14%",
	"@media (max-width: 1024px)": {
		// left: "140px",
		// top: "40px",
	},
	"@media (max-width: 900px)": {
		maxWidth: "250px",
		// maxWidth: "220px",
		// left: "10%",
		// top: "10%",
		// left: "100px",
		// top: "30px",
	},
	"@media (max-width: 700px)": {
		maxWidth: "200px",
		// left: "70px",
		// top: "20px",
	},
	"@media (max-width: 480px)": {
		width: "170px",
		left: "8%",
	},
};

export const lightSlideTitle = {
	color: "#FFF",
	"@media (max-width: 900px)": {
		fontSize: "34px",
	},
	"@media (max-width: 700px)": {
		fontSize: "26px",
	},
	"@media (max-width: 560px)": {
		fontSize: "16px",
	},
};
export const darkSlideTitle = {
	color: "#000",
	"@media (max-width: 900px)": {
		fontSize: "34px",
	},
	"@media (max-width: 700px)": {
		fontSize: "26px",
	},
	"@media (max-width: 480px)": {
		fontSize: "16px",
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
	"@media (max-width: 700px)": {
		fontSize: "20px",
	},
	"@media (max-width: 480px)": {
		fontSize: "16px",
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
	"@media (max-width: 700px)": {
		fontSize: "20px",
	},
	"@media (max-width: 480px)": {
		fontSize: "16px",
	},
};

export const darkBackButton = {
	width: "172px",
	height: "44px",
	background: "#FFF",
	"@media (max-width: 700px)": {
		width: "140px",
		height: "25px",
		padding: "15px 20px ",
	},
	"@media (max-width: 480px)": {
		width: "100px",
		fontSize: "12px",
	},
};

export const lightBackButton = {
	width: "172px",
	height: "44px",
	background: "#007042",
	"@media (max-width: 700px)": {
		width: "140px",
		height: "25px",
	},
	"@media (max-width: 480px)": {
		width: "100px",
		fontSize: "12px",
	},
};
