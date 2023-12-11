import { createContext } from "react";

export const ResponsiveContext = createContext<
	"default" | "xs" | "sm" | "md" | "lg" | "xl"
>("default");
