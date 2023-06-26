import React, { useState } from "react";
import arrowOpened from "../../images/arrowOpened.png";
import "../../style/collapse.scss";

export default function Collapse({ title, children }) {
	const [isOpened, setIsOpened] = useState(false);
	const toggleDropDown = () => {
		setIsOpened(!isOpened);
	};

	return (
		<div className="collapse descriptionContainer">
			<div
				className="collapseHead descriptionHead"
				onClick={() => toggleDropDown()}
			>
				{title}
				<img
					className={isOpened ? "arrowClosed" : "arrowOpened"}
					// className={isOpened ? "arrowClosed" : "arrowOpened"}
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
