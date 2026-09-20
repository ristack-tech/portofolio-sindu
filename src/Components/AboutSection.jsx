import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaVolleyballBall,
  FaTableTennis,
  FaMusic,
  FaCamera,
} from "react-icons/fa";
import { BiSolidCoffeeAlt } from "react-icons/bi";
import { IoChatboxEllipses } from "react-icons/io5";
import { MdOutlineBusinessCenter } from "react-icons/md";
import sinduProfile from "../Images/Sindu.png";
import { IoMailOpen } from "react-icons/io5";

export default function AboutMe() {
  return (
    <>
      <div
        className="relative overflow-hidden bg-orange-400 -skew-y-2 px-4 xl:px-0 pt-16 space-y-24 font-outfit"
        id="about"
      >
        <div className="relative skew-y-2">
          <div className="lg:mx-auto lg:max-w-7xl flex flex-col lg:flex-row lg:gap-12 lg:px-8">
            <div className="w-full lg:w-1/2 lg:my-0 my-12 mx-auto max-w-xl lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:order-1 order-2">
              <div className="pl-0">
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white">
                    <IoChatboxEllipses className="h-8 w-8 text-[#704421]" />
                  </span>
                </div>

                <div className="mt-3">
                  <h2 className="text-4xl mb-1 font-semibold tracking-wide text-white">
                    A Bit{" "}
                    <span className="text-[#67230d] underline">About Me.</span>
                  </h2>
                <p className="px-4 text-gray-900 border-l-4 border-[#9d4d32] text-xl leading-relaxed text-slate-900 my-4">
                    My journey started at Vocational School in Software Engineering, then continued to a Bachelor's in Informatics Engineering while gaining real-world experience through internships, organizations, and client projects. From there I learned that code that merely runs isn't necessarily correct code, it has to be thought through down to its architecture and scale.
                    <br />
                    <br />

                    Since 2022 I interned as a Laravel developer, then kept leading teams at HMTI UDINUS and Klora, until finally overseeing real product delivery at Bengkel Koding and RISTACK. Currently I work as a Fullstack Developer, with a strong lean toward backend, since that's where architectural decisions determine whether a product truly works or is just a demo.
                  </p>

                  <div className="flex mt-6 space-x-4 items-center  gap-x-2">
                    <a
                      href="https://linkedin.com/in/sinduadityajanadi"
                      target="_blank"
                      className="contact-buttons-about"
                    >
                      <FaLinkedin className="text-2xl" />
                    </a>
                    <a
                      href="https://github.com/Sinduaditya"
                      target="_blank"
                      className="contact-buttons-about"
                    >
                      <FaGithub className="text-2xl" />
                    </a>
                    <a
                      href="mailto:nduujanadi51@gmail.com"
                      className="contact-buttons-about"
                    >
                      <IoMailOpen className="text-2xl" />
                    </a>
                    <a
                      href="https://linkedin.com/in/sinduadityajanadi"
                      target="_blank"
                      className="contact-buttons-about"
                    >
                      <MdOutlineBusinessCenter className="text-2xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:order-2 order-1 flex items-center justify-center lg:justify-end">
              <img
                loading="lazy"
                className="rounded-xl w-5/6 lg:my-0 shadow-2xl ring-1 ring-black ring-opacity-5 rotate-2"
                src={sinduProfile}
              />
            </div>
          </div>

          <div className="mt-10 mb-28 max-w-4xl mx-auto flex flex-col items-center gap-y-6 text-[#482d14]">
            
            <h1 className="six-title tracking-tight font-medium text-center">
                My Websites Make A <span className="underline">Real Impact</span>
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4">

                <div className="w-full bg-[#34200e] py-6 flex flex-col gap-y-2 items-center text-white rounded-xl shadow-md">
                    <h1 className="seven-title font-semibold">
                        4<span className="main-gradient">+</span>
                    </h1>
                    <p className="one-title font-medium">Products in Production</p>
                </div>

                <div className="w-full bg-[#34200e] py-6 flex flex-col gap-y-2 items-center text-white rounded-xl shadow-md">
                    <h1 className="seven-title font-semibold">
                        1<span className="main-gradient">+</span>
                    </h1>
                    <p className="one-title font-medium">Years Designing Systems</p>
                </div>

                <div className="w-full bg-[#34200e] py-6 flex flex-col gap-y-2 items-center text-white rounded-xl shadow-md">
                    <h1 className="seven-title font-semibold">
                        <span className="main-gradient"></span>55
                    </h1>
                    <p className="one-title font-medium">People Led</p>
                </div>

            </div>

            <p className="text-center italic opacity-80">
                Fullstack developer who leads from sketch to live in production. Open for fullstack developer, technical project lead, or system designer roles.
            </p>

          </div>
        </div>
      </div>
    </>
  );
}
