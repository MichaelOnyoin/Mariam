//import { Image } from "@components";
import React from 'react';
import {Image} from 'next/image';


export default function Hero(props) {
  return (
    <Image
      //$name="Cover Image"
      image="https://cdn.builder.io/api/v1/image/assets%2Fef38442f71d54e2a8e3695bf33020234%2F97cdc4c52ba348bea932579f1c392890"
      backgroundSize="cover"
      backgroundPosition="center"
      class="box-border flex overflow-hidden absolute flex-col shrink-0 self-center my-auto w-full h-screen min-h-[20px] min-w-[20px] z-[1] max-md:grow max-md:h-screen"
      lazy={false}
      fitContent={true}
      aspectRatio={0.667}
      lockAspectRatio={false}
      height={1254}
      width={1880}
    />
  );
}