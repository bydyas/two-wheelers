import { Outlet, createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { Header } from "../../components/shared";

export const Route = createFileRoute("/(!landing)/_layout")({
	component: LandingLayout,
});

function LandingLayout() {
	return (
		<>
			<Header />
			<Outlet />
			<footer>FOOT</footer>
		</>
	);
}
