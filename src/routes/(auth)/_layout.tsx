import * as React from "react";
import { createFileRoute, Outlet } from "@tanstack/react-router";

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
