import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../components/Main.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Main /> },
  { path: "/product/:id", element: "tospecify" },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
