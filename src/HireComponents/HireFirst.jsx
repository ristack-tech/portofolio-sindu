import React from 'react';
import hireIcons from '../Images/hireIcons.svg'

export default function HireFirst() {
  return (
    <div className="pb-16 flex items-center justify-center">
      <div className="container mx-auto flex lg:flex-row flex-col items-center justify-center px-2 lg:px-20">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 lg:pr-8 flex flex-col justify-center font-outfit text-center lg:text-start">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4 font-outfit">I approach development differently...</h2>
          <p className="text-lg text-gray-600 mb-4">
            To me, a good system is more than one that "just works". It has to have the right architecture, scalable database design, proper isolation, and be maintainable for the long term.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            I chose backend because that's where architectural decisions determine whether a product truly works or is just a demo.
            
          </p>
          <p className="text-lg text-gray-600 mb-6">
            When I build systems, I make sure <span className='font-bold underline underline-offset-1'>everything is well-planned.</span> From multi-tenant architecture to IoT data pipelines, every decision I make is driven by scalability and maintainability.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            If you <span className="italic">need</span> a fullstack developer or technical project lead, I can help design a system tailored to your business needs. From requirements discovery to production deployment.
          </p>
          {/* <a
            href="#contact"
            className="bg-red-500 text-white px-6 py-3 rounded-full inline-block font-bold hover:bg-red-600 transition duration-300"
          >
            Contact Me
          </a> */}
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src={hireIcons}
            alt="Profile"
            className="w-4/5"
          />
        </div>
      </div>
    </div>
  );
};
