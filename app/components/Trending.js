"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export default function Trending() {
    return (
        <center>
            <div>
                &nbsp;
            </div>
            <div>
                <span className="text-5xl text-white py-10 font-bold font-serif"> TRENDING </span>
            </div>
            <section className="grid grid-cols-3">
                <div className="col-span-1">
                    <CardContainer className="inter-var w-[50vh]">
                        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                Make things float in air
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                Hover over this card to unleash the power of CSS perspective
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <img src="/img/Books.jpg" className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"></img>
                            </CardItem>
                            <div className="flex justify-between items-center mt-20">
                                <CardItem>
                                    &nbsp;
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as="button"
                                    href="https://twitter.com/mannupaaji"
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    Get it now →
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                </div>
                <div className="col-span-1">
                    <CardContainer className="inter-var w-[50vh] ">
                        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                Make things float in air
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                Hover over this card to unleash the power of CSS perspective
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <img src="/img/Books.jpg" className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"></img>
                            </CardItem>
                            <div className="flex justify-between items-center mt-20">
                                <CardItem>
                                    &nbsp;
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as="button"
                                    href="https://twitter.com/mannupaaji"
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    Get it now →
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                </div>
                <div className="col-span-1">
                    <CardContainer className="inter-var w-[50vh] ">
                        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                Make things float in air
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                Hover over this card to unleash the power of CSS perspective
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <img src="/img/Books.jpg" className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"></img>
                            </CardItem>
                            <div className="flex justify-between items-center mt-20">
                                <CardItem>
                                    &nbsp;
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as="button"
                                    href="https://twitter.com/mannupaaji"
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    Get it now →
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                </div>
                <div className="col-span-1">
                    <CardContainer className="inter-var w-[50vh] h-[50vh]">
                        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                Make things float in air
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                Hover over this card to unleash the power of CSS perspective
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <img src="/img/Books.jpg" className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"></img>
                            </CardItem>
                            <div className="flex justify-between items-center mt-20">
                                <CardItem>
                                    &nbsp;
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as="button"
                                    href="https://twitter.com/mannupaaji"
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    Get it now →
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                </div>
                <div className="col-span-1">
                    <CardContainer className="inter-var w-[50vh] h-[50vh]">
                        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                Make things float in air
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                Hover over this card to unleash the power of CSS perspective
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <img src="/img/Books.jpg" className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"></img>
                            </CardItem>
                            <div className="flex justify-between items-center mt-20">
                                <CardItem>
                                    &nbsp;
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as="button"
                                    href="https://twitter.com/mannupaaji"
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    Get it now →
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                </div>
                <div className="col-span-1">
                    <CardContainer className="inter-var w-[50vh] h-[50vh]">
                        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                Make things float in air
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                Hover over this card to unleash the power of CSS perspective
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <img src="/img/Books.jpg" className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"></img>
                            </CardItem>
                            <div className="flex justify-between items-center mt-20">
                                <CardItem>
                                    &nbsp;
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as="button"
                                    href="https://twitter.com/mannupaaji"
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    Get it now →
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                </div>
                <div>
                    &nbsp;
                </div>
            </section>
        </center>
    )
}