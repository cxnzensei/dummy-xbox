import Icon from "@mdi/react"
import { mdiChevronRight } from "@mdi/js"

const Halo = () => {
  return (
      <div className="md:relative h-full">
        <img className="w-full h-full object-cover" src="/images/halo.jpg" alt="Halo" />
        <div className="md:absolute w-full bg-[#363636] md:bg-transparent py-10 px-6 space-y-5 text-white md:bottom-0">
            <div className="font-bold md:text-5xl text-3xl">HALO</div>
            <div className="md:text-xl">Witness the epic conflict with the Covenant in live action.</div>
            <div className="flex items-center">
                <button className="font-extrabold buttonText">LEARN MORE</button>
                <Icon path={mdiChevronRight} size={1.2} />
            </div>
        </div>
      </div>
  )
}

export default Halo
