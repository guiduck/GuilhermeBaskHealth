import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isUserLogged() {
  return !!localStorage.getItem("userToken");
}

export function setWidgetCookie(items: string[]) {
  const date = new Date();
  date.setTime(date.getTime() + 1000 * 60 * 60 * 24 * 30);
  const expires = "; expires=" + date.toUTCString();
  document.cookie = `displayItems=${items};${expires};path=/`;
}

export function getWidgetCookie() {
  const cookieValue = document.cookie.replace(
    /(?:(?:^|.*;\s*)myArray\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );

  return JSON.parse(decodeURIComponent(cookieValue)) || [];
}
