"use client"

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import store from "./../../store/index";

const FadeEffect = () => {
  const isFade = useSelector((state) => state.ui.fade);

  useEffect(() => {
    handleFadeOut();
  }, [isFade]);

  const handleFadeOut = () => {
    setTimeout(() => {
      // Perform any additional actions after fade-out completes
    }, 1000); // Match the animation duration
  };

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen bg-black z-[99] pointer-events-none transition-opacity duration-1000 ${
        isFade ? "opacity-100 pointer-events-auto" : "opacity-0"
      }`}
    />
  );
};

export default FadeEffect;

export async function callFadeTransition(dispatch, duration) {
  // Trigger fade effect
  await dispatch(uiActions.updateFade({ change: "CALL" }));
  // Wait for the duration
  await delay(duration);
  // Clear the fade
  await dispatch(uiActions.updateFade({ change: "CLEAR" }));
}

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
