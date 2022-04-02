import Icon from "@mdi/react"
import { mdiChevronRight } from "@mdi/js"

const Player = () => {
  return (
    <div className="lg:flex lg:h-1/2">
        <div className="lg:w-1/2 lg:order-2 overflow-hidden">
            <img className="w-full lg:hidden" src="/images/playersH.jpg" alt="A player like me horizontal" />
            <img className="w-full h-full hidden hover:scale-110 duration-300 ease-in-out lg:inline-block" src="/images/playersV.jpg" alt="A player like me vertical" />
        </div>
        <div className="bg-[#107C10] h-full flex items-center lg:w-1/2">
            <div className="py-10 w-full px-6 text-white space-y-5">
                <div className="md:text-3xl text-2xl lg:text-2xl font-bold">Beyond Xbox - A player like me</div>
                <div className="md:text-xl lg:text-lg">This is a story of how two special people were connected through the power of gaming.</div>
                <div className="flex items-center">
                    <button className="font-extrabold buttonText lg:text-sm uppercase">learn more</button>
                    <Icon path={mdiChevronRight} size={1.2} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Player
