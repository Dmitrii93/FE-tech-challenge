import Image from 'next/image';
import { useState } from 'react';

const ToolKitSection = () => {
    const tabs = ['Overview', 'Projects', 'Events', 'News', 'Developer Toolkit', 'Entrepreneur Toolkit'];
    const radios = [
        'High Performant Validator',
        'Public Full Node Producer',
        'RPC (full program IDs)',
        'Web3 Developer',
        'Web2 Developer',
    ];
    const [currentRadio, setCurrentRadio] = useState(radios[0]);
    return (
        <div className='p-6 w-full'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-5 items-center'>
                    <Image src={'/Group 2163.svg'} alt='group' width={52} height={52} />
                    <div>
                        <h5 className='text-[20px] leading-[24px] font-semibold text-main'>Discover Web3</h5>
                        <p className='mt-2 text-[12px] leading-[15px] font-semibold text-secondary'>
                            Web3 / Entrepreneur Toolkit
                        </p>
                    </div>
                </div>
                <div>
                    <span className='relative'>
                        <input
                            type='text'
                            className='w-[240px] h-[51px] rounded-lg border border-grayBorder p-4 pl-11 bg-transparent text-main'
                            placeholder='Search'
                        />
                        <Image
                            src={'/Search.svg'}
                            alt='search'
                            width={18}
                            height={18}
                            className='absolute left-4 top-1/2 -translate-y-1/2'
                        />
                    </span>
                </div>
            </div>
            <nav
                className='mt-6 bg-white rounded-lg px-6 py-5'
                style={{ boxShadow: '0px 6px 20px rgba(21, 31, 78, 0.06)' }}
            >
                <ul className='flex items-center gap-[40px] text-[14px] leading-[17px] font-semibold text-secondary'>
                    {tabs.map((tab) => (
                        <li key={tab} className='hover:text-button group relative cursor-pointer'>
                            {tab}
                            <div
                                className='w-full scale-105 h-[1.5px] opacity-0 group-hover:opacity-100 absolute -bottom-[20px] transition-all'
                                style={{ background: 'linear-gradient(90deg, #2B3E9B 0%, rgba(43, 62, 155, 0) 100%)' }}
                            />
                        </li>
                    ))}
                </ul>
            </nav>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log(currentRadio);
                }}
                className='mt-16 bg-white p-14 pt-9 rounded-xl overflow-hidden max-w-[680px] mx-auto'
                style={{ boxShadow: '0px 8px 48px rgba(25, 16, 73, 0.08)' }}
            >
                <h5 className='text-[20px] leading-[24px] font-semibold text-main'>Setup Guide</h5>
                <p className='text-[16px] leading-[19px] font-medium text-secondary mt-[18px]'>
                    Unlock your highest potential with our personalized guide!
                </p>
                <p className='text-[16px] leading-[19px] font-medium text-secondary mt-[18px]'>
                    0/7 Questions answered
                </p>
                <div className='w-[200%] -ml-14 bg-lightBorder h-[1px] mt-[33px]' />
                <div className='mt-[40px] flex gap-5 items-center text-[18px] leading-[22px] font-semibold text-main'>
                    <div className='flex justify-center items-center w-8 h-8 bg-button text-white rounded-full'>1</div>
                    How do you plan to use Edgevana?{' '}
                </div>
                <div className='mt-[40px] flex flex-col gap-[25px]'>
                    {radios.map((radio) => (
                        <label
                            key={radio}
                            className={`flex items-center ${radio === currentRadio ? 'text-main' : 'text-secondary'}`}
                        >
                            <input
                                id={radio}
                                checked={radio === currentRadio}
                                onChange={() => setCurrentRadio(radio)}
                                type='radio'
                                name='wayToUse'
                                value={radio}
                                className='mr-4 accent-current w-5 h-5'
                            />
                            {radio}
                        </label>
                    ))}
                </div>
                <div className='mt-12 flex items-center gap-[26px]'>
                    <button className='flex-1 py-[17px] bg-cancel rounded-lg text-secondary text-[14px] leading-[17px]'>
                        Cancel
                    </button>
                    <button className='flex-1 py-[17px] bg-button rounded-lg text-white text-[14px] leading-[17px]'>
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
};
export default ToolKitSection;
