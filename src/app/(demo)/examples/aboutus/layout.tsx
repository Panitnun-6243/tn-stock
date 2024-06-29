import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function AboutUsLayout({ children }: Props) {
  return <div>{children}</div>;
}
