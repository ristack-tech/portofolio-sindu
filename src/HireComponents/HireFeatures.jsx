import hirefeature1 from '../Images/hirefeature1.svg'
import hirefeature2 from '../Images/hirefeature2.svg'
import hirefeature3 from '../Images/hirefeature3.svg'
import hirefeature4 from '../Images/hirefeature4.svg'


const HireFeatures = () => {
    return (
      <div id="features" className='flex flex-col items-center gap-y-20 px-4 py-20 bg-espresso'>
          <div className="text-5xl xl:text-7xl font-semibold font-outfit text-center text-paper">
              <div>What you&apos;ll get </div>
              <div className="main-gradient">Working With Me</div>
          </div>

          <div className="lg:w-11/12 xl:w-5/6 grid grid-cols-1 lg:grid-cols-2 font-outfit text-paper rounded-xl overflow-hidden"> {/* Add overflow-hidden here */}
                <div className="flex flex-col gap-y-4 justify-start lg:px-10 py-5 lg:order-1 order-2"> {/* bg-[#fbeee6] */}
                    <div className='text-4xl lg:text-6xl font-semibold '>
                        Need a specific architecture? <span className="main-gradient block">I&apos;ll design it.</span>
                    </div>
                    <div className=" font-normal text-2xl">
                        <span className="text-paper/65">
                            Butuh sistem multi-tenant, IoT pipeline, atau ERP modular?
                        </span>
                        <span className="text-paper">
                            {" "}I&apos;ll design an architecture tailored to your business needs — from database design to API structure.
                        </span>
                        <span className="text-paper/65">
                            Don&apos;t have specs yet? No problem. I&apos;ll help from requirements discovery to deployment.
                        </span>

                    </div>
                </div>
                <div className='justify-end flex lg:order-2 order-1'>
                    <img src={hirefeature1} alt="Architecture design deliverable for a client system" className="w-full relative" />
                </div>
          </div>

          <div className="lg:w-5/6 grid grid-cols-1 lg:grid-cols-2 font-outfit text-paper rounded-xl overflow-hidden"> {/* Add overflow-hidden here */}
                <div className='justify-end flex'>
                    <img src={hirefeature2} alt="Iteration and feedback cycle during development" className="w-full relative" />
                </div>
                <div className="flex flex-col gap-y-4 justify-center lg:px-10 py-5"> {/* bg-[#fbeee6] */}
                    <div className='text-4xl lg:text-6xl font-semibold '>
                        As many iterations <span className="main-gradient block">as you need.</span>
                    </div>
                    <div className=" font-normal text-2xl">
                        <span className="text-paper/65">
                            Membangun sistem butuh iterasi. {' '}
                        </span>
                        <span className="text-paper">
                            During development, feel free to give feedback. Whether it&apos;s architecture changes, new features, or optimizations — I&apos;m ready to adapt.
                        </span>

                    </div>
                </div>
          </div>

          <div className="lg:w-5/6 grid grid-cols-1 lg:grid-cols-2 font-outfit text-paper rounded-xl overflow-hidden"> {/* Add overflow-hidden here */}
                <div className="flex flex-col gap-y-4 justify-center lg:px-10 py-5 lg:order-1 order-2"> {/* bg-[#fbeee6] */}
                    <div className='text-4xl lg:text-6xl font-semibold '>
                        Scalable architecture <span className="main-gradient block">from day one.</span>
                    </div>
                    <div className=" font-normal text-2xl">

                        <span className="text-paper/65">
                            Scalability is key for long-term systems. {' '}
                        </span>
                        <span className="text-paper">
                            Every system I build is designed to scale — from multi-tenant row-level to time-series databases for IoT.
                        </span>
                        <span className="text-paper/65">
                            The architecture I choose always considers future data and user growth.
                        </span>


                    </div>
                </div>
                <div className='justify-end flex lg:order-2 order-1'>
                    <img src={hirefeature3} alt="Scalable architecture diagram built from day one" className="w-full relative" />
                </div>
          </div>

          <div className="lg:w-5/6 grid grid-cols-1 lg:grid-cols-2 mb-10 font-outfit text-paper rounded-xl overflow-hidden">

                <div className='justify-end flex'>
                    <img src={hirefeature4} alt="Reliability and monitoring for a production system" className="w-full relative" />
                </div>
                
                <div className="flex flex-col gap-y-4 justify-center lg:px-10 py-5"> {/* bg-[#fbeee6] */}
                    <div className='text-4xl lg:text-6xl font-semibold '>
                        Making sure your
                        <span className="main-gradient block">system is reliable.</span>
                    </div>
                    <div className=" font-normal text-2xl">
                        <span className="text-paper/65">
                            Reliability is the foundation of every production system. {' '}
                        </span>
                        <span className="text-paper">
                            From automated deployments to robust error handling, I ensure the system runs stably 24/7.
                        </span>
                        


                    </div>
                </div>
          </div>






      </div>
    );
  };

export default HireFeatures;
