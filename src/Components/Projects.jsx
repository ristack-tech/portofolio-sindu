import React from "react";

import fikapps from "../Images/fikapps.png";
import fikapps2 from "../Images/fikapps2.png";
import fikapps3 from "../Images/fikapps3.png";
import fleettrack1 from "../Images/fleettrack1.png";
import fleettrack2 from "../Images/fleettrack2.png";
import fleettrack3 from "../Images/fleettrack3.png";

import klora1 from "../Images/klora1.png";
import klora2 from "../Images/klora2.png";
import klora3 from "../Images/klora3.png";

import dolanrek1 from "../Images/dolanrek1.png";
import dolanrek2 from "../Images/dolanrek2.png";
import dolanrek3 from "../Images/dolanrek3.png";

import {
  FaEye,
  FaUser,
  FaUsers,
  FaExternalLinkAlt,
  FaCode,
  FaSignal,
  FaChartLine,
} from "react-icons/fa";



import {
  Carousel,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

function CarouselCustomNavigation(props) {
  return (
    <Carousel
      className="rounded-t-md w-full h-max"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="brown"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="brown"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-40 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-black" : "w-4 bg-black"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <div className="aspect-video w-full bg-gray-100">
        <img
          src={props.image1}
          alt="image 1"
          className="h-full w-full object-contain"
        />
      </div>

      {props.image2 && (
        <div className="aspect-video w-full bg-gray-100">
          <img
            src={props.image2}
            alt="image 2"
            className="h-full w-full object-contain"
          />
        </div>
      )}

      {props.image3 && (
        <div className="aspect-video w-full bg-gray-100">
          <img
            src={props.image3}
            alt="image 3"
            className="h-full w-full object-contain"
          />
        </div>
      )}
    </Carousel>
  );
}

function TooltipCustomStyles(props) {
  return (
    <Tooltip
      placement="bottom"
      className="border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10"
      content={
        <div className="w-80">
          <Typography color="blue-gray" className="font-inter font-bold">
            {props.title}
          </Typography>
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal font-inter opacity-80"
          >
            {props.description}
          </Typography>
        </div>
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        className="h-5 w-5 cursor-pointer text-blue-gray-500 mt-1.5 mr-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
        />
      </svg>
    </Tooltip>
  );
}

const talemBuiltWith = [
  {
    name: "Laravel",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },
  {
    name: "Flask",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
  },
  {
    name: "Next.js",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "MySQL",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  {
    name: "PHP",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "Multi-Tenant",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    icon: FaUsers,
  },
];

const kloraBuiltWith = [
  {
    name: "Appwrite",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/appwrite/appwrite-original.svg",
  },
  {
    name: "Vue.js",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
  },
  {
    name: "React Native",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
];

const dolanrekBuiltWith = [
  {
    name: "React JS",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
];

const learnthewebBuiltWith = [
  {
    name: "Laravel",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },
  {
    name: "Next.js",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "MQTT",
    link: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/mosquitto.svg",
  },
  {
    name: "WebSocket",
    link: "https://cdn.jsdelivr.net/gh/selfhst/icons/svg/websocket.svg",
  },
  {
    name: "IoT",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/raspberrypi/raspberrypi-original.svg",
  },
];

const ecoeatsbuiltwith = [
  {
    name: "React Native",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "React JS",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Appwrite",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/appwrite/appwrite-original.svg",
  },
  {
    name: "Tailwind CSS",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "REST API",
    link: "https://cdn.jsdelivr.net/gh/selfhst/icons/svg/websocket.svg",
  },
];

export function Projects() {
  return (
    <div className="max-w-[100rem] mx-auto">
      {/* P1: Talem */}
      <div
        className="rounded-xl flex flex-col justify-center items-center my-20 mx-0 font-outfit"
        id="work"
      >
        <div className="py-4 w-4/5 flex md:flex-row flex-col mb-10">
          <h1 className="seven-title md:w-7/12 font-semibold tracking-tight">
            View Some Of <br />
            <span className="main-gradient">My Projects</span>
          </h1>
          <div className="flex items-center md:w-5/12 xl:mt-0 mt-6 xl:justify-end text-lg lg:text-xl">
            <a
              href="https://github.com/Sinduaditya"
              target="_blank"
              className="relative w-full md:w-2/3 lg:w-1/2 inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out bg-orange-400 rounded-md shadow-md group"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-700 group-hover:translate-x-0 ease">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                See All My Projects
              </span>
              <span className="relative invisible">Button Text</span>
            </a>
          </div>
        </div>

        <div className="rounded-xl flex items-center flex-col relative">
          <div className="flex flex-col gap-y-1 mb-4 w-5/6">
            <h2 className="five-title font-semibold">
              <span className="text-blue-500 drop-shadow-2xl text-base">
                01
              </span>
              FIK-Apps - Platform Akademik Multi-Tenant
            </h2>
            <h4 className="text-gray-700 text-xl md:text-2xl flex">
              <TooltipCustomStyles
                title="About FIK-Apps"
                description="Multi-tenant academic platform I built for the Faculty of Computer Science at UDINUS."
              />
              Multi-Tenant Academic Platform
            </h4>
          </div>

          <div className="flex flex-col w-11/12 lg:w-5/6 justify-around shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] rounded-md">
            <CarouselCustomNavigation
              image1={fikapps2}
              image2={fikapps3}
              image3={fikapps}
            />

            <div className="rounded-b-lg bg-[#e17948ee] px-4 md:px-4 md:px-8 items-center justify-center flex flex-col">
              <div className="grid grid-cols-1 lg:grid-cols-2 w-full py-6 gap-8">
                <div className="w-full bg-white rounded-md p-6 text-sm md:text-lg lg:text-xl py-4">
                  FIK-Apps is a multi-tenant academic information system I
                  designed to serve multiple study programs under one faculty.
                  Using row-level tenancy architecture with Laravel and Next.js,
                  it covers 5 main modules: Thesis, Alumni, Career Guidance,
                  Internship, and Early Warning System. Led a cross-divisional
                  team of 15 people.
                </div>
                <div className="bg-white p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 rounded-md">
                  {talemBuiltWith.map((technology, index) => (
                    <a
                      key={index}
                      href={technology.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-900 rounded-md font-normal text-xl text-gray-300 font-outfit flex flex-row lg:flex-col xl:flex-row justify-center items-center"
                    >
                      {technology.icon ? (
                        <technology.icon className="w-6 h-6 mr-2" />
                      ) : (
                        <img
                          src={technology.link}
                          alt={technology.name}
                          className="w-6 h-6 mr-2"
                        />
                      )}
                      {technology.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="w-full mb-8 gap-8 grid grid-cols-1 lg:grid-cols-2">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white rounded-md py-2 flex lg:flex-row flex-col gap-2 text-center items-center justify-center">
                    <div className="p-2 bg-orange-100 rounded-full">
                      <FaEye className="text-orange-800" />
                    </div>
                    <h2 className="text-lg">5 Modul Aktif</h2>
                  </div>

                  <div className="bg-white rounded-md py-2 flex lg:flex-row flex-col gap-2 text-center items-center justify-center">
                    <div className="p-2 bg-orange-100 rounded-full">
                      <FaUser className="text-orange-800" />
                    </div>
                    <h2 className="text-lg">Tim 15 Orang</h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <a
                    href="https://dev-sti.dinus.id/"
                    target="_blank"
                    className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out bg-blue-200 rounded-md shadow-md group"
                  >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease gap-2">
                      <FaExternalLinkAlt /> Visit Website
                    </span>
                    <span className="relative invisible">Button Text</span>
                  </a>
                  <a
                    href="https://github.com/Sinduaditya"
                    target="_blank"
                    className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out bg-orange-200 rounded-md shadow-md group"
                  >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-500 group-hover:translate-x-0 ease">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-[#6b4d01ee] transition-all duration-300 transform group-hover:translate-x-full ease gap-2">
                      <FaCode /> View Repo
                    </span>
                    <span className="relative invisible">Button Text</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project #2: FleetTrack */}
      <div className="rounded-xl flex flex-col my-20 mx-0 relative">
        <div className="rounded-xl flex items-center flex-col relative">
          <div className="flex flex-col gap-y-1 mb-4 w-5/6">
            <h2 className="five-title font-semibold font-outfit ">
              <span className="text-blue-500 drop-shadow-2xl text-base">
                02{" "}
              </span>
              FleetTrack - IoT Fleet Management
            </h2>
            <h4 className="text-gray-700 two-title font-outfit flex">
              <TooltipCustomStyles
                title="About FleetTrack"
                description="Backend for IoT-based fleet management system with MQTT and real-time WebSocket."
              />
              Real-Time IoT Fleet Management System
            </h4>
          </div>

          <div className="flex flex-col w-11/12 lg:w-5/6 justify-around shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] rounded-md">
            <CarouselCustomNavigation
              image1={fleettrack1}
              image2={fleettrack2}
              image3={fleettrack3}
            />

            <div className="rounded-b-lg font-outfit bg-[#e17948ee] px-4 md:px-8 items-center justify-center flex flex-col">
              <div className="grid grid-cols-1 lg:grid-cols-2 w-full py-6 gap-8">
                <div className="w-full bg-white rounded-md p-6 text-sm md:text-lg lg:text-xl py-4">
                  FleetTrack is an IoT-based fleet management backend I designed
                  at Nexa IoT Lab. Integrating MQTT protocol (Mosquitto) as
                  message broker, Laravel Reverb for real-time vehicle location
                  streaming via WebSocket, and time-series database for
                  telemetry. Bridging sensor hardware with operational
                  dashboards.
                </div>
                <div className="bg-white p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 rounded-md">
                  {learnthewebBuiltWith.map((technology, index) => (
                    <a
                      key={index}
                      href={technology.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-900 rounded-md font-normal text-xl text-gray-300 font-outfit flex flex-row lg:flex-col xl:flex-row justify-center items-center"
                    >
                      <img
                        src={technology.link}
                        alt={technology.name}
                        className="w-6 h-6 mr-2"
                      />
                      {technology.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="w-full mb-8 gap-8 grid grid-cols-1 lg:grid-cols-2">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white rounded-md py-2 flex lg:flex-row flex-col gap-2 text-center items-center justify-center">
                    <div className="p-2 bg-orange-100 rounded-full">
                      <FaEye className="text-orange-800" />
                    </div>
                    <h2 className="text-lg">WebSocket</h2>
                  </div>

                  <div className="bg-white rounded-md py-2 flex lg:flex-row flex-col gap-2 text-center items-center justify-center">
                    <div className="p-2 bg-orange-100 rounded-full">
                      <FaSignal className="text-orange-800" />
                    </div>
                    <h2 className="text-lg">MQTT Broker</h2>
                  </div>

                  <div className="bg-white rounded-md py-2 flex lg:flex-row flex-col gap-2 text-center items-center justify-center">
                    <div className="p-2 bg-orange-100 rounded-full">
                      <FaChartLine className="text-orange-800" />
                    </div>
                    <h2 className="text-lg">Time-Series DB</h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <a
                    href="https://staging.dieseltrack.site/"
                    target="_blank"
                    className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out bg-blue-200 rounded-md shadow-md group"
                  >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease gap-2">
                      <FaExternalLinkAlt /> Visit Website
                    </span>
                    <span className="relative invisible">Button Text</span>
                  </a>
                  <a
                    href="https://github.com/Sinduaditya"
                    target="_blank"
                    className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out bg-orange-200 rounded-md shadow-md group"
                  >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-500 group-hover:translate-x-0 ease">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-[#6b4d01ee] transition-all duration-300 transform group-hover:translate-x-full ease gap-2">
                      <FaCode /> Visit Repo
                    </span>
                    <span className="relative invisible">Button Text</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project #3: Klora */}
      <div className="rounded-xl flex flex-col my-20 mx-0 relative">
        <div className="rounded-xl flex items-center flex-col relative">
          <div className="flex flex-col gap-y-1 mb-4 w-5/6">
            <h2 className="five-title font-semibold font-outfit ">
              <span className="text-blue-500 drop-shadow-2xl text-base">
                03{" "}
              </span>{" "}
              Klora
            </h2>
            <h4 className="text-gray-700 two-title font-outfit flex">
              <TooltipCustomStyles
                title="About Klora"
                description="Reward-based recycling platform with real-time pickup tracking and KLR token rewards."
              />
              Reward-Based Recycling Platform
            </h4>
          </div>

          <div className="flex flex-col w-11/12 lg:w-5/6 justify-around shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] rounded-md">
            <CarouselCustomNavigation
              image1={klora1}
              image2={klora2}
              image3={klora3}
            />

            <div className="rounded-b-lg font-outfit bg-[#1a6b4aee] px-4 md:px-8 items-center justify-center flex flex-col">
              <div className="grid grid-cols-1 lg:grid-cols-2 w-full py-6 gap-8">
                <div className="w-full bg-white rounded-md p-6 text-sm md:text-lg lg:text-xl py-4">
                  Klora is a reward-based recycling platform that lets users
                  submit recyclable items for pickup by registered pickers via a
                  real-time live map. Users earn KLR tokens as rewards, which
                  can be redeemed for e-wallet balance. Built with a team of 5,
                  reached Top 10 at ECOTHON 2024 ASEAN and won 2nd Place at IT
                  FEST 2024 IPB University.
                </div>
                <div className="bg-white p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 rounded-md">
                  {kloraBuiltWith.map((technology, index) => (
                    <a
                      key={index}
                      href={technology.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-900 rounded-md font-normal text-xl text-gray-300 font-outfit flex flex-row lg:flex-col xl:flex-row justify-center items-center"
                    >
                      <img
                        src={technology.link}
                        alt={technology.name}
                        className="w-6 h-6 mr-2"
                      />
                      {technology.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="w-full mb-8 gap-8 grid grid-cols-1 lg:grid-cols-2">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white rounded-md py-2 flex lg:flex-row flex-col gap-2 text-center items-center justify-center">
                    <div className="p-2 bg-orange-100 rounded-full">
                      <FaEye className="text-orange-800" />
                    </div>
                    <h2 className="text-sm lg:text-base">Top 10 ECOTHON</h2>
                  </div>

                  <div className="bg-white rounded-md py-2 flex lg:flex-row flex-col gap-2 text-center items-center justify-center">
                    <div className="p-2 bg-orange-100 rounded-full">
                      <FaUser className="text-orange-800" />
                    </div>
                    <h2 className="text-sm lg:text-base">2nd Place IT FEST</h2>
                  </div>

                  <div className="bg-white rounded-md py-2 flex lg:flex-row flex-col gap-2 text-center items-center justify-center">
                    <div className="p-2 bg-orange-100 rounded-full">
                      <FaUsers className="text-orange-800" />
                    </div>
                    <h2 className="text-sm lg:text-base">Tim 5 Orang</h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <a
                    href="https://klora.netlify.app/"
                    target="_blank"
                    className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out bg-blue-200 rounded-md shadow-md group"
                  >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease gap-2">
                      <FaExternalLinkAlt /> Visit Website
                    </span>
                    <span className="relative invisible">Button Text</span>
                  </a>
                  <a
                    href="https://github.com/Sinduaditya"
                    className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out bg-orange-200 rounded-md shadow-md group"
                  >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-500 group-hover:translate-x-0 ease">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-[#6b4d01ee] transition-all duration-300 transform group-hover:translate-x-full ease gap-2">
                      <FaCode /> Visit Repo
                    </span>
                    <span className="relative invisible">Visit Repo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project #4: DolanRek */}
      <div className="rounded-xl flex flex-col my-20 mx-0 relative">
        <div className="rounded-xl flex items-center flex-col relative">
          <div className="flex flex-col gap-y-1 mb-4 w-5/6">
            <h2 className="five-title font-semibold font-outfit ">
              <span className="text-blue-500 drop-shadow-2xl text-base">
                04{" "}
              </span>{" "}
              DolanRek
            </h2>
            <h4 className="text-gray-700 two-title font-outfit flex">
              <TooltipCustomStyles
                title="About DolanRek"
                description="AI-powered tourism platform with destination discovery, travel stories, and itinerary planner."
              />
              East Java Tourism Platform
            </h4>
          </div>

          <div className="flex flex-col w-11/12 lg:w-5/6 justify-around shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] rounded-md">
            <CarouselCustomNavigation
              image1={dolanrek1}
              image2={dolanrek2}
              image3={dolanrek3}
            />

            <div className="rounded-b-lg font-outfit bg-[#0ea5e9ee] px-4 md:px-8 items-center justify-center flex flex-col">
              <div className="grid grid-cols-1 lg:grid-cols-2 w-full py-6 gap-8">
                <div className="w-full bg-white rounded-md p-6 text-sm md:text-lg lg:text-xl py-4">
                  DolanRek is an East Java tourism platform that helps users
                  discover destinations, read travel stories, and plan trips
                  with HaloReK AI — an AI-powered itinerary planner that
                  generates detailed budget breakdowns and day-by-day schedules
                  based on user preferences.
                </div>
                <div className="bg-white p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 rounded-md">
                  {dolanrekBuiltWith.map((technology, index) => (
                    <a
                      key={index}
                      href={technology.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-900 rounded-md font-normal text-xl text-gray-300 font-outfit flex flex-row lg:flex-col xl:flex-row justify-center items-center"
                    >
                      <img
                        src={technology.link}
                        alt={technology.name}
                        className="w-6 h-6 mr-2"
                      />
                      {technology.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="w-full mb-8 gap-8 grid grid-cols-1 lg:grid-cols-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-md py-2 flex lg:flex-row flex-col gap-2 text-center items-center justify-center">
                    <div className="p-2 bg-orange-100 rounded-full">
                      <FaEye className="text-orange-800" />
                    </div>
                    <h2 className="text-sm lg:text-base">HaloReK AI</h2>
                  </div>

                  <div className="bg-white rounded-md py-2 flex lg:flex-row flex-col gap-2 text-center items-center justify-center">
                    <div className="p-2 bg-orange-100 rounded-full">
                      <FaUser className="text-orange-800" />
                    </div>
                    <h2 className="text-sm lg:text-base">Travel Stories</h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <a
                    href="https://dolanrek.netlify.app/"
                    target="_blank"
                    className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out bg-blue-200 rounded-md shadow-md group"
                  >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease gap-2">
                      <FaExternalLinkAlt /> Visit Website
                    </span>
                    <span className="relative invisible">Button Text</span>
                  </a>
                  <a
                    href="https://github.com/Sinduaditya"
                    className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out bg-orange-200 rounded-md shadow-md group"
                  >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-500 group-hover:translate-x-0 ease">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-[#6b4d01ee] transition-all duration-300 transform group-hover:translate-x-full ease gap-2">
                      <FaCode /> Visit Repo
                    </span>
                    <span className="relative invisible">Visit Repo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
