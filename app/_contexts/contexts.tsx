import { createContext } from "react";

export const IsIntersectingContext = createContext<number[]>([]);

export const ResponsiveContext = createContext<
	"default" | "xs" | "sm" | "md" | "lg" | "xl"
>("default");
