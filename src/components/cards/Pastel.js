import Icon from "@mdi/react"
import { mdiChevronRight } from "@mdi/js"

const Pastel = () => {
  return (
    <div>
      <div className="md:relative h-full">
          <img className="w-full h-full object-cover" src="/images/pastel.jpg" alt="Playful in Pastel" />
          <div className="md:absolute space-y-3 w-full flex flex-col items-start py-10 px-6 bottom-0">
              <div className="bg-[#FFD800] px-2">NEW</div>
              <div className="space-y-6">
                  <div className="font-bold md:text-5xl text-2xl">Playful in Pastel</div>
                  <div className="md:text-xl">Add a bit of whimsy to your gaming setup with the new Designed for Xbox Spring Collection</div>
                  <div className="flex items-center">
                      <button className="font-extrabold buttonText uppercase">learn more</button>
                      <Icon path={mdiChevronRight} size={1.2} />
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Pastel
