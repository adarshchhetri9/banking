"use client";
import { usePathname } from "next/navigation";
import React from "react";

const SignIn = () => {
  const pathname = usePathname();
  console.log(pathname);
  return <div>SignIn {pathname}</div>;
};

export default SignIn;
