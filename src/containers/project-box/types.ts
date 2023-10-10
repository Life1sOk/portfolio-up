import { StaticImageData } from "next/image";

export type IStatus = "finished" | "process";

export type IPosition =
  | "Frontend developer"
  | "Backend developer"
  | "Full Stack developer";

export type IMainProject = {
  title: string;
  status: IStatus;
  position: IPosition;
  image: { screen: StaticImageData };
  description: string;
  tools: string[];
  links: {
    github: string;
    website?: string;
  };
};
