"use client";

import { useState } from "react";
import { Deck } from "../Deck";
import { Feed } from "../Feed";

export function Home() {
  const [isOnboarded, setIsOnboarded] = useState(false);

  return (
    <>
      {!isOnboarded ? (
        <Feed />
      ) : (
        <div className="flex flex-col h-full items-center justify-center overflow-x-hidden">
          <h1>
            <span>👋</span> Welcome to{" "}
            <a href="https://nextjs.org">SkillSwap</a>
            <br />
            <span>👉</span> Swipe right to find your next teacher
          </h1>
          <Deck onFinish={() => setIsOnboarded(true)} />
        </div>
      )}
    </>
  );
}
