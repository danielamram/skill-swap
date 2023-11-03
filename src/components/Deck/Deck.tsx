"use client";

import { SKILLS } from "@/const";
import { Card } from "@mantine/core";
import { animated, to as interpolate, useSprings } from "@react-spring/web";
import cx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { useDrag } from "react-use-gesture";
import styles from "./Deck.module.css";

const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = (_i: number) => ({
  x: 0,
  rot: 0,
  scale: 1,
  y: 0,
  opacityLike: 0,
  opacityDislike: 0,
});
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r: number, s: number) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

interface Props {
  onFinish: () => void;
}

export function Deck({ onFinish }: Props) {
  let aria = "";
  const [gone] = useState(() => new Set());
  const [props, api] = useSprings(SKILLS.length, (i) => ({
    ...to(i),
    from: from(i),
  }));
  const bind = useDrag(
    ({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2;
      const dir = xDir < 0 ? -1 : 1;
      if (!down && trigger) gone.add(index);
      api.start((i) => {
        if (index !== i) return;
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0;
        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0);
        const scale = down ? 1.1 : 1;

        if (x > 20) {
          aria = "like";
        } else if (x < -20) {
          aria = "dislike";
        } else {
          aria = "";
        }

        return {
          x,
          rot,
          scale,
          opacityLike: aria === "like" ? 1 : 0,
          opacityDislike: aria === "dislike" ? 1 : 0,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });

      if (!down && gone.size === SKILLS.length) {
        setTimeout(() => {
          // gone.clear();
          // api.start((i) => to(i));

          onFinish();
        }, 600);
      }
    }
  );
  return (
    <div className={styles.container}>
      {props.map(
        ({ x, y, rot, scale, opacityLike, opacityDislike }: any, i) => (
          <animated.div className={styles.deck} key={i} style={{ x, y }}>
            <animated.div
              {...bind(i)}
              style={{
                transform: interpolate([rot, scale], trans),
              }}
            >
              <Card className="h-full" shadow="sm" radius="md" padding={0}>
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent rounded-lg z-10" />
                <div className="absolute bottom-0 left-0 w-full p-4 z-10">
                  <h1 className="text-white text-2xl font-light">
                    {SKILLS[i].name}
                  </h1>
                </div>

                <animated.div
                  style={{ opacity: opacityDislike, zIndex: 10 }}
                  className={cx(
                    styles.dislike,
                    "top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -rotate-12"
                  )}
                >
                  DISLIKE
                </animated.div>
                <animated.div
                  style={{ opacity: opacityLike, zIndex: 10 }}
                  className={cx(
                    styles.like,
                    "top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -rotate-12 "
                  )}
                >
                  LIKE
                </animated.div>

                <div className="w-full h-full rounded-lg relative">
                  <Image
                    fill={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="rounded-lg object-cover"
                    src={SKILLS[i].image}
                    alt={SKILLS[i].name}
                  />
                </div>
              </Card>
            </animated.div>
          </animated.div>
        )
      )}
    </div>
  );
}
