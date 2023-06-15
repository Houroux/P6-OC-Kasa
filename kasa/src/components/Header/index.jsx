import React from "react";
import { NavLink } from "react-router-dom";
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
				<NavLink
					className={({ isActive }) =>
						isActive
							? "header__body__nav__link active"
							: "header__body__nav__link"
					}
					to="/"
				>
					Accueil
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive
							? "header__body__nav__link active"
							: "header__body__nav__link"
					}
					to="/about"
				>
					A Propos
				</NavLink>
			</nav>
		</div>
	);
}
