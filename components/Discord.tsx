"use client";
import { FC } from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { TypewriterEffectSmoothDemo } from "./TagLine";
interface DiscordButtonProps {}

const DiscordButton: FC<DiscordButtonProps> = () => {
  return (
    <div className=" md:ml-8 ml-4 sm:mt-16 mt-16 md:mt-28 p-4 ">
      <div>
        <div className="mt-4">
          <TypewriterEffectSmoothDemo />
        </div>
       
      </div>
    </div>
  );
};

export default DiscordButton;
