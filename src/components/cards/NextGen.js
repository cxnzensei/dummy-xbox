import Icon from "@mdi/react"
import { mdiChevronRight } from "@mdi/js"

const NextGen = () => {
  return (
    <div className="lg:relative col-span-2">
        <div>
            <img className="w-full lg:hidden" src="/images/fortnite-sm.jpg" alt="Simply Next Gen" />
            <img className="w-full hidden lg:inline-flex" src="/images/fortnite-lg.jpg" alt="Simply Next Gen" />
        </div>
        <div className="py-5 lg:absolute lg:top-[10%] xl:top-[15%] left-[8%] space-y-5">
            <div className="md:text-4xl text-2xl lg:w-[10ch] lg:text-6xl uppercase font-extrabold">Simply Next Gen</div>
            <div className="border-8 rounded-tl-full rounded-br-full border-[#9BF00B] w-20"></div>
            <div className="md:text-xl lg:w-1/2 lg:text-2xl xl:text-4xl">Claim victory with the new Xbox Series S – Fortnite and Rocket League Bundle</div>
            <div>
                <div className="px-4 py-1.5 bg-[#9BF00B] w-max flex">
                    <button className="uppercase font-extrabold hover:border-b-2 duration-100 ease-linear border-[#054B16] tracking-wide text-[#054B16]">learn more</button>
                    <Icon className="text-[#054B16]" path={mdiChevronRight} size={1} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default NextGen
