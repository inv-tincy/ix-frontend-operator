import DashboardLayout from "@/layouts/DashboardLayout";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InterviewX",
  description: "InterviewX application",
};

function AppLayout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}

export default AppLayout;
