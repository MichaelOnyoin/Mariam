//import { Show } from "../..";
//import { CoreSection, Image, CoreButton, BuilderAccordion } from "@components";
import React from 'react';
import {Image} from 'next/image';
import { Button, Section} from "@radix-ui/themes";
import Accordion from '../accordion';

export default function Header(props) {
  return (
    <Section
      $name="Navigation"
      class="box-border flex relative flex-col shrink-0 px-5 py-2 h-auto shadow-sm grow-0"
      maxWidth={null}
      lazyLoad={false}
    >
      <div class="flex flex-row w-full max-md:justify-start max-md:items-start max-sm:items-center">
        <div class="flex relative flex-row gap-5 justify-between items-center self-stretch my-3 w-full">
          <div
            $name="Site links"
            class="flex relative flex-row self-stretch pr-0 grow-[1.1674179080885916] max-md:items-center max-md:my-auto max-md:mr-auto max-md:w-full max-sm:justify-start"
          >
            <Image
              image="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F1bc483cb64c5410099c519ed6e11be05"
              backgroundSize="contain"
              backgroundPosition="center"
              class="box-border flex overflow-hidden relative flex-col shrink-0 mx-auto w-full max-h-12 max-w-[89px] min-h-[20px] min-w-[20px] max-md:grow max-md:mr-auto max-md:ml-0 max-md:w-auto max-sm:mr-auto max-sm:max-h-[42px] max-sm:max-w-[53px] max-sm:min-w-[42px]"
              lazy={false}
              
              fitContent={true}
              aspectRatio={0.7847}
              lockAspectRatio={false}
              noWebp={true}
              height={130}
              width={129}
            />
            <div class="flex relative flex-col pr-0 mt-3.5 grow-[3.1608208817763215] max-md:hidden max-md:flex-row max-md:mt-0 max-md:mr-auto max-sm:hidden">
              <div class="flex relative flex-row gap-4 justify-start self-stretch max-md:justify-center">
                <div class="box-border flex relative flex-col shrink-0 leading-[normal]">
                  <p>Home</p>
                </div>
                <div class="box-border flex relative flex-col shrink-0 leading-[normal]">
                  <p>Services</p>
                </div>
                <div class="box-border flex relative flex-col shrink-0 ml-0.5 leading-[normal] max-md:mx-0.5">
                  <p>About Me</p>
                </div>
                <div class="box-border flex relative flex-col shrink-0 ml-2.5 leading-[normal] max-md:mx-2.5">
                  <p>Contact</p>
                </div>
              </div>
            </div>
          </div>
          <div
            $name="CTAs"
            class="flex relative flex-row mt-0 ml-auto w-auto grow-0 max-md:hidden max-sm:hidden"
          >
            <Button
              text="Request my Services"
              class="box-border flex relative flex-col shrink-0 p-3 mr-4 ml-auto text-center text-black rounded appearance-none cursor-pointer grow-0"
              openLinkInNewTab={false}
            />
            <div class="box-border flex relative flex-col shrink-0 my-auto ml-0 w-0.5 h-8 bg-stone-300" />
            <div class="flex relative flex-row gap-4 pr-0 ml-4">
              <Button
                text="Shop Now"
                class="box-border flex relative flex-col shrink-0 p-3 text-center rounded appearance-none cursor-pointer bg-[black] grow-0 text-[white]"
                openLinkInNewTab={false}
              />
            </div>
          </div>
        </div>
        <Image
          $name="Hamburger Menu"
          image="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F0663bd40b99a4259a807f6f0014df73d"
          backgroundSize="cover"
          backgroundPosition="center"
          class="box-border hidden overflow-hidden relative flex-col shrink-0 mt-5 w-full min-h-[20px] min-w-[20px] max-md:flex max-md:w-6 max-md:h-6 max-md:max-w-[48px] max-sm:flex max-sm:mt-0 max-sm:ml-auto max-sm:w-6 max-sm:h-6"
          onClick={(event) => {
            state.show = !state.show;
          }}
          lazy={false}
          fitContent={true}
          aspectRatio={0.2582}
          lockAspectRatio={false}
          noWebp={true}
          height={24}
          width={24}
        />
      </div>
      
        <Accordion
          gridRowWidth="25%"
          class="box-border flex relative flex-col shrink-0 mt-5 max-md:flex max-sm:flex"
          items={[
            {
              title: [
                {
                  "@type": "@builder.io/sdk:Element",
                  "@version": 2,
                  layerName: "Accordion item title",
                  id: "builder-66b45a8860974991aa56f964d6a8c645",
                  children: [
                    {
                      "@type": "@builder.io/sdk:Element",
                      "@version": 2,
                      id: "builder-0917904efa154c888e3d41a8eeb0e840",
                      component: {
                        name: "Text",
                        options: {
                          text: "Product",
                        },
                      },
                      responsiveStyles: {
                        large: {
                          textAlign: "left",
                          display: "flex",
                          flexDirection: "column",
                        },
                      },
                    },
                  ],
                  responsiveStyles: {
                    large: {
                      position: "relative",
                      display: "flex",
                      alignItems: "stretch",
                      flexDirection: "column",
                      paddingBottom: "10px",
                      backgroundColor: "rgba(234, 234, 234, 1)",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      paddingTop: "10px",
                    },
                    medium: {
                      backgroundColor: "rgba(255, 255, 255, 1)",
                    },
                  },
                },
              ],
              detail: [],
            },
            {
              title: [
                {
                  "@type": "@builder.io/sdk:Element",
                  "@version": 2,
                  layerName: "Accordion item title",
                  id: "builder-9dbfd94be1fe4474927e60ec52b605d2",
                  children: [
                    {
                      "@type": "@builder.io/sdk:Element",
                      "@version": 2,
                      id: "builder-17e0e0e11eb74846adbca628fa9d4a08",
                      component: {
                        name: "Text",
                        options: {
                          text: "Solution",
                        },
                      },
                      responsiveStyles: {
                        large: {
                          textAlign: "left",
                          display: "flex",
                          flexDirection: "column",
                        },
                      },
                    },
                  ],
                  responsiveStyles: {
                    large: {
                      position: "relative",
                      display: "flex",
                      alignItems: "stretch",
                      flexDirection: "column",
                      paddingBottom: "10px",
                      backgroundColor: "rgba(234, 234, 234, 1)",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      paddingTop: "10px",
                    },
                    medium: {
                      backgroundColor: "rgba(255, 255, 255, 1)",
                    },
                  },
                },
              ],
              detail: [],
            },
            {
              title: [
                {
                  "@type": "@builder.io/sdk:Element",
                  "@version": 2,
                  layerName: "Accordion item title",
                  id: "builder-863fe9f8eeea45e09e1f23cb0693be64",
                  children: [
                    {
                      "@type": "@builder.io/sdk:Element",
                      "@version": 2,
                      id: "builder-76930ea9eda544439e4ed2dadd3b2d15",
                      component: {
                        name: "Text",
                        options: {
                          text: "Resources",
                        },
                      },
                      responsiveStyles: {
                        large: {
                          textAlign: "left",
                          display: "flex",
                          flexDirection: "column",
                        },
                      },
                    },
                  ],
                  responsiveStyles: {
                    large: {
                      position: "relative",
                      display: "flex",
                      alignItems: "stretch",
                      flexDirection: "column",
                      paddingBottom: "10px",
                      backgroundColor: "rgba(234, 234, 234, 1)",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      paddingTop: "10px",
                    },
                    medium: {
                      backgroundColor: "rgba(255, 255, 255, 1)",
                    },
                  },
                },
              ],
              detail: [],
            },
          ]}
          oneAtATime={(event) => false}
          grid={false}
          useChildrenForItems={false}
        />
      
    </Section>
  );
}
