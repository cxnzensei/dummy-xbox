import Icon from "@mdi/react"
import { mdiChevronRight } from "@mdi/js"
import 'tw-elements';

const Banner = () => {
  return (
    <div>
        <div id="carouselExampleIndicators" className="carousel slide relative" data-bs-ride="carousel">
            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
                ></button>
                <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                ></button>
                <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
                ></button>
            </div>
            <div className="carousel-inner relative w-full overflow-hidden">
                <div className="carousel-item active float-left w-full">
                    <div className="relative">
                        <div>
                            <img className="w-full md:hidden" src="/images/tt-sm.jpg" alt="tiny tina's wonderlands small" />
                            <img className="w-full hidden md:inline-block lg:hidden" src="/images/tt-md.jpg" alt="tiny tina's wonderlands medium" />
                            <img className="w-full lg:inline-block hidden" src="/images/tt-lg.jpg" alt="tiny tina's wonderlands large" />
                        </div>
                        <div className="absolute flex flex-col items-center lg:items-start w-full lg:w-0 space-y-8 text-white bottom-[15%] 2xl:top-[28%] lg:top-[15%] xl:top-[22%] lg:left-[60%]">
                            <div className="space-y-4 flex items-center lg:items-start flex-col">
                                <div className="md:text-5xl xl:text-7xl text-2xl font-bold">Tiny Tina's Wonderlands</div>
                                <div className="md:text-4xl">Whimsy, wonder and high-powered weaponry</div>
                            </div>
                            <div className="px-4 py-1.5 bg-[#9BF00B] w-max flex">
                                <button className="uppercase font-extrabold hover:border-b-2 duration-100 ease-linear border-[#054B16] tracking-wide text-[#054B16]">get it now</button>
                                <Icon className="text-[#054B16]" path={mdiChevronRight} size={1} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item float-left w-full">
                    <div className="relative">
                        <div>
                            <img className="w-full md:hidden" src="/images/starwars-sm.jpg" alt="starwars small" />
                            <img className="w-full hidden md:inline-block lg:hidden" src="/images/starwars-md.jpg" alt="starwars medium" />
                            <img className="w-full lg:inline-block hidden" src="/images/starwars-lg.jpg" alt="starwars large" />
                        </div>
                        <div className="absolute shadow-xl shadow-black flex flex-col items-center lg:items-start w-full lg:w-0 text-white space-y-8 bottom-[15%] 2xl:top-[28%] lg:top-[15%] xl:top-[22%] lg:left-[10%]">
                            <div className="space-y-4 flex items-center w-max lg:items-start flex-col">
                                <div className="md:text-5xl flex xl:text-7xl text-2xl font-bold">
                                    LEGO &#169; Star Wars&#8482;:
                                </div>
                                <div className="md:text-5xl font-bold xl:text-7xl text-2xl">The Skywalker Saga</div>
                                <div className="md:text-4xl lg:max-w-[20ch]">The Galaxy is ours</div>
                            </div>
                            <div className="px-4 py-1.5 bg-[#9BF00B] w-max flex">
                                <button className="uppercase font-extrabold hover:border-b-2 duration-100 ease-linear border-[#054B16] tracking-wide text-[#054B16]">get it now</button>
                                <Icon className="text-[#054B16]" path={mdiChevronRight} size={1} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item float-left w-full">
                    <div className="relative">
                        <div>
                            <img className="w-full md:hidden" src="/images/halo-sm.jpg" alt="halo small" />
                            <img className="w-full hidden md:inline-block lg:hidden" src="/images/halo-md.jpg" alt="halo medium" />
                            <img className="w-full lg:inline-block hidden" src="/images/halo-lg.jpg" alt="halo large" />
                        </div>
                        <div className="absolute shadow-xl shadow-black flex flex-col items-center lg:items-start w-full lg:w-0 text-white space-y-8 bottom-[15%] 2xl:top-[28%] lg:top-[15%] xl:top-[22%] lg:left-[10%]">
                            <div className="space-y-4 flex items-center w-max lg:items-start flex-col">
                                <div className="text-xs bg-[#363636] tracking-wide px-3 py-0.5">CONSOLE &#183; PC &#183; CLOUD</div>
                                <div className="md:text-5xl xl:text-7xl text-2xl font-bold">Halo Infinite</div>
                                <div className="md:text-4xl lg:max-w-[20ch]">Play with PC Game Pass or Ultimate</div>
                            </div>
                            <div className="px-4 py-1.5 bg-[#9BF00B] w-max flex">
                                <button className="uppercase font-extrabold hover:border-b-2 duration-100 ease-linear border-[#054B16] tracking-wide text-[#054B16]">get it now</button>
                                <Icon className="text-[#054B16]" path={mdiChevronRight} size={1} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button
                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
    </div>
  )
}

export default Banner
