import { Skill } from "./Skill";

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: number;
  price: number;
  rating: number;
  skill: Skill;
}

export interface User {
  id: string;
  name: string;
  image: string;
  services: Service[];
}
