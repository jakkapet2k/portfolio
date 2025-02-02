"use client"
import { IoMdMenu } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";
import { useState } from "react";
import { MdCode } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
export default function Footer() {



    return (
        <div className="  z-50 w-full">
            <div className="container mx-auto flex justify-center md:py-6 z-50 ">
                <nav className="flex bg-[#0b0b0d]/70 backdrop-blur-lg rounded-lg justify-between items-center h-10 px-5 lg:-px-5 gap-x-5 text-white  w-full  py-10">
                    <a href="/" className="text-base font-bold flex ">Jakkapet<span className="text-yellow-500">./</span></a>
                    <p className=" font-thin text-xs text-nowrap "> <span className="hidden">&copy; Copyright 2025. All Rights Reserved </span> Design by Jakkapet.</p>

                </nav>
            </div>
        </div>

    );
}
