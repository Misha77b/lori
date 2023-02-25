import React, { useEffect, useMemo, createRef } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import styles from "./modal.module.scss";
import { setModal } from "../../store/reducers/modalSlice";

const modalRootElement = document.querySelector("#modal");

const Modal = ({ children, customWidth, status, orderNo = 300 }) => {
	const dispatch = useDispatch();
	const actionModalHandler = (stat) => {
		dispatch(setModal(stat));
	};
	const element = useMemo(() => document.createElement("div"), []);
	const myRef = createRef();
	const outsideCloseHandler = (e) => {
		if (e.target.contains(myRef.current)) {
			actionModalHandler(null);
		}
	};
	useEffect(() => {
		if (status) {
			modalRootElement.appendChild(element);
			document.body.style.overflow = "hidden";
			return () => {
				modalRootElement.removeChild(element);
				document.body.style.overflow = "scroll";
			};
		}
		return undefined;
	});

	if (status) {
		return createPortal(
			<div className={styles.overlay} onClick={outsideCloseHandler}>
				<div ref={myRef} className={styles.modal} style={{ maxWidth: `${customWidth}px` }}>
					{children({
						order: orderNo,
						onStatusChange: actionModalHandler,
					})}
					<CloseCross
						className={styles.modal__btn}
						onClick={() => {
							actionModalHandler(null);
						}}
					>
						X
					</CloseCross>
				</div>
			</div>,
			element,
		);
	}
	return null;
};
const CloseCross = styled.span`
	font-family: Tilt Warp, sans-serif;
	font-weight: bold;
	color: #a0a9af;
	font-size: 20px;
	cursor: pointer;
`;
export default Modal;
