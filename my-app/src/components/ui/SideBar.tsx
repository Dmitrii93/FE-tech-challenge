import Image from 'next/image';
import Logo from './Logo';

const SideBar = () => {
    const list = [
        { src: '/Server.svg', title: 'Nodes' },
        { src: '/dashboard 2.svg', title: 'Dashboard' },
        { src: '/nimbus_ecosystem.svg', title: 'Ecosystem' },
        { src: '/dashboard 1.svg', title: 'Analytics' },
        { src: '/organizations.svg', title: 'Teams' },
        { src: '/mdi_resource-description-framework.svg', title: 'Discover Web3' },
    ];
    return (
        <aside className='bg-white py-4 px-6 pb-9 flex flex-col flex-shrink-0 md:px-3'>
            <Logo />
            <nav className='mt-[80px] grow'>
                <ul className='flex flex-col gap-3'>
                    {list.map(({ src, title }) => (
                        <li
                            key={title}
                            className='cursor-pointer group flex gap-6 p-4 items-center font-medium text-[14px] leading-[17px] text-secondary rounded-md hover:bg-button hover:text-white'
                        >
                            <Image
                                src={src}
                                alt={title}
                                width={25}
                                height={25}
                                className='group-hover:backdrop-brightness-0 group-hover:backdrop-invert'
                            />
                            {title}
                        </li>
                    ))}
                </ul>
            </nav>
            <div>
                <div className='flex items-center gap-7 md:gap-2 flex-col'>
                    <div className='flex items-center gap-2'>
                        <Image src='/user.png' alt='user' width={40} height={40} className='flex-shrink-0' />
                        <div>
                            <h6 className='text-[14px] leading-[17px] font-semibold text-main'>Ryan Fay</h6>
                            <p className='text-[12px] leading-[14px] text-secondary'>ryanfay@edgevana.com</p>
                        </div>
                    </div>
                    <div>
                        <Image src='/Logout.svg' alt='logout image' width={40} height={40} />
                    </div>
                </div>
                <div className='w-full h-[40px] border border-hovered rounded-[32px] mt-4 p-1 flex'>
                    <button className='rounded-[32px] flex gap-2 items-center justify-center flex-1 group hover:bg-hovered hover:text-button'>
                        <Image src='/sun.svg' alt='sun' width={17} height={17} /> Light
                    </button>
                    <button className='rounded-[32px] flex gap-2 items-center justify-center flex-1 group hover:bg-hovered hover:text-button'>
                        <Image src='/moon.svg' alt='moon' width={17} height={17} /> Dark
                    </button>
                </div>
            </div>
        </aside>
    );
};
export default SideBar;
