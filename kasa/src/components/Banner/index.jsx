import React from "react";
import "../../style/homeBanner.scss";
import "../../style/aboutBanner.scss";

export default function Banner({ className, children }) {
	return <div className={className}>{children}</div>;
}
