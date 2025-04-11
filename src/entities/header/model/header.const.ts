import { NavItemI } from "./header.interface";
import Map from "~/public/shared/map-fill.svg";
import Person from "~/public/shared/person-lines-fill.svg";
import PersonCircle from "~/public/shared/person-circle-fill.svg";

export const navList: NavItemI[] = [
  {
    title: "Map",
    link: "#map",
    Icon: Map,
  },
  {
    title: "Contacts",
    link: "#contacts",
    Icon: Person,
  },
  {
    title: "About us",
    link: "#about",
    Icon: PersonCircle,
  },
];
