"use client";

import React from "react";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

type GetStartedProps = {
  children: React.ReactNode;
};

const btnClasses = cn(buttonVariants(), "w-32 py-4");

function GetStartedButton({ children }: GetStartedProps) {
  return (
    <Button asChild className={btnClasses}>
      <Link href="/">{children}</Link>
    </Button>
  );
}

export default GetStartedButton;
