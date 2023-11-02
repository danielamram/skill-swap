"use client";

import { UserService } from "@/types";
import { SimpleGrid } from "@mantine/core";
import { UserCard } from "../UserCard";

const users: UserService[] = [
  {
    id: 1,
    name: "John Doe",
    image: "https://example.com/images/user1.jpg",
    skill: "yoga",
    duration: 60,
    price: 50,
    title: "Yoga Instructor",
    description: "Certified yoga instructor with 5 years of experience.",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Alice Smith",
    image: "https://example.com/images/user2.jpg",
    skill: "music",
    duration: 45,
    price: 40,
    title: "Piano Teacher",
    description: "Experienced piano teacher offering lessons for all levels.",
    rating: 4.6,
  },
  {
    id: 3,
    name: "Ella Johnson",
    image: "https://example.com/images/user3.jpg",
    skill: "cooking",
    duration: 90,
    price: 60,
    title: "Chef at Home",
    description: "Personal chef offering gourmet dining at your home.",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Robert Wilson",
    image: "https://example.com/images/user4.jpg",
    skill: "painting",
    duration: 120,
    price: 80,
    title: "Professional Painter",
    description: "Talented artist specializing in landscapes and portraits.",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Emily Brown",
    image: "https://example.com/images/user5.jpg",
    skill: "training",
    duration: 60,
    price: 70,
    title: "Personal Trainer",
    description:
      "Certified personal trainer helping you reach your fitness goals.",
    rating: 4.9,
  },
  {
    id: 6,
    name: "Michael Davis",
    image: "https://example.com/images/user6.jpg",
    skill: "dancing",
    duration: 60,
    price: 55,
    title: "Dance Instructor",
    description: "Learn various dance styles with a professional instructor.",
    rating: 4.6,
  },
  {
    id: 9,
    name: "Sophia Taylor",
    image: "https://example.com/images/user9.jpg",
    skill: "writing",
    duration: 60,
    price: 60,
    title: "Writer for Hire",
    description:
      "Experienced writer available for content creation and copywriting.",
    rating: 4.9,
  },
];

export function Feed() {
  return (
    <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }}>
      {users.map((user) => (
        <UserCard
          key={user.id}
          image={user.image}
          name={user.name}
          skill={user.skill}
          duration={user.duration}
          price={user.price}
          title={user.title}
          description={user.description}
          // rating={user.rating}
        />
      ))}
    </SimpleGrid>
  );
}
