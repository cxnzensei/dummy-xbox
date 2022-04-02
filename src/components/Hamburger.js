import Icon from "@mdi/react"
import { mdiChevronDown } from "@mdi/js"
import { useState } from "react"
import { allMicrosoft } from "../allMicrosoft"

const Hamburger = () => {

    const [acc, setAcc] = useState({})

    return (
        <div className="w-full border border-gray-200 text-gray-600 bg-[#fafafa]">
            {allMicrosoft.map(item => (
                <div key={item.title} className="border-b">
                    <div>
                        {item.items.length === 0 ? (
                            <div className="px-5 py-4">{item.title}</div>
                        ) : (
                            <div className="flex flex-col">
                                <div onClick={() => setAcc({[item.title] : !acc[item.title]})} className="w-full active:border-dashed active:border cursor-pointer active:border-black flex items-center px-5 py-4 justify-between">
                                    <div>{item.title}</div>
                                    <div className={`${acc[item.title] ? 'rotate-180' : ''} duration-300 ease-in-out`}>
                                        <Icon path={mdiChevronDown} size={1} />
                                    </div>
                                </div>
                                <div className={`${acc[item.title] ? '' : 'hidden'} border`}>
                                    <div>
                                        {item.items.map(li => (
                                            <div className="active:border-dashed active:border cursor-pointer active:border-black" key={li}>
                                                <div className="py-5 px-10 border-b">{li}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Hamburger
