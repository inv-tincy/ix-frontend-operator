import AuthenticationLayout from "@/layouts/AuthenticationLayout";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InterviewX",
  description: "InterviewX application",
};

function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <AuthenticationLayout>{children}</AuthenticationLayout>;
}

export default AuthLayout;
