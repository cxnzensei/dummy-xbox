import Icon from "@mdi/react"
import { mdiChevronRight } from "@mdi/js"

const Quarry = () => {
  return (
    <div className="md:relative">
        <img className="w-full" src="/images/thequarry.jpg" alt="The Quarry" />
        <div className="md:absolute py-10 w-full bg-[#363636] lg:bg-transparent px-6 space-y-5 text-white bottom-0">
            <div className="font-bold md:text-5xl text-2xl">The Quarry</div>
            <div className="md:text-xl">You won't believe what you'll become</div>
            <div className="flex items-center">
                <button className="font-extrabold buttonText uppercase">pre-order now</button>
                <Icon path={mdiChevronRight} size={1.2} />
            </div>
        </div>
    </div>
  )
}

export default Quarry
