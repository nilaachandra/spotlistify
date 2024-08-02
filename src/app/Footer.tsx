import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaFireAlt } from "react-icons/fa";
import { RiFeedbackFill } from "react-icons/ri";
import { FaHandshakeAngle } from "react-icons/fa6";
import { MdQueueMusic } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import Link from "next/link";
// grid lg:grid-cols-3 grid-cols-2
const Footer = () => {
  return (
    <footer className="w-full mt-6">
      <div className=" mb-4 gap-4 flex flex-wrap justify-between items-center bg-zinc-900 rounded-md p-3">
        <div className="flex flex-col">
          <h1 className="font-bold lg:text-xl text-lg mb-2 text-green">Discover</h1>
          <ul className="flex flex-col gap-1">
            <li>
              <Link className="flex items-center gap-1" href=""><FaFireAlt/>Hot Playlists</Link>
            </li>
            <li>
              <Link className="flex items-center gap-1" href=""><BsStars/>New Playlists</Link>
            </li>
            <li>
              <Link className="flex items-center gap-1" href=""><FaCrown/>Top Playlists</Link>
            </li>
          </ul>
        </div>
        <div className="lg:text-center ">
          <h1 className="font-bold lg:text-xl text-lg mb-2 text-green">Engage</h1>
          <ul className="flex flex-col gap-1">
            <li>
              <Link className="flex items-center gap-1" href=""><MdQueueMusic/>Add a Playlist?</Link>
            </li>
            <li>
              <Link className="flex items-center gap-1" href=""><RiFeedbackFill/>Send Feedback</Link>
            </li>
            <li>
              <Link className="flex items-center gap-1" href=""><FaHandshakeAngle/>Contribute</Link>
            </li>
          </ul>
        </div>
        <div className="text-right">
          <h1 className="font-bold lg:text-xl text-lg mb-2 lg:text-right text-left text-green">
            Contact Us
          </h1>
          <ul className="flex flex-col gap-1">
            <li className="">
              <a
                className="flex gap-2 items-center justify-items-start lg:justify-end"
                href=""
              >
                Facebook
                <FaFacebookSquare />{" "}
              </a>
            </li>
            <li className="">
              <a
                className="flex gap-2 items-center justify-items-start lg:justify-end"
                href="https://x.com/nilaacodes"
                target="_blank"
              >
                Twitter
                <FaSquareXTwitter />
              </a>
            </li>
            <li className="">
              <a
                className="flex gap-2 items-center justify-items-start lg:justify-end"
                href="https://github.com/nilaachandra"
                target="_blank"
              >
                Github
                <FaSquareGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="cop group">
        <p className="text-center">Copyright ©️ 2024 || <span className="text-green">Spotlistify</span></p>
        <p className="text-center">
          Developed With{" "}
          <span className="group-hover:scale-150 inline-block transition-all duration-300">
            ❤️
          </span>{" "}
          Nilaa Laishram
        </p>
      </div>
    </footer>
  );
};

export default Footer;
