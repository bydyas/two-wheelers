import { Outlet, createFileRoute } from "@tanstack/react-router";
import * as React from "react";

export const Route = createFileRoute("/(auth)/_layout")({
	component: AuthLayout,
});

function AuthLayout() {
	return (
		<>
			<header>AUTH HEAD</header>
			<Outlet />
			<footer>AUTH FOOT</footer>
		</>
	);
}
