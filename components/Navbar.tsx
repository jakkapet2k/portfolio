"use client"
import { IoMdMenu } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";
import { useState } from "react";
import { MdCode } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <div className=" fixed z-50 w-full">
            <div className="container mx-auto flex justify-center md:py-6 z-50 ">
                <nav className="flex bg-[#0b0b0d]/70 backdrop-blur-lg rounded-lg justify-between items-center h-10 px-5 lg:-px-5 gap-x-20 text-white  w-full">
                    <a href="/" className="text-2xl font-bold flex md:hidden">Jakkapet<span className="text-yellow-500">./</span></a>
                    <p className="text-2xl font-bold hidden md:flex text-white">Web Developer.<FaCode className="text-yellow-500 text-4xl" /></p>
                    <div className="md:block hidden text-base text-gray-500 uppercase">
                        <a href="/" className="text-2xl font-bold text-white">Jakkapet<span className="text-yellow-500">./</span></a>
                        {/* <a href="/" className="p-4 hover:text-yellow-500">Home</a>
                    <a href="/about" className="p-4 hover:text-yellow-500">About me</a>
                    <a href="/about" className="p-4 hover:text-yellow-500">Resume</a>
                    <a href="/projects" className="p-4 hover:text-yellow-500">Projects</a>
                    <a href="/contact" className="p-4 hover:text-yellow-500">Contact</a> */}
                    </div>
                    <button className="hover:text-yellow-500 md:block hidden"><RiContactsFill /></button>
                    {/* <button
                    className="hover:text-yellow-500 md:hidden block text-2xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <IoMdMenu />
                </button> */}
                    {/* {
                    isMenuOpen && (
                        <div className="absolute top-16 left-0 w-full bg-[#0b0b0d] text-white flex flex-col items-center md:hidden border-b-2 border-yellow-500 transition-transform duration-1000 ease-in-out transform translate-y-0">
                            <a href="/" className="p-4 hover:text-yellow-500 hover:bg-[#141418] w-full text-center border-b-[1px] border-[#16161a]">Home</a>
                            <a href="/about" className="p-4 hover:text-yellow-500 hover:bg-[#141418] w-full text-center border-b-[1px]  border-[#16161a]">About me</a>
                            <a href="/about" className="p-4 hover:text-yellow-500 hover:bg-[#141418] w-full text-center border-b-[1px]  border-[#16161a]">Resume</a>
                            <a href="/projects" className="p-4 hover:text-yellow-500 hover:bg-[#141418] w-full text-center border-b-[1px]  border-[#16161a]">Projects</a>
                            <a href="/contact" className="p-4 hover:text-yellow-500 hover:bg-[#141418] w-full text-center ">Contact</a>
                        </div>
                    )
                } */}
                </nav>
            </div>
        </div>

    );
}
