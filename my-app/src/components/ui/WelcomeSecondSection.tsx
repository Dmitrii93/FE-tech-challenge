import Image from 'next/image';
import { useState } from 'react';

const texts = [
    {
        heading: 'Accelerating the next generation of the internet',
        descr: 'Participate in over 100+ protocols with one click | Zero to operator in 60 seconds',
    },
    {
        heading: 'Random heading',
        descr: 'Random text',
    },
];

const WelcomeSecondSection = () => {
    const [index, setIndex] = useState(0);
    return (
        <section className='w-full h-full flex flex-col justify-end md:min-h-[768px]'>
            <div className='pointer-events-none max-w-[731px] max-h-[911px] absolute w-full h-full right-0 -top-4 lg:max-w-[531px] sm:max-w-[380px] lg:-top-24'>
                <Image src='/General Information.png' alt='general information' fill className='object-contain' />
                <Image
                    src='/Chats.png'
                    alt='chats information'
                    width={300}
                    height='0'
                    className='absolute object-contain bottom-16 -translate-x-1/3 '
                />
            </div>
            <div className='flex items-center max-w-[715px] justify-between gap-3'>
                <div className='overflow-hidden max-w-[535px] relative'>
                    <div className='flex relative transition-all' style={{ right: `${index * 100}%` }}>
                        {texts.map((text) => (
                            <div key={text.descr} className='min-w-full max-w-full'>
                                <h3 className='text-main text-[22px] leading-[27px] font-semibold'>{text.heading}</h3>
                                <p className='text-[14px] leading-[170%] text-primary mt-3'>{text.descr}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='shrink-0'>
                    <button
                        onClick={() => {
                            setIndex((prev) => (prev === 0 ? prev : prev - 1));
                        }}
                    >
                        <Image
                            src='/Arrow.svg'
                            alt='chevron'
                            width={40}
                            height={40}
                            className='rotate-180 opacity-50 hover:opacity-100 transition-all'
                        />
                    </button>
                    <button
                        className='ml-[18px]'
                        onClick={() => {
                            setIndex((prev) => (prev === texts.length - 1 ? prev : prev + 1));
                        }}
                    >
                        <Image
                            src='/Arrow.svg'
                            alt='chevron'
                            width={40}
                            height={40}
                            className='opacity-50 hover:opacity-100 transition-all'
                        />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default WelcomeSecondSection;
