// import "./RatingStar.scss";
// import ColouredStar from "../../assets/img/colouredStar.png";
// import NotColouredStar from "../../assets/img/NotColouredStar.png";
// const RatingStar = ({ rating, limit = 5 }) => {
// 	const active = ColouredStar;
// 	const passive = NotColouredStar;
// 	const mapper = Array.from(new Array(limit), (_, index) => {
// 		if (index + 1 <= Number(rating))
// 			return <img className={"star"} key={index} src={active} alt="color" />;
// 		return <img className={"star"} key={index} src={passive} alt="color" />;
// 	});
// 	return <div className={"star__container"}>{mapper}</div>;
// };
// export default RatingStar;
