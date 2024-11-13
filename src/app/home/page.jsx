import React from 'react'
import Header from '@/components/header/header';
import Hero from '@/components/landing';
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";


export default function Page(){
  return(
    <div>
      {/* <Header/> */}
      <Hero/>

    </div>
  );
}
