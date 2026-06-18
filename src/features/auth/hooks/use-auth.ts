"use client";

import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../services/auth-service";
import { useAuthStore } from "../store/auth-store";
import type { AuthUser } from "../types";

/**
 * Subscribes to Firebase Auth state changes and syncs them into the Zustand
 * auth store. Should be called once near the root of the component tree.
 */
export function useAuthListener() {
  const setUser = useAuthStore((s) => s.setUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const user: AuthUser = {
          uid: firebaseUser.uid,
          email: firebaseUser.email ?? "",
          displayName: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL,
          role: "student", // will be overridden by Firestore user doc in a real app
        };
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, [setUser]);
}

/** Read-only access to the current auth state */
export function useAuth() {
  return useAuthStore((s) => ({
    user: s.user,
    isLoading: s.isLoading,
    isAuthenticated: s.isAuthenticated,
  }));
}
