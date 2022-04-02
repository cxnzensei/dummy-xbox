import Icon from "@mdi/react"
import { mdiChevronDown } from "@mdi/js"
import { useState, useEffect } from "react"
import * as menu from "../menus"

const jumbo = [
    menu.home, 
    menu.gamePass, 
    menu.games, 
    menu.devices, 
    menu.play, 
    menu.community, 
    menu.support, 
    menu.myXbox, 
    menu.developers
]

const XboxMenu = ({ xbox }) => {
    
    const [acc, setAcc] = useState({})
    const [insideAcc, setInsideAcc] = useState({})

    useEffect(() => {
        setAcc({})
        setInsideAcc({})
    }, [xbox])
    
    return (
        <div className="w-full border border-gray-200 text-gray-600 bg-[#fafafa]">
            {jumbo.map(item => (
                <div key={item.title} className="border-b">
                    <div>
                        {item.items.length === 0 ? (
                            <div className="px-5 cursor-pointer py-4 active:border active:border-black active: border-dashed">{item.title}</div>
                        ) : (
                            <div className="flex flex-col">
                                <div onClick={() => setAcc({[item.title] : !acc[item.title]})} className="w-full active:border active:border-black active: border-dashed border-b flex items-center cursor-pointer px-5 py-4 justify-between">
                                    <div>{item.title}</div>
                                    <div className={`${acc[item.title] ? 'rotate-180' : ''} duration-300 ease-in-out`}>
                                        <Icon path={mdiChevronDown} size={1} />
                                    </div>
                                </div>
                                <div className={`${acc[item.title] ? '' : 'hidden'}`}>
                                    {item.items.map(el => (
                                        <div key={el.title}>
                                            <div className="cursor-pointer active:border active:border-black active: border-dashed flex items-center border-b px-5 justify-between" onClick={() => setInsideAcc({[el.title] : !insideAcc[el.title]})}>
                                                <div className="py-4 pl-5">{el.title}</div>
                                                {el.items.length > 0 && (
                                                    <div className={`${insideAcc[el.title] ? 'rotate-180' : ''} duration-300 ease-in-out`}>
                                                        <Icon path={mdiChevronDown} size={1} />
                                                    </div>
                                                )}
                                            </div>
                                            <div className={`${insideAcc[el.title] ? '' : 'hidden'}`}>
                                                {el.items.map(t => (
                                                    <div className="pl-16 active:border active:border-black active: border-dashed py-4 border-b cursor-pointer" key={t}>{t}</div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default XboxMenu
