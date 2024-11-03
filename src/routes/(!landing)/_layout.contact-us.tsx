import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";

export const Route = createFileRoute("/(!landing)/_layout/contact-us")({
	component: ContactUsPage,
});

function ContactUsPage() {
	return "Hello /(landing)/_layout/contact-us!";
}
