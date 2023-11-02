import { MantineColor } from "@mantine/core";
import { Skill } from "./types";

export const SKILLS: {
  id: Skill;
  name: string;
  image: string;
  color: MantineColor;
}[] = [
  {
    id: "music",
    name: "Music",
    image: "/skills/music.jpg",
    color: "teal",
  },
  {
    id: "writing",
    name: "Writing",
    image: "/skills/writing.jpg",
    color: "indigo",
  },
  {
    id: "training",
    name: "Training",
    image: "/skills/training.jpg",
    color: "blue",
  },
  {
    id: "dancing",
    name: "Dancing",
    image: "/skills/dancing.jpg",
    color: "cyan",
  },
  {
    id: "painting",
    name: "Painting",
    image: "/skills/painting.jpg",
    color: "red",
  },
  {
    id: "cooking",
    name: "Cooking",
    image: "/skills/cooking.jpg",
    color: "yellow",
  },
  {
    id: "yoga",
    name: "Yoga",
    image: "/skills/yoga.jpg",
    color: "purple",
  },
];
