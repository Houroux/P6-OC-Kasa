import React from "react";
import "../../style/footer.scss";
import LogoWhite from "../../images/logo__white.png";

export default function Footer() {
	return (
		<div className="footer">
			<img
				className="footer__img"
				src={LogoWhite}
				alt="Logo Kasa"
			/>
			<p className="footer__text">© 2020 Kasa. All rights reserved</p>
		</div>
	);
}
