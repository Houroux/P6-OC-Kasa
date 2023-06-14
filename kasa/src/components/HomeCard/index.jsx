import React from "react";
import "../../style/homeCard.scss";
import { Link } from "react-router-dom";

export default function HomeCard({ cover, title, id }) {
	return (
		<Link
			to={`/location/${id}`}
			style={{
				backgroundImage: `url(${cover})`,
			}}
			className="homeCard"
		>
			{title}
		</Link>
	);
}
