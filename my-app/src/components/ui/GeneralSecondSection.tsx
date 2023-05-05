import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const GeneralSecondSection = () => {
    const [index, setIndex] = useState(0);
    return (
        <section className='w-full h-full flex flex-col items-center'>
            <h2 className='font-bold text-[42px] leading-[133.02%] text-main text-center max-w-[566px] xl:text-[36px]'>
                Earn free crypto after making your first purchase.
            </h2>
            <p className='mt-5 text-center text-[14px] leading-[170%] text-secondary'>
                *The average Edgevana operator earns $950 a month in incentives.{' '}
                <Link className='text-button font-semibold' href={'/sign-up'}>
                    See terms
                </Link>
            </p>
            <div className='mt-12 relative w-full h-full max-w-[659px] max-h-[686px] min-h-[530px] mx-auto lg:mt-0 md:min-h-0'>
                <Image src='/Incentives.png' alt='analytics' fill className='object-contain' />
                <Image
                    src='/Mobile.png'
                    alt='Mobile analytics'
                    fill
                    className='object-contain max-h-[378px] max-w-[222px] -translate-x-[25%] bottom-[10px] lg:max-w-[188px] md:bottom-[-40px]'
                    style={{ top: 'auto' }}
                />
            </div>
        </section>
    );
};

export default GeneralSecondSection;
