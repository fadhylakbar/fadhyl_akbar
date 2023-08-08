import Link from "next/link";
import { useState } from "react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FcCheckmark } from "react-icons/fc";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlinePhone } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const [tab, setTab] = useState(1);

  console.log("test")

  const Projects = [
    {
      name: "BedasMarket",
      link: "https://www.bedasmarket.com/",
      image: "/1.png",
    },
    {
      name: "Riseloka",
      link: "https://www.riseloka.com/",
      image: "/2.png",
    },
    {
      name: "Cleora-ERP",
      link: "",
      image: "/4.png",
    },
    {
      name: "ClerinaMarketing",
      link: "",
      image: "/3.png",
    },
    {
      name: "Admin3Second",
      link: "",
      image: "/5.png",
    },
    {
      name: "RetainCrm",
      link: "",
      image: "/6.png",
    },
  ];

  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center mt-4"
      >
        <span className="text-[20px] font-bold text-slate-700">
          Fadhyl Akbar
        </span>
        <span className="text-[14px] font-semibold text-slate-400">
          Web Frontend Developer
        </span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center mt-8 p-2"
      >
        <div className="flex gap-6 items-center">
          <div className="image">
            <img src="photo.png" />
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col text-center">
              <span className="text-[18px] font-bold text-slate-700">2+</span>
              <span className="text-[12px] font-bold text-slate-400">
                Years of Experiences
              </span>
            </div>
            <div className="flex flex-col text-center">
              <span className="text-[18px] font-bold text-slate-700">8+</span>
              <span className="text-[12px] font-bold text-slate-400">
                Total Projects
              </span>
            </div>
            <div className="flex flex-col text-center">
              <span className="text-[18px] font-bold text-slate-700">17+</span>
              <span className="text-[12px] font-bold text-slate-400">
                Github Projects
              </span>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1 }}
        className="mt-10 p-1 flex rounded-none  sm:rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] "
      >
        <div
          onClick={() => setTab(1)}
          className={`${
            tab === 1 ? "bg-gray-100 text-gray-950" : "text-gray-500"
          }  cursor-pointer hover:bg-gray-100 p-2 flex-1 text-center rounded-none sm:rounded-full hover:text-gray-950`}
        >
          Project
        </div>
        <div
          onClick={() => setTab(2)}
          className={`${
            tab === 2 ? "bg-gray-100 text-gray-950" : "text-gray-500"
          } cursor-pointer hover:bg-gray-100 p-2 flex-1 text-center rounded-none sm:rounded-full hover:text-gray-950`}
        >
          Skill
        </div>
        <div
          onClick={() => setTab(3)}
          className={`${
            tab === 3 ? "bg-gray-100 text-gray-950" : "text-gray-500"
          } cursor-pointer hover:bg-gray-100 p-2 flex-1 text-center rounded-none sm:rounded-full hover:text-gray-950`}
        >
          Contact
        </div>
      </motion.div>
      {tab === 1 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3 }}
          className="mt-6 grid grid-cols-2 gap-2"
        >
          {Projects.map((e, index) => {
            return (
              <Link href={e.link} key={index} className="relative rounded border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]">
                <Image className="rounded" width={300} height={200} src={e.image} alt="Louvre" />
                <div className="rounded hover:animate-fade-in-down cursor-pointer opacity-0 h-full absolute inset-x-0 bottom-0 hover:opacity-80 bg-black flex justify-center items-center">
                  <span className="opacity-1 text-white font-bold text-xl">
                    {e.name}
                  </span>
                </div>
              </Link>
            );
          })}
        </motion.div>
      )}
      {tab === 2 && (
        <div className="mt-6 grid grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="p-3"
          >
            <span className="text-md font-bold text-slate-700">
              Programing Languange
            </span>
            <div className="mt-4 flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                <FcCheckmark />
                <span className="text-slate-700">Javascript</span>
              </div>
              <div className="flex gap-2 items-center">
                <FcCheckmark />
                <span className="text-slate-700">Typescript</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="p-3"
          >
            <span className="text-md font-bold text-slate-700">FrameWork</span>
            <div className="mt-4 flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                <FcCheckmark />
                <span className="text-slate-700">NextJs</span>
              </div>
              <div className="flex gap-2 items-center">
                <FcCheckmark />
                <span className="text-slate-700">ReactJs</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="p-3"
          >
            <span className="text-md font-bold text-slate-700">Styling</span>
            <div className="mt-4 flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                <FcCheckmark />
                <span className="text-slate-700">CSS</span>
              </div>
              <div className="flex gap-2 items-center">
                <FcCheckmark />
                <span className="text-slate-700">SCSS/SASS</span>
              </div>
              <div className="flex gap-2 items-center">
                <FcCheckmark />
                <span className="text-slate-700">Tailwind</span>
              </div>
              <div className="flex gap-2 items-center">
                <FcCheckmark />
                <span className="text-slate-700">Bootstrap</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1 }}
            className="p-3"
          >
            <span className="text-md font-bold text-slate-700">
              Version Control
            </span>
            <div className="mt-4 flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                <FcCheckmark />
                <span className="text-slate-700">Git</span>
              </div>
              <div className="flex gap-2 items-center">
                <FcCheckmark />
                <span className="text-slate-700">Gitlab</span>
              </div>
              <div className="flex gap-2 items-center">
                <FcCheckmark />
                <span className="text-slate-700">Github</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3 }}
            className="p-3"
          >
            <span className="text-md font-bold text-slate-700">Others</span>
            <div className="mt-4 flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                <FcCheckmark />
                <span className="text-slate-700">Postman</span>
              </div>
              <div className="flex gap-2 items-center">
                <FcCheckmark />
                <span className="text-slate-700">Insomnia</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
      {tab === 3 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-6"
        >
          <div className="p-3">
            <div className="mt-4 flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                <CiLocationOn color="grey" size={20} />
                <span className="text-slate-700">Banda Aceh, Indonesia</span>
              </div>
              <div className="flex gap-2 items-center">
                <AiOutlinePhone color="grey" size={20} />
                <span className="text-slate-700">08982143457</span>
              </div>
              <div className="flex gap-2 items-center">
                <BiLogoGmail color="grey" size={20} />
                <span className="text-slate-700">fadhylakbar3@gmail.com</span>
              </div>
              <div className="flex gap-2 items-center">
                <BsInstagram color="grey" size={16} />
                <span className="text-slate-700">fadhyl_akbar</span>
              </div>
              <div className="flex gap-2 items-center">
                <BsLinkedin color="grey" size={16} />
                <span className="text-slate-700">Fadhyl Akbar</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
