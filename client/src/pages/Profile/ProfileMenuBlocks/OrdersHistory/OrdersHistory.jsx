import React, { useState, useEffect } from "react";
import axios from "axios";
import { DOMAIN } from "../../../../config/API";

const OrdersHistory = () => {
	const [orders, setOrders] = useState([]);
	// console.log(orders);
	const accessToken = localStorage.getItem("token");
	useEffect(() => {
		axios
			.get(`${DOMAIN}/orders`, {
				headers: {
					Authorization: accessToken,
				},
			})
			.then((response) => {
				setOrders(response.data);
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div>
			<h2>Історія замовлень</h2>
			<ul>
				{orders?.map((order) => (
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
