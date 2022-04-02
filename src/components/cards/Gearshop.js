import Icon from "@mdi/react"
import { mdiChevronRight } from "@mdi/js"

const Gearshop = () => {
  return (
    <div className="md:relative col-span-2">
      <div>
        <img className="w-full lg:hidden" src="/images/gearShop-sm.jpg" alt="Xbox Gear Shop small" />
        <img className="w-full hidden lg:inline-block" src="/images/gearShop-lg.jpg" alt="Xbox Gear Shop large" />
      </div>
        <div className="py-5 px-6 lg:absolute top-1/3 left-[60%] xl:left-[70%] space-y-5">
            <div className="md:text-4xl tracking-tight text-2xl lg:text-5xl font-bold">Xbox Gear Shop</div>
            <div className="md:text-xl">Check out the latest gear</div>
            <div className="py-3">
                <div className="px-4 py-1.5 bg-[#9BF00B] w-max flex">
                    <button className="uppercase font-extrabold hover:border-b-2 duration-100 ease-linear border-[#054B16] tracking-wide text-[#054B16]">shop now</button>
                    <Icon className="text-[#054B16]" path={mdiChevronRight} size={1} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gearshop
