import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.jpg";
import "../../style/header.scss";

export default function Header() {
	return (
		<div className="header__body">
			<img
				src={Logo}
				alt="Logo Kasa"
			/>
			<nav className="header__body__nav">
				<Link
					className="header__body__nav__link"
					to="/"
				>
					Accueil
				</Link>
				<Link
					className="header__body__nav__link"
					to="/about"
				>
					A Propos
				</Link>
			</nav>
		</div>
	);
}
