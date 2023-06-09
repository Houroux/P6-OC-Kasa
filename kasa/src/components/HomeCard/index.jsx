import React from "react";
import "../../style/homeCard.scss";
export default function HomeCard({ cover, title }) {
	return (
		<div
			style={{
				backgroundImage: `url(${cover})`,
			}}
			className="homeCard"
		>
			{title}
		</div>
	);
}
