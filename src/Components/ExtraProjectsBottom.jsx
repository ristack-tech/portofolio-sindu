export default function ExtraProjectBottom() {
    return (
        <div className='flex flex-col font-outfit bg-orange-100 py-16 -skew-y-1'>
            
            <div className='skew-y-1'>
                <div className='seven-title font-medium text-center text-[#704421] space-y-2'>
                    <h1 className='seven-title tracking-tighter'>Other <span className="underline">Side Projects</span> </h1>
                    <h4 className="text-xl font-normal max-w-xl mx-auto">
                        Other projects I've built. Check out <a href="https://github.com/Sinduaditya" target="_blank" className="underline">my github</a> {' '}
                        for more projects.
                    </h4>
                </div>
                <div className="py-6 max-w-[70rem] grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
                    <div className="gap-8 shadow-md cursor-pointer bg-[#ffedd5] p-8 rounded-xl">
                        <div className="p-4 space-y-4 flex flex-col text-black justify-center">
                            <a href="https://github.com/Sinduaditya" className='text-blue-500 underline' target='_blank'>GitHub</a>
                            <h1 className="five-title">
                                Suite Aplikasi Bisnis Modular
                            </h1>
                            <h3 className='text-sm sm:text-lg text-balance leading-6 font-light text-gray-800'>
                                Laravel-based modular ERP for PT Lims Yanwo Indonesia manufacturing production lines with 4 core modules: Quality Control, Raw Material Intake, Attendance, and Payroll.
                                <br />
                                <br />
                                Tech: <b className='font-bold'>Laravel, MySQL, LiveWire</b>
                            </h3>
                        </div>
                    </div>
                    <div className="gap-8 p-8 rounded-xl shadow-md cursor-pointer bg-[#ffedd5]">
                        <div className="p-4 space-y-4 flex flex-col text-black justify-center">
                            <div className='space-y-2'>
                                <a href="https://github.com/Sinduaditya" className='text-blue-500 underline' target='_blank'>GitHub</a>
                                <h1 className="five-title">
                                    Web E-Voting Blockchain
                                </h1>
                                <h3 className='text-sm sm:text-lg text-balance leading-6 font-light text-gray-800'>
                                    Decentralized e-voting system based on Ethereum. Won 3rd Place at DINACOM 2024 and 3rd Place at HITECH 2025 with NFT implementation as vote verification token.
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="gap-8 p-8 rounded-xl shadow-md cursor-pointer bg-[#ffedd5]">
                        <div className="p-4 space-y-4 flex flex-col text-black justify-center">
                            <div className='space-y-2'>
                                <a href="https://linkedin.com/in/sinduadityajanadi" className='text-blue-500 underline' target='_blank'>LinkedIn</a>
                                <h1 className="five-title">
                                    Pengalaman Lainnya
                                </h1>
                                <h3 className='text-sm sm:text-lg text-balance leading-6 font-light text-gray-800'>
                                    More experience at Bengkel Koding, RISTACK, HIMTI UDINUS, and others. Visit my LinkedIn profile for full details.
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
