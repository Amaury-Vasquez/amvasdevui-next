"use client";
import { CookiesProvider } from "react-cookie";
import { ReactNode } from "react";

interface ProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: ProviderProps) => (
  <CookiesProvider defaultSetOptions={{ path: "/" }}>
    {children}
  </CookiesProvider>
);

export default Provider;
