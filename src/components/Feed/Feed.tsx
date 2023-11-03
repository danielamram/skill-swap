"use client";

import { User } from "@/types";
import { SimpleGrid } from "@mantine/core";
import { ServiceCard } from "../ServiceCard";

const users: User[] = [
  {
    id: "1",
    name: "John Doe",
    image: "https://example.com/images/user1.jpg",
    services: [
      {
        id: "1",
        title: "Yoga Instructor",
        description: "Certified yoga instructor with 5 years of experience.",
        image: "https://example.com/images/user1.jpg",
        duration: 60,
        price: 50,
        rating: 4.8,
        skill: "yoga",
      },
    ],
  },
  {
    id: "2",
    name: "Alice Smith",
    image: "https://example.com/images/user2.jpg",
    services: [
      {
        id: "2",
        title: "Piano Teacher",
        description:
          "Experienced piano teacher offering lessons for all levels.",
        image: "https://example.com/images/user2.jpg",
        duration: 45,
        price: 40,
        rating: 4.6,
        skill: "music",
      },
    ],
  },
  {
    id: "3",
    name: "Ella Johnson",
    image: "https://example.com/images/user3.jpg",
    services: [
      {
        id: "3",
        title: "Chef at Home",
        description: "Personal chef offering gourmet dining at your home.",
        image: "https://example.com/images/user3.jpg",
        duration: 90,
        price: 60,
        rating: 4.9,
        skill: "cooking",
      },
    ],
  },
  {
    id: "4",
    name: "Robert Wilson",
    image: "https://example.com/images/user4.jpg",
    services: [
      {
        id: "4",
        title: "Professional Painter",
        description:
          "Talented artist specializing in landscapes and portraits.",
        image: "https://example.com/images/user4.jpg",
        duration: 120,
        price: 80,
        rating: 4.7,
        skill: "painting",
      },
    ],
  },
  {
    id: "5",
    name: "Emily Brown",
    image: "https://example.com/images/user5.jpg",
    services: [
      {
        id: "5",
        title: "Personal Trainer",
        description:
          "Certified personal trainer helping you reach your fitness goals.",
        image: "https://example.com/images/user5.jpg",
        duration: 60,
        price: 70,
        rating: 4.9,
        skill: "training",
      },
    ],
  },
  {
    id: "6",
    name: "Michael Davis",
    image: "https://example.com/images/user6.jpg",
    services: [
      {
        id: "6",
        title: "Dance Instructor",
        description:
          "Learn various dance styles with a professional instructor.",
        image: "https://example.com/images/user6.jpg",
        duration: 60,
        price: 55,
        rating: 4.6,
        skill: "dancing",
      },
    ],
  },
  {
    id: "9",
    name: "Sophia Taylor",
    image: "https://example.com/images/user9.jpg",
    services: [
      {
        id: "9",
        title: "Writer for Hire",
        description:
          "Experienced writer available for content creation and copywriting.",
        image: "https://example.com/images/user9.jpg",
        duration: 60,
        price: 60,
        rating: 4.9,
        skill: "writing",
      },
    ],
  },
];

export function Feed() {
  const services = users.flatMap((user) => user.services);

  return (
    <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }}>
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          {...service}
          userName={
            users.find((user) =>
              user.services.find((s) => s.id === service.id)
            )!.name
          }
          userImage={
            users.find((user) =>
              user.services.find((s) => s.id === service.id)
            )!.image
          }
          // rating={user.rating}
        />
      ))}
    </SimpleGrid>
  );
}
