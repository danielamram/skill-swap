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
          <Title>
            <span>👉</span> Swipe right to find your next teacher
          </Title>
          <Deck onFinish={() => setIsOnboarded(true)} />
        </div>
      )}
    </>
  );
}
