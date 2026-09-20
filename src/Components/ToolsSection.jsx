import React from "react";
import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline'
import { IoChatboxEllipses } from "react-icons/io5";

const projectStarterPack = [
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", 
    text: "PHP",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", 
    text: "Laravel",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", 
    text: "JavaScript",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", 
    text: "Vue.js",
  },
];

const miscellaneous = [
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", 
      text: "PHP",
      color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-blue-400 bg-blue-100/20"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", 
      text: "JavaScript",
      color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-blue-400 bg-blue-100/20"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", 
      text: "Python",
      color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-blue-400 bg-blue-100/20"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", 
      text: "Laravel",
      color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-gray-400 bg-gray-100/20"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", 
      text: "React",
      color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-gray-400 bg-gray-100/20"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", 
      text: "Vue.js",
      color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-gray-400 bg-gray-100/20"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", 
      text: "Tailwind CSS",
      color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-gray-400 bg-gray-100/20"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", 
      text: "HTML5",
      color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-gray-400 bg-gray-100/20"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", 
      text: "CSS3",
      color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-gray-400 bg-gray-100/20"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      text: "MySQL",
      color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-green-400 bg-green-100/20"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      text: "PostgreSQL",
      color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-green-400 bg-green-100/20"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      text: "Git/GitHub",
      color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-green-400 bg-green-100/20"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      text: "Docker",
      color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-green-400 bg-green-100/20"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
      text: "Linux Server",
      color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-green-400 bg-green-100/20"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
      text: "Flask",
      color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-gray-400 bg-gray-100/20"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/mosquitto.svg",
      text: "MQTT",
      color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-orange-400 bg-orange-100/20"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg",
      text: "Grafana",
      color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-purple-400 bg-purple-100/20"
    },
];

function Column({tools }) {
    return (
        <>
          <div className="flex flex-wrap justify-center gap-6 lg:gap-10 ">
            {tools.map((tool, index) => (
                <div key={index} className="flex transition transform duration-300 hover:scale-[1.01] flex-wrap p-1 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-pink-500 via-red-500 to-yellow-500 rounded-xl items-center justify-center">
                  <div
                      className={`bg-white border p-10 rounded-lg text-center`}
                  >
                      <img
                        src={tool.image}
                        alt={tool.text}
                        className="w-[8rem] h-20 mx-auto mb-4"
                      />
                      <p className="text-lg font-medium font-outfit tracking-tight">{tool.text}</p>
                  </div>
                </div>
            ))}
          </div>
        </>
    );
  }

export default function ToolsSection() {
  return (
    <>
    
      <div className="h-max mt-20 relative">
        <div className="text-center seven-title font-outfit font-semibold tracking-tight flex items-center gap-x-5 justify-center">
          <div>
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-900">
                <WrenchScrewdriverIcon className='h-8 w-8 text-white'/>
            </span>
          </div>
          <div>My <div className="main-gradient" id="tools">Toolbox</div> </div>
        </div>
      </div>

      <div className="my-10 flex items-center justify-center flex-col container mx-auto rounded-xl bg-orange-400 py-10">
        <h3 className="five-title font-outfit font-medium tracking-tight text-white">My <span className="underline">Core</span> Tech Stack:</h3>
        <div className="flex justify-center gap-8 flex-wrap  py-10 px-4 md:px-20 w-full rounded-lg">
          {projectStarterPack.map((tool, index) => (
            <div
              key={index}
              className="bg-white shadow-sm relative z-[30] p-6 rounded-lg text-center w-max"
            >
              <img
                src={tool.image}
                alt={tool.text}
                className="w-max px-4 h-20 mx-auto mb-4"
              />
              <p className="text-lg font-outfit">{tool.text}</p>
            </div>
          ))}

          <div
            className="bg-white shadow-sm relative p-6 rounded-lg text-center w-max "
          >
            <div className="p-4 hidden sm:block bg-white shadow-md rounded-md gap-y-2 absolute -top-6 -right-24 border-2 border-orange-900">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" 
                alt="PostgreSQL" 
                className="w-20"
              />
              <p className="text-md font-outfit">+ PostgreSQL</p>
            </div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
              className="w-max px-4 h-20 mx-auto mb-4"
            />
            <p className="text-lg font-outfit">MySQL</p>
          </div>

        </div>
      </div>



    <div className="max-w-[100rem] mx-auto space-y-10">
      <h3 className="flex items-center justify-center w-full text-center five-title font-outfit font-medium tracking-tight">
        My Skills & Technologies
      </h3>
      <div className="flex mx-2 lg:mx-10">
          <Column title="Miscellaneous" tools={miscellaneous} />
      </div>
    </div>



    </>
  );
}
