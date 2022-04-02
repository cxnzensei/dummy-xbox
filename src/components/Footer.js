import uniqid from 'uniqid'
import Icon from '@mdi/react'
import { mdiEarth, mdiCopyright, mdiGithub } from '@mdi/js'

const browse = [{
    'title': 'Browse',
    'id': uniqid(),
    'content': ['Xbox consoles', 'Xbox games', 'Xbox Game Pass', 'Xbox accessories']
}]
const resources = [{
    'title': 'Resources',
    'id': uniqid(),
    'content': ['Xbox News', 'Xbox Support', 'Feedback', 'Community Standards', 'Photosensitive Seizure Warning']
}]
const microsoftStore = [{
    'title': 'Microsoft Store',
    'id': uniqid(),
    'content': ['Microsoft Account', 'Microsoft Store Support', 'Returns', 'Orders tracking', 'Store locations']
}]
const forDevelopers = [{
    'title': 'For Developers',
    'id': uniqid(),
    'content': ['Games', 'ID@Xbox', 'Creators Program', 'Designed for Xbox']
}] 

const mega = [browse, resources, microsoftStore, forDevelopers]

const line = ['Sitemap', 'Contact Microsoft', 'Privacy', 'Terms of use', 'Trademarks', 'Third Party Notices', 'Safety & eco', 'About our ads']

const Footer = () => {
  return (
    <div className="bg-[#F2F2F2] text-gray-600">
        <div className="container mx-auto px-4 py-10 space-y-10">
            <div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-9">
                    {mega.map(category => (
                        category.map(cat => (
                            <div key={cat.id}>
                                <div className='font-bold'>{cat.title}</div>
                                {cat.content.map(item => (
                                    <div className='mt-5 text-xs hover:underline underline-offset-2 cursor-pointer' key={item}>{item}</div>
                                ))}
                            </div>
                        ))
                    ))}
                </div>
            </div>
            <div className='space-y-10'>
                <div className='space-y-5 lg:space-y-0 justify-between flex flex-col lg:flex-row lg:items-center'>
                    <div className='flex items-center text-xs space-x-2'>
                        <Icon path={mdiEarth} size={1} />
                        <div>English (United States)</div>
                    </div>
                    <div className='text-xs lg:flex grid grid-cols-3 gap-2 lg:space-x-4'>
                        {line.map(item => (
                            <div className='hover:underline underline-offset-2 cursor-pointer' key={item}>{item}</div>
                        ))}
                    </div>
                </div>
                <div className='text-xs flex items-center space-x-3'>
                    <div className='flex items-center space-x-1'>
                        <Icon path={mdiCopyright} size={1} />
                        <div>Dummy Xbox</div>
                    </div>
                    <div>
                        <a href="https://www.github.com/cxnzensei" className='flex items-center space-x-1' target='_blank' rel="noreferrer">
                            <Icon path={mdiGithub} size={1} />
                            <div>cxnzensei</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
