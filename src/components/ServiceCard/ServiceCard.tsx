"use client";

import { SKILLS } from "@/const";
import { Skill } from "@/types";
import {
  ActionIcon,
  Avatar,
  Badge,
  Card,
  Center,
  Group,
  Text,
  rem,
  useMantineTheme,
} from "@mantine/core";
import {
  IconBookmark,
  IconClock,
  IconCurrencyBaht,
  IconHeart,
  IconShare,
} from "@tabler/icons-react";
import Image from "next/image";
import { useMemo } from "react";
import classes from "./ServiceCard.module.css";

interface ServiceCardProps {
  id: string;

  userName: string;
  userImage: string;

  title: string;
  description: string;
  image: string;
  duration: number;
  price: number;
  skill: Skill;
}
const linkProps = {
  href: "https://google.com",
  target: "_blank",
  rel: "noopener noreferrer",
};

export function ServiceCard(props: ServiceCardProps) {
  const theme = useMantineTheme();

  const skill = useMemo(
    () => SKILLS.find(({ id }) => id === props.skill)!,
    [props.skill]
  );

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className="!h-[180px] relative">
        <Image className="object-cover" fill={true} alt="" src={skill.image} />
      </Card.Section>

      <Group justify="space-between" className={classes.footer}>
        <Center>
          <Avatar
            src={`https://i.pravatar.cc/300?u=${props.userName}`}
            size={24}
            radius="xl"
            mr="xs"
          />
          <Text fz="sm" inline>
            {props.userName}
          </Text>
        </Center>

        <Group gap={8} mr={0}>
          <ActionIcon className={classes.action}>
            <IconHeart
              style={{ width: rem(16), height: rem(16) }}
              color={theme.colors.red[6]}
            />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconBookmark
              style={{ width: rem(16), height: rem(16) }}
              color={theme.colors.yellow[7]}
            />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconShare
              style={{ width: rem(16), height: rem(16) }}
              color={theme.colors.blue[6]}
            />
          </ActionIcon>
        </Group>
      </Group>

      <Badge className={classes.rating} color={skill.color} variant="filled">
        {skill.name}
      </Badge>

      <Text className={classes.title} fw={500} component="a" {...linkProps}>
        {props.title}
      </Text>

      <Text fz="sm" c="dimmed" lineClamp={4}>
        {props.description}
      </Text>

      <Group justify="space-between" className={classes.footer}>
        <Text fz="xs" c="dimmed" className="flex flex-row items-center">
          <IconClock className="inline mr-1" size={16} />
          {props.duration} min
        </Text>
        <Text fz="xs" c="dimmed" className="flex flex-row items-center">
          <IconCurrencyBaht className="inline" size={16} />
          {props.price}
        </Text>
      </Group>
    </Card>
  );
}
