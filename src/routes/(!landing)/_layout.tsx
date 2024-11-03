import * as React from "react";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { LandingHeader } from "../../components/shared";

export const Route = createFileRoute("/(!landing)/_layout")({
  component: LandingLayout,
});

function LandingLayout() {
  return (
    <>
      <LandingHeader />
      <Outlet />
      <footer>FOOT</footer>
    </>
  );
}
