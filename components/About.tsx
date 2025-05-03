
import { GiPolarStar } from "react-icons/gi";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import { IoMdLink } from "react-icons/io";
import { RiExternalLinkLine } from "react-icons/ri";


export default function About() {
    return (
        <div className="lg:mt-28 -mt-28 md:-mt-28 w-full">
            <div className=" relative container mx-auto flex justify-center ">
                <div className="flex flex-col justify-start items-center gap-x-20 w-4/5  ">
                    <p className="relative flex justify-start lg:text-xl gap-x-5 items-center text-yellow-500 mb-5 uppercase">
                        <GiPolarStar className="absolute inline-flex animate-ping" />
                        <GiPolarStar className="relative inline-flex" />
                        About Me
                    </p>
                    <p className="text-white lg:text-2xl text-center ">I'm Jakkapet Ladnok, and I have 2 years of experience as a Web Developer. I have strong Fullstack development skills, excel in team collaboration, and am a fast learner. I am capable of working both independently and in teams, always seeking new challenges and opportunities for growth.</p>
                </div>
            </div>
            <div className="container mx-auto  flex flex-col md:flex-row justify-center gap-y-20 px-5 my-28 md:my-28">
                <div className="flex flex-col justify-start items-start   gap-x-20 md:w-4/5 w-full ">
                    <p className="relative flex justify-start lg:text-xl gap-x-5 items-center text-yellow-500 mb-5 uppercase">
                        <GiPolarStar className="absolute inline-flex animate-ping" />
                        <GiPolarStar className="relative inline-flex" />
                        Education
                    </p>
                    <p className="text-white lg:text-2xl ">Bachelor of Science in Information Technology</p>
                    <p className="text-white lg:text-xl ">Mahasarakham University</p>
                    <span className="text-yellow-500">2021 - Present   </span>

                </div>
                <div className="flex flex-col justify-start items-start  gap-x-20 md:w-4/5  w-full ">
                    <p className="relative flex justify-start lg:text-xl gap-x-5 items-center text-yellow-500 mb-5 uppercase">
                        <GiPolarStar className="absolute inline-flex animate-ping" />
                        <GiPolarStar className="relative inline-flex" />
                        Certificate
                    </p>
                    <ul className="space-y-3 text-white w-full ">

                        < li className="text-body-color dark:text-dark-6 flex lg:text-xl items-center gap-x-5">
                            <span
                                className="bg-primary mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center bg-yellow-500 ustify-center rounded-full text-base"
                            >
                            </span>
                            <a href="/pdf/IC3LivingOnlineGlobalStandard5.pdf" className="flex flex-nowrap gap-2" target="_blank" rel="noopener noreferrer">
                                IC3 Living Online - Global Standard 5 <RiExternalLinkLine />
                            </a>
                            <span className="text-yellow-500">2023</span>
                        </li>
                        <li className="text-body-color dark:text-dark-6 flex lg:text-xl items-center gap-x-5">
                            <span
                                className="bg-primary mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center bg-yellow-500 justify-center rounded-full text-base"
                            >
                            </span>
                            <a href="/pdf/IC3ComputingFundamentalsGlobalStandard5.pdf" className="flex flex-nowrap gap-2" target="_blank" rel="noopener noreferrer">
                                IC3 Computing Fundamentals - Global Standard 5 <RiExternalLinkLine />
                            </a>
                            <span className="text-yellow-500">2023</span>
                        </li>
                        <li className="text-body-color dark:text-dark-6 flex lg:text-xl items-center gap-x-5">
                            <span
                                className="bg-primary mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center bg-yellow-500 justify-center rounded-full text-base"
                            >
                            </span>
                            <a href="https://samsungsic-thailand.org/certificate-tutor/?cert_hash=2ecf853836c1435d" className="flex flex-nowrap gap-2" target="_blank" rel="noopener noreferrer">
                                Introduction to Programming with Python<RiExternalLinkLine />
                            </a>
                            <span className="text-yellow-500">2025</span>
                        </li>
                    </ul>

                </div>
            </div >

        </div>


    );
}
