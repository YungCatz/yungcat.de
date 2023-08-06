import React from "react";
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Button from '@mui/material/Button';
import { CatchingPokemon, CatchingPokemonOutlined, DarkModeOutlined, DarkModeRounded, EmojiEmotions, EmojiPeopleSharp, Home, HomeMaxOutlined, HomeMaxRounded, InsertEmoticonRounded } from "@mui/icons-material";
import { Icon, IconButton, Tooltip } from "@mui/material";

function onClick() {
  console.log("yo")
}

function themeSwitch() {
}

function App() {
  return (
    <>
      <div className="water-color-bg">
        <div className="gradient"></div>

        <div className="about-me">
          <h1>Hi my name is Andreas</h1>
          <p>I'm a Self-Learning Frontend Developer</p>
        </div>
      </div>

      <header>
        <div className="left-header">
          <Tooltip title="Home">
            <IconButton style={{ color: "white" }} size="large">
              <CatchingPokemonOutlined />
            </IconButton>
          </Tooltip>
        </div>
        <div className="middle-header">
          <h1>yungcat</h1>
        </div>
        <div className="right-header">
          <Tooltip title="Theme Changer">
            <IconButton style={{ color: "white" }} size="large">
              <DarkModeOutlined fontSize="inherit" />
            </IconButton>
          </Tooltip>
        </div>
      </header>
    </>
  );
}

export default App;
