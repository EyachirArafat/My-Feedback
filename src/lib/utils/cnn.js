import clsx from "clsx";
import { twMerge } from "tailwind-merge";


export const cnn = (...inputs) => twMerge(clsx(...inputs));
