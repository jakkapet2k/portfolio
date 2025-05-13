
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { MdDownload, MdWavingHand } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { IoLogoLinkedin, IoIosMail, IoIosCodeDownload, IoIosDownload } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";


export default function Home() {



    return (
        <div className="relative container mx-auto  px-4 -mt-36  lg:-mt-1 w-full">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-28">
                <div className="flex items-end justify-end overflow-hidden w-72  lg:w-96 bg-transparent rounded-ee-[100px]  relative shadow">
                    <img src="/profile.png" alt="" className="object-cover rounded-ee-full shadow-xl z-10 w-full lg:w-auto" />
                    <CardSpotlight className="p-0 w-full bg-transparent absolute border-none">
                        <div className="w-27 h-96 border border-yellow-500 rounded-ee-[100px] m-5"></div>
                        <div className="bg-yellow-400 w-16 h-16 mr-14 rounded-ee-full rounded-ss-full mb-12 absolute"></div>
                    </CardSpotlight>
                </div>
                <div className="text-left text-xl md:text-2xl lg:text-5xl  font-normal text-white md:mt-5">
                    <p className="relative flex justify-start text-xl md: gap-x-5 items-center text-yellow-500 mb-5 ">
                        <MdWavingHand className="absolute inline-flex animate-ping" />
                        <MdWavingHand className="relative inline-flex" />
                        Hey! It's me Jakkapet
                    </p>
                    <p className="w-full text-xl md:text-2xl lg:text-7xl font-bold">
                        Failure is a valuable lesson <br className="hidden lg:block" />and <span className="text-yellow-500">experience </span>
                    </p>
                    <hr className="border-1 border-white/10 mt-10" />
                    <div className="flex flex-col md:flex-row gap-7 mt-5 text-gray-600 items-center justify-between">
                        <div className=" hidden  md:flex lg:flex-row gap-7 text-gray-600 items-center">
                            <a href="https://github.com/jakkapet2k" target="_blank" className="flex text-xs lg:text-base gap-x-3 uppercase hover:text-white transition-colors duration-300" rel="noopener noreferrer">
                                <FaGithub className="text-lg lg:text-2xl" /> Github
                            </a>
                            <a href="https://www.linkedin.com/in/jakkapet-ladnok/" target="_blank" className="flex text-xs lg:text-base gap-x-3 uppercase hover:text-white transition-colors duration-300" rel="noopener noreferrer">
                                <IoLogoLinkedin className="text-lg lg:text-2xl" /> LinkedIn
                            </a>
                            <a href="mailto:yourname@example.com" target="_blank" className="flex text-xs lg:text-base gap-x-3 uppercase hover:text-white transition-colors duration-300" rel="noopener noreferrer">
                                <IoIosMail className="text-lg lg:text-2xl" /> Gmail
                            </a>
                            <a href="https://www.facebook.com/JakkapetLardnork" target="_blank" className="flex text-xs lg:text-base gap-x-3 uppercase hover:text-white transition-colors duration-300" rel="noopener noreferrer">
                                <FaFacebookSquare className="text-lg lg:text-2xl" /> Facebook
                            </a>
                        </div>
                        <a href="/pdf/Resume.pdf" className="text-base border border-yellow-500 rounded-full p-1 text-white cursor-pointer w-full md:w-56" target="_blank" rel="noopener noreferrer">
                            <div className="md:hover:bg-[#eaa208] bg-[#eaa208] md:bg-transparent px-5 w-full text-center rounded-full  md:hover:text-black md:text-white text-black transition-colors duration-300 text-nowrap text-sm flex items-center justify-center gap-x-3">Resume <IoIosDownload className="text-lg lg:text-2xl" /></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
