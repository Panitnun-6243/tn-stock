import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function ExamplesLayout({ children }: Props) {
  return (
    <div>
      <nav>
        <Link href="/examples/dashboard">Dashboard</Link>{" "}
        <Link href="/examples/aboutus">About us</Link>
      </nav>
      {children}
    </div>
  );
}
