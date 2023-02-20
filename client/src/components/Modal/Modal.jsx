import { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import styles from "./modal.module.scss";

const modalRootElement = document.querySelector("#modal");

const Modal = ({ open, onClose, children, customWidth }) => {
	const element = useMemo(() => document.createElement("div"), []);

	useEffect(() => {
		if (open) {
			modalRootElement.appendChild(element);
			document.body.style.overflow = "hidden";

			return () => {
				modalRootElement.removeChild(element);
			};
		}
		document.body.style.overflow = "scroll";
		return undefined;
	});

	const handlerCheckTarget = (e) => {
		return e.target === e.currentTarget || e.target.nodeName === "IMG" ? onClose(false) : null;
	};

	if (open) {
		return createPortal(
			<div className={styles.overlay} onClick={handlerCheckTarget}>
				<div className={styles.modal} style={{ maxWidth: `${customWidth}px` }}>
					{children}
					<button type="button" className={styles.modal__btn}>
						<img
							src="https://res.cloudinary.com/dyvsyavmb/image/upload/v1676543739/images/llvbuvkf2jaupb5sfimm.svg"
							alt="arrow"
						/>
					</button>
				</div>
			</div>,
			element,
		);
	}
	return null;
};

export default Modal;
