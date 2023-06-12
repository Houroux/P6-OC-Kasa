import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import "../../style/error.scss";

export default function Error() {
	return (
		<div>
			<div className="margin__main">
				<Header></Header>
				<div className="error__main">
					<h1>404</h1>
					<p>Oups! La page que vous demandez n'existe pas.</p>
					<Link
						className="error__main__link"
						to="/"
					>
						Retourner sur la page d’accueil
					</Link>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
}
