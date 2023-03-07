import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { DOMAIN } from "../../../../config/API";
import {
	selectAuth,
	selectAuthUserToken,
	selectUser,
	selectUserID,
} from "../../../../store/selectors/auth.selectors";
// import { selectHistoryOrders } from "../../../../store/selectors/orders.selectors";

const OrdersHistory = () => {
	const [orders, setOrders] = useState([]);
	const accessToken = useSelector(selectAuth);
	// const { ...isAuth } = isLoggedIn;
	// console.log(isLoggedIn);
	useEffect(() => {
		// axios.get(`${DOMAIN}/customers/login`, {
		// 	headers: {
		// 		Authorization: `Bearer ${accessToken}`,
		// 	},
		// });
		axios
			.get(`${DOMAIN}/orders`, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			})
			.then((response) => {
				setOrders(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [accessToken]);

	return (
		<div>
			<h2>Історія замовлень</h2>
			<ul>
				{accessToken &&
					orders?.map((order) => (
						<li key={order.id}>
							<div>Замовлення №: {order.orderNo}</div>
							<div>Кількість: {order.quantity}</div>
							<div>Дата: {order.date}</div>
							<div>Сума: {order.totalSum}</div>
							<div>Статус: {order.status}</div>
						</li>
					))}
			</ul>
		</div>
	);
};

export default OrdersHistory;
