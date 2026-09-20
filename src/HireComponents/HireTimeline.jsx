export default function HireTimeline() {
    return (
        <>
        <section>
            <div class="bg-white text-black py-8">
                <div class="container mx-auto flex flex-col items-start lg:flex-row my-12 md:my-24">
                <div class="flex flex-col w-full lg:sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8 font-outfit">
                    <p class="text-orange-700 uppercase">The Timeline</p>
                    <p class="text-3xl md:text-4xl leading-normal font-semibold mb-2">Here's how I build you <span className="main-gradient">your backend system.</span></p>
                    <p class="text-sm md:text-base text-black mb-4">
                    The process is quite detailed, so I've summed it down to the most core steps we'll take in building your scalable backend system!
                    </p>
                </div>
                <div class="ml-0 lg:ml-12 w-full lg:w-2/3 sticky">
                    <div class="container mx-auto w-full h-full font-outfit">
                        <div class="relative wrap overflow-hidden p-10 h-full">
                            <div class="border-2-2 border-yellow-555 absolute h-full rounded-[1%] border-2 border-solid border-[#FFC100] right-2/4"
                            ></div>
                            <div class="border-2-2 border-yellow-555 absolute h-full rounded-[1%] border-2 border-solid border-[#FFC100] left-2/4"
                            ></div>
                            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                            <div class="order-1 w-5/12"></div>
                            <div class="order-1 w-5/12 px-1 py-4 text-right">
                                <p class="mb-3 text-base text-orange-700">0 Days</p>
                                <h4 class="mb-3 font-bold text-lg md:text-2xl">Discovery & Kebutuhan</h4>
                                <p class="text-sm md:text-base leading-snug text-black text-opacity-100">
                                The first phase to understand your business needs. Is this system for multi-tenant, IoT, ERP, or other needs? What features are required? We'll discuss everything here.
                                </p>
                            </div>
                            </div>
                            <div class="mb-8 flex justify-between items-center w-full">
                            <div class="order-1 w-5/12"></div>
                            <div class="order-1 w-5/12 px-1 py-4 text-left">
                                <p class="mb-3 text-base text-orange-700">1-2 Days</p>
                                <h4 class="mb-3 font-bold text-lg md:text-2xl">Arsitektur & Perencanaan</h4>
                                <p class="text-sm md:text-base leading-snug text-black text-opacity-100">
                                After the initial discussion, I'll create a system architecture design, database structure, and project timeline. We'll review together to make sure everything is aligned.
                                </p>
                            </div>
                            </div>
                            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full">
                            <div class="order-1 w-5/12"></div>
                            <div class="order-1 w-5/12 px-1 py-4 text-right">
                                <p class="mb-3 text-base text-orange-700">7-10 Days</p>
                                <h4 class="mb-3 font-bold text-lg md:text-2xl">Backend Development</h4>
                                <p class="text-sm md:text-base leading-snug text-black text-opacity-100">
                                Once the architecture is approved, I start building the backend with Laravel, implementing database design, API endpoints, and necessary integrations.
                                </p>
                            </div>
                            </div>

                            <div class="mb-8 flex justify-between items-center w-full">
                            <div class="order-1 w-5/12"></div>

                            <div class="order-1 w-5/12 px-1 py-4">
                                <p class="mb-3 text-base text-orange-700">10-20 Days</p>
                                <h4 class="mb-3 font-bold  text-lg md:text-2xl text-left">Integrasi & Testing</h4>
                                <p class="text-sm md:text-base leading-snug text-black text-opacity-100">
                                Thorough testing, integration with frontend or other systems, performance optimization, and ensuring everything runs stably in the production environment.
                                </p>
                            </div>
                            </div>

                            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full">
                            <div class="order-1 w-5/12"></div>
                            <div class="order-1 w-5/12 px-1 py-4 text-right">
                                <p class="mb-3 text-base text-orange-700">20 Days Onwards</p>
                                <h4 class="mb-3 font-bold text-lg md:text-2xl">Deployment & Maintenance</h4>
                                <p class="text-sm md:text-base leading-snug text-black text-opacity-100">
                                Deploy to production. I also provide post-launch support for maintenance, bug fixes, and feature additions as needed.
                                </p>
                            </div>
                            </div>
                        </div>
                    <img class="hidden lg:block mx-auto -mt-60 md:-mt-10" src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" />
                    </div>
                </div>
                </div>
            </div>
        </section>
        </>
    )
}