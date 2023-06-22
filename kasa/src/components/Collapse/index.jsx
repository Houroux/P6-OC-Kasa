import React, { useState } from "react";
import arrowClosed from "../../images/arrowClosed.png";
import arrowOpened from "../../images/arrowOpened.png";
import "../../style/collapse.scss";

import "../../style/aboutCard.scss";

export default function Collapse({ title, children }) {
	const [isClosed, setIsClosed] = useState(false);
	const toggleDropDown = () => {
		setIsClosed(!isClosed);
	};
	return (
		<div className="collapse descriptionContainer">
			<div
				className="collapseHead descriptionHead"
				onClick={() => toggleDropDown()}
			>
				{title}
				<img
					src={isClosed ? arrowClosed : arrowOpened}
					alt={isClosed ? "fleche d'ouverture" : "fleche de fermeture"}
				/>
			</div>

			{isClosed && <div className="descriptionOpened">{children}</div>}
		</div>
	);
}
