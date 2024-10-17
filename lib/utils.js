import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const POSTER_API = process.env.NEXT_PUBLIC_POSTER_API
export const POSTER_TOKEN = process.env.NEXT_PUBLIC_POSTER_TOKEN