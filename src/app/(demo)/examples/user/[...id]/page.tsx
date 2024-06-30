import React from "react";

type Props = {
  params: { id: string[] };
};

export default function User({ params }: Props) {
  return (
    <div>
      User:{" "}
      {params.id.map((v) => (
        <span key={v}>{v},</span>
      ))}
    </div>
  );
}
