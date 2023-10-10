import { FaCss3Alt, FaReact, FaNode } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiJavascript,
  SiRedux,
  SiTypescript,
  SiStyledcomponents,
  SiFirebase,
  SiHtml5,
  SiPostgresql,
  SiRedis,
  SiSequelize,
} from "react-icons/si";

import KnexIcon from "./ui/icons/knex";

export const tierFront = [
  {
    id: 0,
    name: "HTML5",
    icon: <SiHtml5 />,
  },
  {
    id: 1,
    name: "CSS3",
    icon: <FaCss3Alt />,
  },
  {
    id: 2,
    name: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    id: 3,
    name: "React.js",
    icon: <FaReact />,
  },
  {
    id: 4,
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    id: 5,
    name: "Next.js",
    icon: <TbBrandNextjs />,
  },
  {
    id: 6,
    name: "Redux",
    icon: <SiRedux />,
  },
  {
    id: 7,
    name: "Styled c.",
    icon: <SiStyledcomponents />,
  },
];

export const tierBack = [
  {
    id: 8,
    name: "Firebase",
    icon: <SiFirebase />,
  },
  {
    id: 9,
    name: "Node.js",
    icon: <FaNode />,
  },
  {
    id: 10,
    name: "PostgreSQL",
    icon: <SiPostgresql />,
  },
  {
    id: 11,
    name: "Redis",
    icon: <SiRedis />,
  },
  {
    id: 12,
    name: "Sequelize",
    icon: <SiSequelize />,
  },
  {
    id: 13,
    name: "Knex.js",
    icon: <KnexIcon />,
  },
];
