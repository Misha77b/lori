import styled from "styled-components";
import { Button, Typography } from "@mui/material";
import Modal from "../Modal";
import PageForm from "../../Form/Form";

const ModalContainer = styled.div`
	text-align: center;
	padding: 60px 85px;
`;

export const modals = {
	SUCCESS: (
		<Modal status="SUCCESS" customWidth={600}>
			<ModalContainer>
				<Typography
					variant="h5"
					color="secondary"
					sx={{
						fontWeight: "700",
						fontSize: "30px",
						lineHeight: "180%",
						marginBottom: "12px",
					}}
				>
					Дякуємо, що вибрали нас!
				</Typography>
				<Typography
					component="p"
					sx={{ fontSize: "18px", lineHeight: " 180%", marginBottom: "50px" }}
				>
					Ваше замовлення №3265897 успішно оформлене. Чекайте на дзвінок від нашого фахівця.
				</Typography>
				<Button
					color="secondary"
					variant="contained"
					sx={{
						padding: "15px 20px",
					}}
				>
					продовжити покупки
				</Button>
			</ModalContainer>
		</Modal>
	),
	LOGIN: (
		<Modal status="LOGIN" customWidth={600}>
			{({ onStatusChange }) => {
				return (
					<>
						<PageForm
							status="LOGIN"
							onClose={() => {
								onStatusChange(null);
							}}
						/>
						<Button
							color="secondary"
							variant="contained"
							onClick={() => {
								onStatusChange("REGISTER");
							}}
						>
							Register
						</Button>
					</>
				);
			}}
		</Modal>
	),
	REGISTER: (
		<Modal status="REGISTER">
			{({ onStatusChange }) => {
				return (
					<>
						<PageForm
							status="REGISTER"
							onClose={() => {
								onStatusChange(null);
							}}
						/>
						<Button
							color="secondary"
							variant="contained"
							onClick={() => {
								onStatusChange("LOGIN");
							}}
						>
							Log in
						</Button>
					</>
				);
			}}
		</Modal>
	),
};