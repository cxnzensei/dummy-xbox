import { allMicrosoft } from "../allMicrosoft"
import Icon from "@mdi/react"
import { mdiChevronRight } from "@mdi/js"

const AllMicrosoft = () => {
  return (
    <div className="text-gray-700 flex flex-col text-sm border-b-2 bg-[#fafafa] border border-b-black">
        <div className="flex space-x-14 border-b-2 py-4 px-6">
            {allMicrosoft.map(item => (
                item.items.length === 0 && (
                    <div className="last:hidden hover:underline">{item.title}</div>
                )
            ))}
        </div>
        <div className="grid grid-cols-5 xl:grid-cols-6 gap-7 py-5 px-6">
            {allMicrosoft.map(item => (
                item.items.length > 0 && (
                    <div>
                        <div className="font-semibold">{item.title}</div>
                        <div className="py-2">
                            {item.items.map(el => (
                                <div className="py-2 hover:underline" key={el}>{el}</div>
                            ))}
                        </div>
                    </div>
                )
            ))}
        </div>
        <div className="flex items-center space-x-2 py-3 px-4 cursor-pointer hover:underline bg-[#e7e7e7] justify-center">
            <div>View Sitemap</div>
            <Icon path={mdiChevronRight} size={1} />
        </div>
    </div>
  )
}

export default AllMicrosoft
