import React, { useState } from "react";
import arrowClosed from "../../images/arrowClosed.png";
import arrowOpened from "../../images/arrowOpened.png";
import "../../style/aboutCard.scss";

export default function AboutCard({ title, description }) {
	const [isClosed, setStateOfCard] = useState(true);
	return isClosed ? (
		<div className="aboutCard">
			<div
				className="aboutCardHead"
				onClick={() => setStateOfCard(false)}
			>
				<h3>{title}</h3>
				<img
					src={arrowClosed}
					alt="fleche d'ouverture"
				/>
			</div>
		</div>
	) : (
		<div className="aboutCard">
			<div
				className="aboutCardHead aboutCardHeadOpened"
				onClick={() => setStateOfCard(true)}
			>
				<h3>{title}</h3>

				<img
					src={arrowOpened}
					alt="fleche de fermeture"
				/>
			</div>
			<div className="aboutCardOpened">
				<p>{description}</p>
			</div>
		</div>
	);
}
