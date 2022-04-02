import Icon from "@mdi/react"
import { mdiChevronDown, mdiMagnify, mdiCartOutline, mdiAccountPlusOutline, mdiChevronRight } from "@mdi/js"
import Hamburger from "./Hamburger"
import XboxMenu from "./XboxMenu"
import * as menu from '../menus'
import { useState } from "react"
import AllMicrosoft from "./AllMicrosoft"

const Header = ({ ham, setHam, search, xbox, setXbox, setSearch, togMenu, setTogMenu }) => {

    const [sub, setSub] = useState({Developers: true})

    const more = [menu.community, menu.support, menu.myXbox, menu.developers]

    return (
        <div className="md:bg-white px-5">
            <div className="h-14 flex border-b-2 text-sm items-center text-gray-600">
                <div className="flex items-center justify-between container mx-auto px-5 lg:px-4 xl:px-10 2xl:px-0">
                    <div className="lg:hidden">
                        <div className="flex items-center space-x-5">
                            <div onClick={() => setHam(!ham)} className="space-y-1 cursor-pointer">
                                <div className={`border px-3 ${ham ? 'rotate-45 -mb-1.5' : ''} border-black bg-black duration-100 ease-in-out`}></div>
                                <div className={`border px-3 ${ham ? 'hidden' : ''} border-black duration-100 ease-in-out bg-black`}></div>
                                <div className={`border px-3 ${ham ? '-rotate-45' : ''} border-black duration-100 ease-in-out bg-black`}></div>
                            </div>
                            <div onClick={() => setSearch(!search)}>
                                <Icon className="cursor-pointer" path={mdiMagnify} size={1} rotate={90} />
                            </div>
                        </div>
                    </div>
                    <input type="text" placeholder="Search Dummy Xbox" className={`border outline-none px-3 border-black py-1.5 ${search ? 'order-3 ml-4' : 'hidden'} w-full`} />
                    <div className={`lg:hidden duration-100 ease-in-out ${search ? 'hidden' : ''}`}>
                        <img className="w-28" src="/images/microsoft.png" alt="microsoft" />
                    </div>
                    <div className={`flex ${search ? 'hidden' : ''} items-center lg:hidden space-x-5`}>
                        <Icon className="cursor-pointer" path={mdiCartOutline} size={1} />
                        <Icon path={mdiAccountPlusOutline} size={1.2} className='p-1 border border-gray-700 rounded-full cursor-pointer' />
                    </div>
                    <div className="lg:flex hidden items-center space-x-6">
                        <div className={`flex ${search ? 'order-1' : ''} space-x-6`}>
                            <img className="w-28" src="/images/microsoft.png" alt="Microsoft" />
                            <div className="border py-3 border-black"></div>
                            <img className="w-20" src="/images/xbox.png" alt="xbox" />
                        </div>
                        <div className={`flex ${search ? 'hidden' : ''} space-x-3`}>
                            <div className="lg:flex hidden items-center">
                                <div onClick={() => setTogMenu({[menu.gamePass.title] : !togMenu[menu.gamePass.title]})} className="flex items-center">
                                    <div className="dash">Game Pass</div>
                                    <Icon className="cursor-pointer" path={mdiChevronDown} size={1} />
                                </div>
                                <div className={`absolute ${togMenu[menu.gamePass.title] ? '' : 'hidden'} top-14 bg-[#fafafa] z-50 last:border-b-2 border-black`}>
                                    {menu.gamePass.items.map(item => (
                                        <div key={item.title} className="py-4 px-5 cursor-pointer hover:underline hover:bg-[#e7e7e7]">{item.title}</div>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:flex hidden items-center">
                                <div onClick={() => setTogMenu({[menu.games.title] : !togMenu[menu.games.title]})} className="flex items-center">
                                    <div className="dash">Games</div>
                                    <Icon className="cursor-pointer" path={mdiChevronDown} size={1} />
                                </div>
                                <div className={`absolute ${togMenu[menu.games.title] ? '' : 'hidden'} top-14 grid grid-cols-3 bg-[#fafafa] z-50 last:border-b-2 border-black`}>
                                    {menu.games.items.map(item => (
                                        <div key={item.title} className="py-4 space-y-3 px-5">
                                            <div className="font-semibold">{item.title}</div>
                                            {item.items.map(el => (
                                                <div key={el} className="py-2 hover:underline cursor-pointer">{el}</div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:flex hidden items-center">
                                <div onClick={() => setTogMenu({[menu.devices.title] : !togMenu[menu.devices.title]})} className="flex items-center">
                                    <div className="dash">Devices</div>
                                    <Icon className="cursor-pointer" path={mdiChevronDown} size={1} />
                                </div>
                                <div className={`absolute ${togMenu[menu.devices.title] ? '' : 'hidden'} top-14 grid grid-cols-3 bg-[#fafafa] z-50 last:border-b-2 border-black`}>
                                    {menu.devices.items.map(item => (
                                        <div key={item.title} className="py-4 space-y-3 px-5">
                                            <div className="font-semibold">{item.title}</div>
                                            {item.items.map(el => (
                                                <div key={el} className="py-2 hover:underline cursor-pointer">{el}</div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:flex hidden dash pr-1 items-center">
                                Play
                            </div>
                            <div className="xl:flex hidden items-center">
                                <div onClick={() => setTogMenu({[menu.community.title] : !togMenu[menu.community.title]})} className="flex items-center">
                                    <div className="dash">Community</div>
                                    <Icon className="cursor-pointer" path={mdiChevronDown} size={1} />
                                </div>
                                <div className={`absolute ${togMenu[menu.community.title] ? '' : 'hidden'} top-14 grid grid-cols-3 bg-[#fafafa] z-50 last:border-b-2 border-black`}>
                                    {menu.community.items.map(item => (
                                        <div key={item.title} className="py-4 space-y-3 px-5 last:col-span-3">
                                            <div className="font-semibold">{item.title}</div>
                                            {item.items.map(el => (
                                                <div key={el} className="py-2 hover:underline cursor-pointer">{el}</div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="xl:flex hidden items-center">
                                <div onClick={() => setTogMenu({[menu.support.title] : !togMenu[menu.support.title]})} className="flex items-center">
                                    <div className="dash">Support</div>
                                    <Icon className="cursor-pointer" path={mdiChevronDown} size={1} />
                                </div>
                                <div className={`absolute ${togMenu[menu.support.title] ? '' : 'hidden'} top-14 z-50 grid grid-cols-2`}>
                                    <div className="bg-[#fafafa] border-b-2 border-black">
                                        {menu.support.items.map(item => (
                                            <div key={item.title} className="py-4 px-5 cursor-pointer hover:underline hover:bg-[#e7e7e7]">
                                                <div className="flex items-center justify-between">
                                                    <div>{item.title}</div>
                                                    {item.items.length > 0 && (
                                                        <Icon path={mdiChevronRight} size={1} />
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="bg-[#fafafa] border-b-2 border-black">
                                        {menu.support.items.map(item => (
                                            <div key={item.title}>
                                                {item.items.map(el => (
                                                    <div className="px-4 hover:bg-[#e7e7e7] hover:underline py-5">{el}</div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>
                            <div className="2xl:flex hidden items-center">
                                <div onClick={() => setTogMenu({[menu.myXbox.title] : !togMenu[menu.myXbox.title]})} className="flex items-center">
                                    <div className="dash">My Xbox</div>
                                    <Icon className="cursor-pointer" path={mdiChevronDown} size={1} />
                                </div>
                                <div className={`absolute ${togMenu[menu.myXbox.title] ? '' : 'hidden'} top-14 bg-[#fafafa] z-50 last:border-b-2 w-40 border-black`}>
                                    {menu.myXbox.items.map(item => (
                                        <div key={item.title} className="py-4 px-5 cursor-pointer hover:underline hover:bg-[#e7e7e7]">{item.title}</div>
                                    ))}
                                </div>
                            </div>
                            <div className="2xl:flex hidden items-center">
                                <div onClick={() => setTogMenu({[menu.developers.title] : !togMenu[menu.developers.title]})} className="flex items-center">
                                    <div className="dash">Developers</div>
                                    <Icon className="cursor-pointer" path={mdiChevronDown} size={1} />
                                </div>
                                <div className={`absolute ${togMenu[menu.developers.title] ? '' : 'hidden'} top-14 bg-[#fafafa] z-50 last:border-b-2 w-52 border-black`}>
                                    {menu.developers.items.map(item => (
                                        <div key={item.title} className="py-4 px-5 cursor-pointer hover:underline hover:bg-[#e7e7e7]">{item.title}</div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex 2xl:hidden">
                                <div onClick={() => setTogMenu({[more] : !togMenu[more]})} className="flex items-center">
                                    <div className="dash">More</div>
                                    <Icon className="cursor-pointer" path={mdiChevronDown} size={1} />
                                </div>
                                <div className={`absolute top-14 ${togMenu[more] ? '' : 'hidden'} z-50 h-40 grid grid-cols-2`}>
                                    <div className="h-full bg-[#fafafa] border-b-2 border-black">
                                        {more.map(item => (
                                            <div onClick={() => setSub({[item.title] : !togMenu[item.title]})} key={item.title}>
                                                <div className={`flex ${sub[item.title] ? 'bg-[#e7e7e7]' : ''} ${item.title === 'Community' || item.title === 'Support' ? 'xl:hidden' : 'flex'} hover:underline px-5 hover:bg-[#e7e7e7] items-center justify-between`}>
                                                    <div className={`py-4 pr-5`}>{item.title}</div>
                                                    <Icon path={mdiChevronRight} size={1} /> 
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="h-full border-b-2 border-black bg-[#fafafa]">
                                        {more.map(item => (
                                            <div onClick={() => setSub({[item.title] : !togMenu[item.title]})} key={item.title}>
                                                <div className={`${sub[item.title] ? '' : 'hidden'}`}>
                                                    {item.items.map(el => (
                                                        <div key={el.title} className="px-4 py-5">{el.title}</div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`lg:flex hidden ${search ? 'ml-16' : ''} space-x-3 items-center`}>
                        <div className={`${search ? 'hidden' : ''}`}>
                            <div onClick={() => setTogMenu({'micro' : !togMenu['micro']})} className="lg:flex hidden items-center">
                                <div className="dash">All Microsoft</div>
                                <Icon className="cursor-pointer" path={mdiChevronDown} size={1} />
                            </div>
                            <div className={`absolute ${togMenu['micro'] ? '' : 'hidden'} top-14 right-10 z-50`}>
                                <AllMicrosoft />        
                            </div>
                        </div>
                        <div onClick={() => setSearch(!search)} className="flex items-center lg:space-x-2">
                            <div className={`${search ? 'hidden' : ''}`}>
                                <div className="hidden dash 2xl:flex">Search</div>
                            </div>
                            <Icon className="cursor-pointer" path={mdiMagnify} rotate={90} size={1} />
                        </div>
                        <div className={`flex ${search ? 'hidden' : ''} items-center lg:space-x-2`}>
                            <div className="hidden 2xl:flex dash">Cart</div>
                            <Icon className="cursor-pointer" path={mdiCartOutline} size={1} />
                        </div>
                        <div className={`flex ${search ? 'hidden' : ''} items-center lg:space-x-2`}>
                            <div className="hidden 2xl:flex dash">Sign in</div>
                            <Icon className="border p-1 border-gray-700 rounded-full cursor-pointer" path={mdiAccountPlusOutline} size={1.2} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`border-b-2 ${ham ? 'relative' : ''} lg:hidden`}>
                <div className={`py-1 px-5 bg-white ${xbox ? 'border-b' : ''} container mx-auto`}>
                    <div onClick={() => setXbox(!xbox)} className="flex items-center cursor-pointer w-fit space-x-2">
                        <img className="w-16" src="/images/xbox.png" alt="xbox" />
                        <div className="flex">
                            <Icon className={`${!xbox ? '' : 'rotate-180'} duration-300 ease-in-out`} path={mdiChevronDown} size={1.3} color='darkgreen' />
                        </div>
                    </div>
                </div>
                <div className={`${!xbox ? 'hidden' : ''}`}>
                    <XboxMenu xbox={xbox} />
                </div>
                <div className={`${ham ? 'absolute top-0 z-10 w-full' : 'hidden'}`}>
                    <Hamburger />
                </div>
            </div>
        </div>
  )
}

export default Header
