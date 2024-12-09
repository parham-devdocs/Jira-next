import Image from "next/image";
import React from "react";

import wave2 from "../public/wave (2).svg";

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mx-36 my-10">
      <div className="flex flex-col">
        <div className="flex justify-center relative h-[500px] overflow-hidden bg-blue-600 rounded-lg">
          <Image
            src={wave2}
            alt="wave image"
            className="absolute left-1/2 transform -translate-x-1/2"
          />
          {/* Place your content inside this div */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 text-white flex flex-col items-center gap-10">
            <div className=" flex items-center space-x-6">
              <Facebook size={35} className=" hover:animate-bounce-up" />
              <Twitter size={35} className=" hover:animate-bounce-up" />
              <Instagram size={35} className=" hover:animate-bounce-up" />
              <Linkedin size={35} className=" hover:animate-bounce-up" />
            </div>
            <div className=" flex items-center space-x-6 text-stone-100 ">
              <Link
                href={"/home"}
                className="hover:text-stone-400 transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href={"/home"}
                className="hover:text-stone-300 transition-colors duration-200"
              >
                About
              </Link>

              <Link
                href={"/home"}
                className="hover:text-stone-300 transition-colors duration-200"
              >
                Service
              </Link>
              <Link
                href={"/home"}
                className="hover:text-stone-300 transition-colors duration-200"
              >
                Team
              </Link>
              <Link
                href={"/home"}
                className="hover:text-stone-300 transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
            <div className=" flex space-x-2">
              <p>©2021 Nadine Coelho</p>
              <hr className=" h-7 w-[1px] bg-white" />
              <p>All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
