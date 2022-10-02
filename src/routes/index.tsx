import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider, useAuth } from "../hooks/auth";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export const Routes = () => {
  const { data } = useAuth();
  return (
    <BrowserRouter>
      {data.user ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
};
