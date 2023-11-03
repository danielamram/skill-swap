"use client";

import { Title } from "@mantine/core";
import { useState } from "react";
import { Deck } from "../Deck";
import { Feed } from "../Feed";

export function Home() {
  const [isOnboarded, setIsOnboarded] = useState(false);

  return (
    <>
      {isOnboarded ? (
        <Feed />
      ) : (
        <div className="flex flex-col h-full items-center justify-center text-center">
          <Title fz={48} fw="900" tt="uppercase" lh={0.95} lts={-2}>
            Swipe{" "}
            <span
              style={{
                position: "relative",
                backgroundColor: "#f8ad60",
                borderRadius: "var(--mantine-radius-sm)",
                padding: "0 6px",
              }}
            >
              right
            </span>{" "}
            to find your next teacher
            <span>👉</span>
          </Title>
          <Deck onFinish={() => setIsOnboarded(true)} />
        </div>
      )}
    </>
  );
}
