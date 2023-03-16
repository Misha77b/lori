import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Table, TableHead, TableRow, TableCell, TableBody, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { DOMAIN } from "../../../../config/API";
import { getLocalItem } from "../../../../helpers/getLocalItem";
import Spinner from "../../../../components/Spinner";

const OrdersHistory = () => {
	const StyledTableRow = styled(TableRow)(({ theme }) => ({
		"&:nth-of-type(odd)": {
			backgroundColor: "#D3D7DA",
		},
	}));
	const StyledBox = styled(Box)(({ theme }) => ({
		"&:nth-of-type(odd)": {
			backgroundColor: "#D3D7DA",
		},
	}));
	const isLoggedIn = useSelector((state) => state.auth.isAuth);
	const [loading, setLoading] = useState(false);
	const [orders, setOrders] = useState([]);

	const accessToken = getLocalItem("token");
	useEffect(() => {
		axios
			.get(`${DOMAIN}/orders`, {
				headers: {
					Authorization: accessToken,
				},
			})
			.then((response) => {
				setLoading(!loading);
				setOrders(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	debugger; // eslint-disable-line no-debugger
	return (
		<Box>
			{!loading && <Spinner />}
			<Typography
				variant="h4"
				fontWeight="fontWeightBold"
				fontFamily="Open Sans, sans-serif"
				align="center"
				color="grey.main"
				mb={2}
			>
				Історія замовлень
			</Typography>
			<Table sx={{ display: { xs: "none", sm: "block" } }}>
				<TableHead>
					{orders.length ? (
						<StyledTableRow>
							<TableCell align="center">Замовлення №</TableCell>
							<TableCell align="center">Назва товару</TableCell>
							<TableCell align="center">Кількість</TableCell>
							<TableCell align="center">Сума</TableCell>
							<TableCell align="center">Дата</TableCell>
							<TableCell align="center">Статус</TableCell>
						</StyledTableRow>
					) : (
						<Typography>Замовлення відсутні</Typography>
					)}
				</TableHead>
				<TableBody>
					{isLoggedIn &&
						orders?.map((order) => (
							<StyledTableRow key={order._id}>
								<TableCell align="center">{order.orderNo}</TableCell>
								<TableCell>{order.products[0].product.name}</TableCell>
								<TableCell align="center">{order.products[0].cartQuantity}</TableCell>
								<TableCell align="center">{order.totalSum}</TableCell>
								<TableCell align="center">{order.date.slice(0, 10)}</TableCell>
								<TableCell align="center">{order.status}</TableCell>
							</StyledTableRow>
						))}
				</TableBody>
			</Table>
			{isLoggedIn &&
				orders?.map((order) => (
					<StyledBox mb={1} key={order._id} sx={{ display: { xs: "block", sm: "none" } }}>
						<Typography
							paragraph
							variant="h6"
							fontWeight="fontWeightRegular"
							fontFamily="Open Sans, sans-serif"
							color="grey.main"
							align="justify"
							pl={1}
							pr={1}
						>
							Замовлення №: {order.orderNo}
						</Typography>
						<Typography
							pl={1}
							pr={1}
							paragraph
							fontWeight="fontWeightRegular"
							fontFamily="Open Sans, sans-serif"
							color="grey.main"
							align="justify"
						>
							Назва товару: {order.products[0].product.name}
						</Typography>
						<Typography
							pl={1}
							pr={1}
							paragraph
							fontWeight="fontWeightRegular"
							fontFamily="Open Sans, sans-serif"
							color="grey.main"
							align="justify"
						>
							Кількість: {order.products[0].cartQuantity}
						</Typography>
						<Typography
							pl={1}
							pr={1}
							paragraph
							fontWeight="fontWeightRegular"
							fontFamily="Open Sans, sans-serif"
							color="grey.main"
							align="justify"
						>
							Сума: {order.totalSum}
						</Typography>
						<Typography
							pl={1}
							pr={1}
							paragraph
							fontWeight="fontWeightRegular"
							fontFamily="Open Sans, sans-serif"
							color="grey.main"
							align="justify"
						>
							Дата: {order.date.slice(0, 10)}
						</Typography>
						<Typography
							pl={1}
							pr={1}
							paragraph
							fontWeight="fontWeightRegular"
							fontFamily="Open Sans, sans-serif"
							color="grey.main"
							align="justify"
						>
							Статус: {order.status}
						</Typography>
					</StyledBox>
				))}
		</Box>
	);
};

export default OrdersHistory;
