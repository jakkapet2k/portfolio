import { FaCode } from "react-icons/fa6";
import { GiPolarStar } from "react-icons/gi";
import { SiRetool } from "react-icons/si";
import { ImDatabase } from "react-icons/im";
export default function Skill() {
    return (
        <div className="my-28">
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                <div className="relative text-gray-100 flex flex-col items-center">
                    <p className="relative flex justify-start text-2xl font-bold gap-x-5 items-center text-yellow-500 mb-5 uppercase">
                        <GiPolarStar className="absolute inline-flex animate-ping" />
                        <GiPolarStar className="relative inline-flex" />
                        My skill
                    </p>
                </div>
                <div
                    className="lg:mt-16 grid divide-x divide-y divide-gray-600 overflow-hidden rounded-3xl border text-gray-600 border-gray-600  lg:grid-cols-3 lg:divide-y-0 xl:grid-cols-3">
                    <div className="group relative bg-[#141416] transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                        <div className="relative space-y-8 py-12 p-8  flex flex-col items-center">
                            <FaCode className=" text-3xl lg:text-5xl text-yellow-500" />
                            <div className="space-y-2">
                                <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">Software & Web Development</h5>
                                <p className="text-gray-300"> I primarily develop websites using Node.js, NextJS, and NuxtJS, with TypeScript, JavaScript, HTML, and CSS more frequently than other languages and tools such as PHP, Laravel, Go, Dart, React, and Tailwind.</p>
                            </div>
                        </div>
                    </div>

                    <div className="group relative bg-[#141416] transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                        <div className="relative space-y-8 py-12 p-8 flex flex-col items-center  ">
                            <SiRetool className="text-3xl lg:text-5xl text-yellow-500" />
                            <div className="space-y-2">
                                <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">Database</h5>
                                <p className="text-gray-300">I have experience working with various databases, including Oracle, MySQL, PostgreSQL, and MongoDB, for storing data in my projects.</p>
                            </div>
                        </div>
                    </div>
                    <div className="group relative bg-[#141416] transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                        <div className="relative space-y-8 py-12 p-8 flex flex-col items-center">
                            <ImDatabase className="text-3xl lg:text-5xl text-yellow-500" />
                            <div className="space-y-2">
                                <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">Other</h5>
                                <p className="text-gray-300">I'm proficient in using various tools such as Git, GitHub, Bitbucket, Docker, Figma, ChatGPT, Postman, and DBeaver to enhance project development and team collaboration.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
