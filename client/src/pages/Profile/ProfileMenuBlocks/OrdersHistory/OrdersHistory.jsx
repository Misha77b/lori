import React from "react";
import { useSelector } from "react-redux";
// import { selectHistoryOrders } from "../../../../store/selectors/orders.selectors";

const OrdersHistory = () => {
	// const orders = useSelector(selectHistoryOrders);
	// console.log(orders);

	return (
		<div>
			<h2>Історія замовлень</h2>
			{/* <ul>
				{orders.length &&
					orders?.map((order) => (
						<li key={order.id}>
							<div>Замовлення №: {order.orderNo}</div>
							<div>Кількість: {order.quantity}</div>
							<div>Дата: {order.date}</div>
							<div>Сума: {order.totalSum}</div>
							<div>Статус: {order.status}</div>
						</li>
					))}
			</ul> */}
		</div>
	);
};

export default OrdersHistory;
