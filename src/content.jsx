import React from "react";
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
import { Fab, Icon, IconButton, Link, Switch, Tooltip } from "@mui/material";

export default function Content() {

    return (
      <>
        <div className="text-center text-lg/[32px] font-roboto font-normal py-20 px-10 my-[22rem] text-shadow leading-7">
          <h1 className="font-bold text-3xl my-3 tracking-wider drop-shadow-5xl text-shadow">About Me!</h1>
          <p>My name is Andreas. My online nickname is YungCat.</p>
          <p>In September 2022, I started to teach myself</p>
          <p>how to use several "programming" languages</p>
          <p>with the use of YouTube courses and many attempts at trying out code.</p>
          <p>I want to learn to be more fluent with the tools I use.</p>
          <p>Feel free to contact me and take a look at the projects I have done.</p>
        </div>
      </>
    );

}