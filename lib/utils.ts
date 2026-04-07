import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ANNUAL_DISCOUNT } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAnnualPrice(monthlyPrice: number): number {
  return Math.round(monthlyPrice * (1 - ANNUAL_DISCOUNT) * 100) / 100;
}
