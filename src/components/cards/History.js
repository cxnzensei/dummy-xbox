import Icon from "@mdi/react"
import { mdiChevronRight } from "@mdi/js"

const History = () => {
  return (
    <div className="md:relative">
        <img className="w-full" src="/images/history.jpg" alt="Women's history month" />
        <div className="md:absolute w-full py-10 bg-black lg:bg-transparent px-6 space-y-5 text-white bottom-0">
            <div className="font-bold md:text-5xl text-2xl">Xbox celebrates Women's History Month</div>
            <div className="md:text-xl">Here are some of the ways we're celebrating - join us.</div>
            <div className="flex items-center">
                <button className="font-extrabold buttonText">LEARN MORE</button>
                <Icon path={mdiChevronRight} size={1.2} />
            </div>
        </div>
    </div>
  )
}

export default History
