import React from 'react'

const BlogHome = () => {
  return (
    <div className='py-2 bg-red-100 font-outfit'>
        <div className='max-w-4xl mx-auto bg-red-200 grid grid-cols-2'>
            BlogHome
            <article
                className="mx-auto relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-8 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxiYWNrZW5kfGVufDB8MHx8fDE3MTI3NTMxNDh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover"/>
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300"><time
                        datetime="2025-09-20" className="mr-8">September 2025</time>
                    <div className="-ml-4 flex items-center gap-x-4"><svg viewBox="0 0 2 2"
                            className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                            <circle cx="1" cy="1" r="1"></circle>
                        </svg>
                        <div className="flex gap-x-2.5">
                            Sindu Aditya
                        </div>
                    </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                    <a href="/blog"><span className="absolute inset-0"></span>How I became a Fullstack Developer: A Full Journey from Zero to Production</a>
                </h3>
            </article>
        </div>
    </div>
  )
}

export default BlogHome
