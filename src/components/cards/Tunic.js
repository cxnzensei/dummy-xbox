import Icon from "@mdi/react"
import { mdiChevronRight } from "@mdi/js"

const Tunic = () => {
  return (
    <div className="lg:flex lg:h-1/2">
        <div className="lg:w-1/2 overflow-hidden">
          <img className="w-full h-full hover:scale-110 duration-300 ease-in-out lg:object-cover" src="/images/tunic.jpg" alt="Tunic" />
        </div>
        <div className="bg-[#107C10] lg:w-1/2">
            <div className="py-10 flex flex-col h-full justify-center items-start px-6 w-full text-white space-y-5">
                <div className="md:text-4xl text-2xl font-bold">Tunic</div>
                <div className="md:text-xl">Play now with Xbox Game Pass or purchase</div>
                <div className="flex items-center">
                    <button className="font-extrabold buttonText uppercase">get it now</button>
                    <Icon path={mdiChevronRight} size={1.2} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tunic
