import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";

export const Route = createFileRoute("/(!landing)/_layout/")({
	component: HomePage,
});

function HomePage() {
	return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}
