import { ACCEUIL_PATH, PRODUCTS_PATH } from "./navigationPaths";
import { HiHome } from "react-icons/hi";

/*
|--------------------------------------------------------------------------
! Sidebar Items
|--------------------------------------------------------------------------
|
| Ici se trouve tous les liens et icons qui doivent etre sur le sidebar
| de SplitShell
*/
export const links = [
  { path: ACCEUIL_PATH, icon: HiHome, label: "DASHBOARD" },
  { path: PRODUCTS_PATH, icon: HiHome, label: "ALERT" },
  { path: PRODUCTS_PATH, icon: HiHome, label: "BADGES" },
  { path: PRODUCTS_PATH, icon: HiHome, label: "CARDS" },
  { path: PRODUCTS_PATH, icon: HiHome, label: "GRID" },
  { path: PRODUCTS_PATH, icon: HiHome, label: "TABLES" },
  { path: PRODUCTS_PATH, icon: HiHome, label: "FORMS" },
  { path: PRODUCTS_PATH, icon: HiHome, label: "BREADCUMBS" },
  { path: PRODUCTS_PATH, icon: HiHome, label: "ABOUT" },
];
