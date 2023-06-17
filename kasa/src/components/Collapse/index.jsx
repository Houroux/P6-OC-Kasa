import React, { useState } from "react";
import arrowClosed from "../../images/arrowClosed.png";
import arrowOpened from "../../images/arrowOpened.png";
import "../../style/collapse.scss";

export default function Collapse({ description, equipments }) {
	const [isClosed, setIsClosed] = useState(true);
	return description ? (
		isClosed ? (
			<div className="collapse descriptionContainer">
				<div
					className="collapseHead descriptionHead"
					onClick={() => setIsClosed(false)}
				>
					Description
					<img
						src={arrowClosed}
						alt="fleche d'ouverture"
					/>
				</div>
			</div>
		) : (
			<div className="collapse descriptionContainer">
				<div
					className="collapseHead descriptionHead"
					onClick={() => setIsClosed(true)}
				>
					Description
					<img
						src={arrowOpened}
						alt="fleche d'ouverture"
					/>
				</div>

				<div
					className="descriptionOpened"
					onClick={() => setIsClosed(false)}
				>
					<p>{description}</p>
				</div>
			</div>
		)
	) : isClosed ? (
		<div className="collapse equipmentsContainer">
			<div
				className="collapseHead equipmentsHead"
				onClick={() => setIsClosed(false)}
			>
				Équipements
				<img
					src={arrowClosed}
					alt="fleche d'ouverture"
				/>
			</div>
		</div>
	) : (
		<div className="collapse equipmentsContainer">
			<div
				className="collapseHead equipmentsHead"
				onClick={() => setIsClosed(true)}
			>
				Équipements
				<img
					src={arrowOpened}
					alt="fleche d'ouverture"
				/>
			</div>

			<div className="equipmentsOpened">
				<ul>
					{equipments.map((equipment) => (
						<li key={equipment}>{equipment}</li>
					))}
				</ul>
			</div>
		</div>
	);
}
