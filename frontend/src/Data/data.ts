import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { RxRulerSquare } from "react-icons/rx";
import type { IconType } from "react-icons";

import home1 from '../assets/home1.jpg';
import home2 from '../assets/home2.jpg';
import home3 from '../assets/home3.jpg';
import home4 from '../assets/home4.jpg';
import homea from '../assets/homea.jpg';
import homeb from '../assets/homeb.jpg';
import homec from '../assets/homec.jpg';
import homed from '../assets/homed.jpg';
import homef from '../assets/homef.jpg';
import homeg from '../assets/homeg.jpg';

export interface PropertyProp {
  id: number;
  title: string;
  longitude: number;
  latitude: number;
  location: string;
  icons?: IconType[];
  image?: string[];
  category: "Rent" | "Sell" | "Buy";
  rating?: number; // ⭐ add this
}


export const Property: PropertyProp[] = [
  {
    id: 1,
    title: "Luxury Villa",
    latitude: 45.5017,
    longitude: -73.5673,
    location: "Montreal, QC",
    icons: [IoBedOutline, LuBath, RxRulerSquare],
    image: [home1, homea, homeb],
    category: "Sell",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Modern Apartment",
    latitude: 46.8139,
    longitude: -71.2080,
    location: "Quebec City, QC",
    icons: [IoBedOutline, LuBath, RxRulerSquare],
    image: [home2, homec, homed],
    category: "Rent",
    rating: 4.5,
  },
  {
    id: 3,
    title: "Spacious Warehouse",
    latitude: 48.4270,
    longitude: -71.0657,
    location: "Saguenay, QC",
    icons: [IoBedOutline, LuBath, RxRulerSquare],
    image: [home3, homef],
    category: "Buy",
    rating: 4.2,
  },
  {
    id: 4,
    title: "5-Star Hotel",
    latitude: 45.4042,
    longitude: -71.8937,
    location: "Sherbrooke, QC",
    icons: [IoBedOutline, LuBath, RxRulerSquare],
    image: [home4, homeg],
    category: "Rent",
    rating: 5.0,
  },
];
