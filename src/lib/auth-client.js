// src/lib/auth-client.js — Client-side BetterAuth hooks
"use client";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "https://tilesgallery.vercel.app",
});

// Named exports used throughout the app
export const { signIn, signOut, signUp, useSession, updateUser } = authClient;
