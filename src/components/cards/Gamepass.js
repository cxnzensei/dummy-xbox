import Icon from "@mdi/react"
import { mdiChevronRight } from "@mdi/js"

const Gamepass = () => {
    return (
        <div id="gamepass" className="lg:flex lg:h-1/2">
            <div className="lg:w-1/2 overflow-hidden lg:order-2">
                <img className="w-full h-full lg:hidden" src="/images/gamepass-lg.jpg" alt="Gamepass large" />
                <img className="w-full h-full object-cover hidden hover:scale-110 duration-300 ease-in-out lg:inline-block" src="/images/gamepass-sm.jpg" alt="Gamepass small" />
            </div>
            <div className="lg:w-1/2 lg:order-1 bg-[#107C10]">
                <div className="py-10 px-6 xl:px-10 w-full flex flex-col h-full justify-center text-white space-y-5">
                    <div className="md:text-3xl text-2xl lg:text-xl xl:text-4xl font-bold">Discover your next favorite game</div>
                    <div className="md:text-xl lg:text-base xl:text-xl">Play over 100 high-quality games with friends on console, PC, phones and tablets</div>
                    <div className="flex items-center">
                        <button className="font-bold lg:text-sm buttonText uppercase">join xbox game pass</button>
                        <Icon path={mdiChevronRight} size={1.2} />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Gamepass
