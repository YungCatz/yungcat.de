import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import Button from "@mui/material/Button";
import {
  CatchingPokemon,
  CatchingPokemonOutlined,
  DarkModeOutlined,
  DarkModeRounded,
  EmojiEmotions,
  EmojiPeopleSharp,
  Home,
  HomeMaxOutlined,
  HomeMaxRounded,
  InsertEmoticonRounded,
} from "@mui/icons-material";
import { Icon, IconButton, Link, Switch, Tooltip } from "@mui/material";

function openHomePage() {
  window.location.href = "./# ";
}

export default function Header() {
  return (
    <>
      <div className="water-color-bg" id=" ">
        <div className="gradient"></div>

        {/*About-me*/}
        <div className="absolute flex flex-col self-center text-center font-roboto">
          <h1 className="text-4xl font-[900] leading-9">Hi my name is Andreas</h1>
          <p className="text-lg/[40px]">I'm a Self-Learning Frontend Developer</p>

        </div>
      </div>

      <header>
        {/*Left-Header*/}
        <div className="ml-4 flex justify-center content-center flex-col">
          <Tooltip title="Home">
            <IconButton
              style={{ color: "white" }}
              size="large"
              className="header-buttons"
              onClick={openHomePage}
            >
              <CatchingPokemonOutlined className="hover:animate-spin" />
            </IconButton>
          </Tooltip>
        </div>

        {/*Middle-Header*/}
        <div className="flex justify-center content-center relative self-center">
          <h1 className="relative text-4xl h1-after-anim">yungcat</h1>
        </div>

        {/*Right-Header*/}
        <div className="mr-4 flex justify-center flex-col content-center justify-self-end">
          <Tooltip title="Theme Changer">
            <IconButton
              style={{ color: "white" }}
              size="large"
              className="header-buttons"
              >
              <DarkModeOutlined fontSize="inherit" />
            </IconButton>
              {/* 
            <Switch defaultChecked color="error"/>
            */}
          </Tooltip>
        </div>
      </header>
    </>
  );
}