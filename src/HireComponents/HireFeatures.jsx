import React from 'react';
import hirefeature1 from '../Images/hirefeature1.svg'
import hirefeature2 from '../Images/hirefeature2.svg'
import hirefeature3 from '../Images/hirefeature3.svg'
import hirefeature4 from '../Images/hirefeature4.svg'


const HireFeatures = () => {
    return (
      <div id="features" className='flex flex-col items-center gap-y-20 px-4 py-20 bg-black'>
          <div className="text-5xl xl:text-7xl font-semibold font-outfit text-center text-white">
              <div>What you'll get </div>
              <div className="main-gradient">Working With Me</div>
          </div>

          <div className="lg:w-11/12 xl:w-5/6 grid grid-cols-1 lg:grid-cols-2 font-outfit text-white rounded-xl overflow-hidden"> {/* Add overflow-hidden here */}
                <div className="flex flex-col gap-y-4 justify-start lg:px-10 py-5 lg:order-1 order-2"> {/* bg-[#fbeee6] */}
                    <div className='text-4xl lg:text-6xl font-semibold '>
                        Need a specific architecture? <span className="main-gradient block">I'll design it.</span>
                    </div>
                    <div className=" font-normal text-2xl">
                        <span className="text-gray-500">
                            Butuh sistem multi-tenant, IoT pipeline, atau ERP modular?
                        </span>
                        <span className="text-white">
                            {" "}I'll design an architecture tailored to your business needs — from database design to API structure.
                        </span>
                        <span className="text-gray-500">
                            Don't have specs yet? No problem. I'll help from requirements discovery to deployment.
                        </span>

                    </div>
                </div>
                <div className='justify-end flex lg:order-2 order-1'>
                    <img src={hirefeature1} alt="" className="w-full relative" />
                </div>
          </div>

          <div className="lg:w-5/6 grid grid-cols-1 lg:grid-cols-2 font-outfit text-white rounded-xl overflow-hidden"> {/* Add overflow-hidden here */}
                <div className='justify-end flex'>
                    <img src={hirefeature2} alt="" className="w-full relative" />
                </div>
                <div className="flex flex-col gap-y-4 justify-center lg:px-10 py-5"> {/* bg-[#fbeee6] */}
                    <div className='text-4xl lg:text-6xl font-semibold '>
                        As many iterations <span className="main-gradient block">as you need.</span>
                    </div>
                    <div className=" font-normal text-2xl">
                        <span className="text-gray-500">
                            Membangun sistem butuh iterasi. {' '}
                        </span>
                        <span className="text-white">
                            During development, feel free to give feedback. Whether it's architecture changes, new features, or optimizations — I'm ready to adapt.
                        </span>

                    </div>
                </div>
          </div>

          <div className="lg:w-5/6 grid grid-cols-1 lg:grid-cols-2 font-outfit text-white rounded-xl overflow-hidden"> {/* Add overflow-hidden here */}
                <div className="flex flex-col gap-y-4 justify-center lg:px-10 py-5 lg:order-1 order-2"> {/* bg-[#fbeee6] */}
                    <div className='text-4xl lg:text-6xl font-semibold '>
                        Scalable architecture <span className="main-gradient block">from day one.</span>
                    </div>
                    <div className=" font-normal text-2xl">

                        <span className="text-gray-500">
                            Scalability is key for long-term systems. {' '}
                        </span>
                        <span className="text-white">
                            Every system I build is designed to scale — from multi-tenant row-level to time-series databases for IoT.
                        </span>
                        <span className="text-gray-500">
                            The architecture I choose always considers future data and user growth.
                        </span>


                    </div>
                </div>
                <div className='justify-end flex lg:order-2 order-1'>
                    <img src={hirefeature3} alt="" className="w-full relative" />
                </div>
          </div>

          <div className="lg:w-5/6 grid grid-cols-1 lg:grid-cols-2 mb-10 font-outfit text-white rounded-xl overflow-hidden">

                <div className='justify-end flex'>
                    <img src={hirefeature4} alt="" className="w-full relative" />
                </div>
                
                <div className="flex flex-col gap-y-4 justify-center lg:px-10 py-5"> {/* bg-[#fbeee6] */}
                    <div className='text-4xl lg:text-6xl font-semibold '>
                        Making sure your
                        <span className="main-gradient block">system is reliable.</span>
                    </div>
                    <div className=" font-normal text-2xl">
                        <span className="text-gray-500">
                            Reliability is the foundation of every production system. {' '}
                        </span>
                        <span className="text-white">
                            From automated deployments to robust error handling, I ensure the system runs stably 24/7.
                        </span>
                        


                    </div>
                </div>
          </div>


            {/* Old stuff */}
            {/* <div className="w-full gap-8 font-outfit flex lg:flex-row flex-col rounded-xl overflow-hidden"> 
                <div className="w-full lg:w-1/2 flex flex-col gap-y-8 bg-[#f7f7f7] rounded-xl py-10">
                    <div className='px-10 flex flex-col gap-y-4'>
                        <div className='text-4xl lg:text-6xl font-semibold text-gray-900'>Blazing Fast Speed</div>
                        <div className="text-gray-700 text-xl tracking-wide">
                            Whether you're making a website for your new business or a website to showcase your skills, we can assure you that it will be fast and user-accessible to all. Our websites will be optimized to load fast on all devices and be
                            accessible to all users on the web.
                        </div>
                    </div>
                    <img src={hiregrid2} alt="" className="w-full rounded-xl px-10" />
                    <div className="text-gray-500 text-lg tracking-wide px-10">
                        ****While I can't <i>guaruantee</i> perfect web scores, I can <b>guaruantee</b> that your website will load 
                        fast and flawlessly regardless of device constraints and whatnot!

                    
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col gap-y-8 bg-[#f7f7f7] rounded-xl py-10">
                    <div className='px-10 flex flex-col gap-y-4'>
                        <div className='text-4xl lg:text-6xl font-semibold text-gray-900'>Instant Response Time</div>
                        <div className="text-gray-700 text-xl tracking-wide">
                            What type of web-developer ghosts a client after a website is done? Definitely not me. If you have any questions 
                            or want to add something new to your website/fix something, you can be certain I'll respond in no time at no extra cost! <i>(Unless it's something massive which we'll talk over!)</i>
                        </div>
                    </div>
                    <img src={hiregrid3} alt="" className="w-full rounded-xl px-10" />
                </div>
            </div>

            <div className="w-full font-outfit flex flex-col lg:flex-row bg-[#fbeee6] rounded-xl overflow-hidden"> 
                <div className="w-full lg:w-1/2 flex flex-col gap-y-8 justify-center px-10 py-5">
                    <div className='text-4xl lg:text-6xl font-semibold text-gray-900'>Responsive down to the corner 🔬</div>
                    <div className="text-gray-700 text-xl tracking-wide">
                        Responsiveness is required for a great website to run properly. You can be certain that your website will be rendered properly regardless of what device a user loads it up on.
                        Try increasing/decreasing the size of your screen on this page; we'll do the exact same to your site as well!  
                    </div>
                </div>
                <div className='w-full lg:w-1/2 justify-end flex'>
                    <img src={hiregrid4} alt="" className="w-full relative " />
                </div>
            </div> */}


      </div>
    );
  };

export default HireFeatures;
