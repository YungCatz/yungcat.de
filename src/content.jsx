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
        <div className="text-center text-lg/[32px] font-roboto font-normal py-20 my-[22rem] text-shadow">
          <h1 className="font-bold text-3xl my-6 tracking-wider drop-shadow-5xl text-shadow">About Me!</h1>
          <p>My name is Andreas. My online nickname is YungCat</p>
          <p>In September of 2022 I started to teach myself</p>
          <p>how to use HTML, CSS, JS and also Java</p>
          <p>with the use of Youtube Courses and many attempts of trying out code</p>
          <p>I want to learn to be more fluent with the Tools I use.</p>
          <p>Feel free to Contact me and have a look at the Projects I have done.</p>
        </div>
      </>
    );

}