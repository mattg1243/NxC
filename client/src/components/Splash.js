import React from "react";
import { Stack, Container } from "@mui/material";

export default function Splash() {
  return (
    <Container>
      <Stack>
        <h1>
          NxC
        </h1>
        <p>
          an integration client for Canvas and Notion
        </p>
        <Stack style={{width: '100%', height: '25vh'}} direction="row" spacing={2}>
          <img style={{width: '7rem', height: '6rem'}} src={require('../assets/canvas_logo.png')} />
          <img style={{width: '8rem', height: '7rem'}} src={require('../assets/right-arrow.png')} />
          <img style={{width: '8rem', height: '7rem'}} src={require('../assets/Notion_app_logo.png')} />
        </Stack>
    </Stack>
    </Container>
    
  )
}