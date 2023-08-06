import React from "react";
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export default function Content() {

    return (
      <>
        <main>
          <div className="grid flex-direction">
            <div>
                <img src="./assets/waterColor.png" className="h-10 w-10 rounded-full" alt="" />
                <h1>Yo</h1>
                <p className="font-size-large text-gray-500">my name whaa my name is whaaa</p>
            </div>
            <div></div>
          </div>
          <div></div>
        </main>
      </>
    );

}