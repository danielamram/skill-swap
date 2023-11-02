import { Skill } from "./Skill";

export interface User {
  id: number;
  name: string;
}

export interface UserService extends User {
  image: string;
  skill: Skill;
  duration: number;
  price: number;
  title: string;
  description: string;
  rating: number;
}
