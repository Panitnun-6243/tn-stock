"use client";

import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  searchParams: {
    id?: string;
  };
};

export default function Dashboard({ searchParams }: Props) {
  const router = useRouter();
  return (
    <div>
      <b>Dashboard</b>
      <br />
      <button type="button" onClick={() => router.push("/examples/aboutus")}>
        Go to about us button
      </button>
      <br />
      <span>Search params value: {searchParams.id}</span>
    </div>
  );
}
