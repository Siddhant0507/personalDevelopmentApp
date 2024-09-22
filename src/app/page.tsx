"use client";
import {
  UserButton,
  SignedIn,
  SignOutButton,
} from "@clerk/nextjs";
import { Authenticated, Unauthenticated, useQuery } from "convex/react";
import "./globals.css";
import FirstScreen from "./auth/FirstScreen";
import HomePage from "./root/HomePage";

export default function Home() {
  return (
    <main>
      <Unauthenticated>
        <FirstScreen />
      </Unauthenticated>

      <Authenticated>
        <HomePage/>
      </Authenticated>
    </main>
  );
}
