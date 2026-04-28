"use client";

import { BackButtonProps } from "@/interface";
import { useRouter } from "next/navigation";
import Button from "./Button";

export default function BackButton({
  children = "Back",
  fallbackHref = "/",
  leftIcon = <span>←</span>,
  onClick,
  ...rest
}: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    // if custom onClick provided → use it
    if (onClick) {
      onClick();
      return;
    }

    // browser history back
    if (window.history.length > 1) {
      router.back();
    } else {
      // fallback if no history
      router.push(fallbackHref);
    }
  };

  return (
    <Button
      onClick={handleBack}
      leftIcon={leftIcon}
      variant="secondary"
      {...rest}
    >
      {children}
    </Button>
  );
}
