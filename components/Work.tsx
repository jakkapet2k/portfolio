import { GiPolarStar } from "react-icons/gi";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { RiExternalLinkLine } from "react-icons/ri";
import { PiShootingStarFill } from "react-icons/pi";

export default function Work() {

    return (
        <>
            <div className="text-white">

                <div className=" relative container mx-auto flex justify-start  w-full">

                    <div className="flex flex-col lg:flex-row md:space-x-56 mx-4 ">
                        <div className="lg:w-1/5 w-full flex justify-center lg:justify-start">
                            <div className=" text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-600">
                                <p className="relative flex justify-start text-xl gap-x-5 items-center text-yellow-500 mb-5 uppercase">
                                    <GiPolarStar className="absolute inline-flex animate-ping" />
                                    <GiPolarStar className="relative inline-flex" />
                                    experience
                                </p>

                            </div>
                        </div>

                        <div className="lg:w-2/3">
                            <div className="ps-2 my-2 first:mt-0">
                                <h3 className="text-base font-medium uppercase text-yellow-500">
                                    December 2024 - Present
                                </h3>
                            </div>


                            <div className="flex gap-x-3">
                                <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px]  after:bg-yellow-500 dark:after:bg-orange-500">
                                    <div className="relative z-10 size-7 flex justify-center items-center">
                                        <div className="size-2 rounded-full bg-yellow-500"></div>
                                    </div>
                                </div>

                                <div className="grow pt-0.5 pb-8 w-full">
                                    <h3 className="flex gap-x-1.5 font-semibold text-white text-xl lg:text-2xl">
                                        ClickNext co.,ltd.
                                    </h3>
                                    <p className="mt-5 lg:text-base  text-white">
                                        Interned as a Full Stack Developer, responsible for developing web applications on both the Front-End and Back-End. Designed and implemented APIs to efficiently connect and transfer data, enhancing features and functionality for users while ensuring seamless communication between systems
                                    </p>
                                    <Accordion type="single" defaultValue="thewin-project" collapsible >
                                        <AccordionItem value="thewin-project" className="bg-[#0c0c0e] px-3 my-3 rounded-xl">
                                            <AccordionTrigger className="text-yellow-500 uppercase lg:text-base">
                                                <p className="flex items-center gap-2"> <span className="size-2 rounded-full bg-yellow-500"></span> Project</p>
                                            </AccordionTrigger>
                                            <AccordionContent className="my-3 w-[330px] lg:w-[850px]">
                                                <div className="space-y-5">
                                                    <h4 className="text-base font-medium leading-none flex flex-nowrap gap-3"><PiShootingStarFill className="text-yellow-500" />GSB Merchant Back Office </h4>
                                                    <p className="text- text-gray-400 px-5 ">
                                                        Developed the Front-End and Back-End of the project. For the Front-End, created a website and features for reporting various store data. For the Back-End, developed APIs to efficiently handle data transfer between the Front-End and Back-End
                                                    </p>
                                                </div>
                                                <Separator className="bg-[#2c2c34] my-3" />
                                                <div className="flex h-5 items-center space-x-4 text-xs">
                                                    <div>Nuxt js</div>
                                                    <Separator orientation="vertical" className="bg-[#2c2c34]" />
                                                    <div>Vuetify</div>
                                                    <Separator orientation="vertical" className="bg-[#2c2c34]" />
                                                    <div> December 2024 - Present</div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </div>

                            <div className="flex gap-x-3">
                                <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-yellow-500 dark:after:bg-orange-500">
                                    <div className="relative z-10 size-7 flex justify-center items-center">
                                        <div className="size-2 rounded-full bg-yellow-500"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="ps-2 my-2 first:mt-0">
                                <h3 className="text-base font-medium uppercase text-yellow-500">
                                    July 2023 - December 2024
                                </h3>
                            </div>


                            <div className="flex gap-x-3">
                                <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px]  after:bg-yellow-500 dark:after:bg-orange-500">
                                    <div className="relative z-10 size-7 flex justify-center items-center">
                                        <div className="size-2 rounded-full bg-yellow-500"></div>
                                    </div>
                                </div>

                                <div className="grow pt-0.5 pb-8 w-full">
                                    <h3 className="flex gap-x-1.5 font-semibold text-white text-xl lg:text-2xl">
                                        Thewin dev tech co.,ltd.
                                    </h3>
                                    <p className="mt-5 lg:text-base  text-white">
                                        A Frontend Developer primarily focused on developing web applications, with some experience in API Backend development for certain projects.
                                    </p>
                                    <Accordion type="single" defaultValue="thewin-project" collapsible >
                                        <AccordionItem value="thewin-project" className="bg-[#0c0c0e] px-3 my-3 rounded-xl">
                                            <AccordionTrigger className="text-yellow-500 uppercase lg:text-base">
                                                <p className="flex items-center gap-2"> <span className="size-2 rounded-full bg-yellow-500"></span> Project</p>
                                            </AccordionTrigger>
                                            <AccordionContent className="my-3 w-[330px] lg:w-[850px]">
                                                <div className="space-y-5">
                                                    <h4 className="text-base font-medium leading-none flex flex-nowrap gap-3"><PiShootingStarFill className="text-yellow-500" />Clinic Management Web Application Project  </h4>
                                                    <p className="text- text-gray-400 px-5 ">
                                                        Developed backend using Express and Node.js, designing and implementing APIs based on design specifications and user requirements. Additionally, developed the frontend and integrated APIs to create dashboards and reporting pages for efficient management of employee and clinic data, including features for activity tracking and stock management.
                                                    </p>
                                                </div>
                                                <Separator className="bg-[#2c2c34] my-3" />
                                                <div className="flex h-5 items-center space-x-4 text-xs">
                                                    <div>Next js</div>
                                                    <Separator orientation="vertical" className="bg-[#2c2c34]" />
                                                    <div> July - August 2024</div>
                                                </div>
                                            </AccordionContent>

                                            <AccordionContent className="my-3 w-[330px] lg:w-[850px] ">
                                                <div className="space-y-5">
                                                    <h4 className="text-base font-medium leading-none flex flex-nowrap gap-3"><PiShootingStarFill className="text-yellow-500" />Application for management monitoring&reporting fiber
                                                        optic system</h4>
                                                    <p className="text- text-gray-400 px-5 ">
                                                        Worked as a DevOps with Bitbucket and Git server on Ubuntu, and developed the frontend of a web application for administration and technicians
                                                    </p>
                                                </div>
                                                <Separator className="bg-[#2c2c34] my-3" />
                                                <div className="flex h-5 items-center space-x-4 text-xs text-nowrap">
                                                    <div>Angular js, .Net </div>
                                                    <Separator orientation="vertical" className="bg-[#2c2c34]" />
                                                    <div> May 2023-May 2024</div>

                                                    <Separator orientation="vertical" className="bg-[#2c2c34]" />
                                                    <div> Contract with Software house companies(The details are proprietary.)</div>
                                                </div>
                                            </AccordionContent>

                                            <AccordionContent className="my-3 w-[330px] lg:w-[850px]">
                                                <div className="space-y-5">
                                                    <h4 className="text-base font-medium leading-none flex flex-nowrap gap-3"><PiShootingStarFill className="text-yellow-500" /> Social media application</h4>
                                                    <p className="text- text-gray-400 px-5 ">
                                                        Developed the frontend and integrated with the backend API of the web application using NuxtJS, while managing the server on Ubuntu
                                                    </p>
                                                </div>
                                                <Separator className="bg-[#2c2c34] my-3" />
                                                <div className="flex h-5 items-center space-x-4 text-xs">
                                                    <div>Next js</div>
                                                    <Separator orientation="vertical" className="bg-[#2c2c34]" />
                                                    <div> October 2022-August 2023</div>

                                                    <Separator orientation="vertical" className="bg-[#2c2c34]" />
                                                    <div> Contract with Software house companies(The details are proprietary.)</div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>

                                </div>
                            </div>

                            <div className="ps-2 my-2 first:mt-0">
                                <h3 className="text-base font-medium uppercase text-yellow-500">
                                    August 2021 - December 2022
                                </h3>
                            </div>


                            <div className="flex gap-x-3">
                                <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px]  after:bg-yellow-500 dark:after:bg-orange-500">
                                    <div className="relative z-10 size-7 flex justify-center items-center">
                                        <div className="size-2 rounded-full bg-yellow-500"></div>
                                    </div>
                                </div>

                                <div className="grow pt-0.5 pb-8 w-full">
                                    <h3 className="flex gap-x-1.5 font-semibold text-white text-xl lg:text-2xl">
                                        Creating Digital Platforms and Virtual Environments at Mahasarakham University
                                    </h3>
                                    <p className="mt-5 lg:text-base  text-white">
                                        University Projects: Developed Frontend for the EDV Metaverse for Sale Digital Land Web Application and EDV NFT Marketplace Project using Next.js
                                    </p>
                                    <Accordion type="single" defaultValue="university-project" collapsible >
                                        <AccordionItem value="university-project" className="bg-[#0c0c0e] px-3 my-3 rounded-xl">
                                            <AccordionTrigger className="text-yellow-500 uppercase lg:text-base">
                                                <p className="flex items-center gap-2"> <span className="size-2 rounded-full bg-yellow-500"></span> Project</p>
                                            </AccordionTrigger>
                                            <AccordionContent className="my-3 w-[330px] lg:w-[850px]">
                                                <div className="space-y-5">
                                                    <h4 className="text-base font-medium leading-none flex flex-nowrap gap-3"><PiShootingStarFill className="text-yellow-500" />EDV Metaverse for sale digital land web application  </h4>
                                                    <p className="text- text-gray-400 px-5 ">
                                                        Developed the frontend, integrated APIs from the backend, and designed the website's UI/UX
                                                    </p>
                                                </div>
                                                <Separator className="bg-[#2c2c34] my-3" />

                                                <div className="flex h-5  items-center space-x-4 text-xs">
                                                    <div>Next js</div>
                                                    <Separator orientation="vertical" className="bg-[#2c2c34]" />
                                                    <div>Tailwind</div>
                                                    <Separator orientation="vertical" className="bg-[#2c2c34]" />
                                                    <div><a className="flex items-center flex-nowrap gap-3  text-yellow-500 hover:underline" href="https://edvmetaverse.io">edvmetaverse.io <RiExternalLinkLine /></a></div>
                                                </div>
                                            </AccordionContent>
                                            <AccordionContent className="my-3">
                                                <div className="space-y-5">
                                                    <h4 className="text-base font-medium leading-none flex flex-nowrap gap-3"><PiShootingStarFill className="text-yellow-500" />EDV NFT Marketplace Project </h4>
                                                    <p className="text- text-gray-400 px-5 ">
                                                        Developed the frontend of websites, integrated APIs, and designed website interfaces.
                                                    </p>
                                                </div>
                                                <Separator className="bg-[#2c2c34] my-3" />
                                                <div className="flex h-5  items-center space-x-4 text-xs">
                                                    <div>Next js</div>
                                                    <Separator orientation="vertical" className="bg-[#2c2c34]" />
                                                    <div>Tailwind</div>
                                                    <Separator orientation="vertical" className="bg-[#2c2c34]" />
                                                    <div><a className="flex items-center flex-nowrap gap-3  text-yellow-500 hover:underline" href="https://nft.edvmetaverse.io">nft.edvmetaverse.io <RiExternalLinkLine /></a></div>
                                                </div>
                                            </AccordionContent>

                                        </AccordionItem>
                                    </Accordion>
                                </div>

                            </div>

                            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px]  after:bg-yellow-500 dark:after:bg-orange-500">
                                <div className="relative z-10 size-7 flex justify-center items-center">
                                    <div className="size-2 rounded-full bg-yellow-500"></div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );

}