import { Button, Stack } from "@mui/material";
import React from "react";

type Props = {};

export default function MuiDemo({}: Props) {
  return (
    <div>
      MuiDemo
      <br />
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </div>
  );
}
