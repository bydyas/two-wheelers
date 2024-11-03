import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(!landing)/_layout/contact-us")({
  component: ContactUsPage,
});

function ContactUsPage() {
  return "Hello /(landing)/_layout/contact-us!";
}
