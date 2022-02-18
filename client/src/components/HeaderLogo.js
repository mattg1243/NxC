import React from "react";
import { Stack } from "@mui/material";

export default function HeaderLogo() {
  return (

    <Stack style={{width: '100%', height: '25vh'}} direction="row" spacing={2}>
      <img style={{width: '7rem', height: '6rem'}} src={require('../assets/canvas_logo.png')} />
      <img style={{width: '8rem', height: '7rem'}} src={require('../assets/right-arrow.png')} />
      <img style={{width: '8rem', height: '7rem'}} src={require('../assets/Notion_app_logo.png')} />
    </Stack>

  )
}