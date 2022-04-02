import Icon from "@mdi/react"
import { mdiChevronRight } from "@mdi/js"

const Simulator = () => {
  return (
    <div className="lg:h-1/2 lg:flex">
        <div className="lg:w-1/2 overflow-hidden">
          <img className="w-full object-cover hover:scale-110 duration-300 ease-in-out h-full" src="/images/flightSimulator.jpg" alt="Flight Simulator" />
        </div>
        <div className="py-5 px-6 flex lg:w-1/2 flex-col w-full items-start justify-center space-y-5">
            <div className="bg-[#FFD800] px-2 uppercase">world update VIII</div>
            <div className="md:text-4xl text-2xl lg:text-2xl font-bold">Microsoft Flight Simulator</div>
            <div className="md:text-xl">Claim victory with the new Xbox Series S – Fortnite and Rocket League Bundle</div>
            <div className="flex items-center">
                <button className="font-extrabold buttonText text-sm lg:text-base uppercase">get it now</button>
                <Icon path={mdiChevronRight} size={1.2} />
            </div>
        </div>
    </div>
  )
}

export default Simulator
