"use client";
import { SiteSetting } from "@payload-types";
import { createContext, useContext } from "react";

export type PrimaryMenu = { label: string; link: string }[];
export type AppContextProps = {
  settings: SiteSetting;
  menu: PrimaryMenu;
};
export const AppContext = createContext<AppContextProps | null>(null);

type Props = {
  children: React.ReactNode;
  options: AppContextProps;
};
export default function AppProvider({ children, options }: Props) {
  return <AppContext.Provider value={options}>{children}</AppContext.Provider>;
}

export const useAppContext = () => {
  if (!AppContext) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return useContext(AppContext)!;
};
