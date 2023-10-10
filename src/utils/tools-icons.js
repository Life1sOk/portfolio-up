import React from "react";
import { FaCss3Alt, FaReact, FaSass, FaTelegram, FaNode } from "react-icons/fa";
import {
  SiJavascript,
  SiRedux,
  SiTypescript,
  SiStyledcomponents,
  SiFirebase,
  SiHtml5,
  SiFacebook,
  SiPostgresql,
} from "react-icons/si";

export const bigBox = [
  {
    id: 0,
    icon: <SiHtml5 />,
    color: "#FF6D00",
    side: "front",
  },
  {
    id: 1,
    icon: <FaCss3Alt />,
    color: "#039BE5",
    side: "back",
  },
  {
    id: 2,
    icon: <SiJavascript />,
    color: "#FFD600",
    side: "left",
  },
  {
    id: 3,
    icon: <SiTypescript />,
    color: "#1976D2",
    side: "top",
  },
  {
    id: 4,
    icon: <FaReact />,
    color: "#80DEEA",
    side: "rigth",
  },
  {
    id: 5,
    icon: <SiRedux />,
    color: "#7E57C2",
    side: "bottom",
  },
];

export const tierOne = [
  {
    name: "HTML5",
    icon: <SiHtml5 />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },
];

export const tierTwo = [
  {
    id: 0,
    name: "React.js",
    icon: <FaReact />,
  },
  {
    id: 2,
    name: "Redux",
    icon: <SiRedux />,
  },
  {
    id: 1,
    name: "Sass",
    icon: <FaSass />,
  },
  {
    id: 3,
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    id: 4,
    name: "Styled c.",
    icon: <SiStyledcomponents />,
  },
];

export const tierThree = [
  {
    id: 1,
    name: "Firebase",
    icon: <SiFirebase />,
  },
  {
    id: 2,
    name: "Node.js",
    icon: <FaNode />,
  },
  {
    id: 3,
    name: "PostgreSQL",
    icon: <SiPostgresql />,
  },
];

export const contactsIcons = [
  {
    sm: "Telegram",
    icon: <FaTelegram />,
    url: "https://t.me/mrAndreyT",
  },
  {
    sm: "Facebook",
    icon: <SiFacebook />,
    url: "https://www.facebook.com/andrey.tsoy.3975",
  },
];
