import React, { useState } from "react";
import arrowOpened from "../../images/arrowOpened.png";
import "../../style/collapse.scss";

export default function Collapse({ title, children }) {
	const [isOpened, setIsOpened] = useState(false);
	const toggleDropDown = () => {
		setIsOpened(!isOpened);
	};

	return (
		<div className="collapse">
			<div
				className="collapseHead"
				onClick={() => toggleDropDown()}
			>
				{title}
				<img
					className={isOpened ? "arrowOpened" : "arrowClosed"}
					src={arrowOpened}
					alt="fleche"
				/>
			</div>
			<div className={isOpened ? "descriptionOpened" : "descriptionClosed"}>
				{children}
			</div>
		</div>
	);
}
