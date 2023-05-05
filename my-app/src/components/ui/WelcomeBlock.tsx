import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const WelcomeBlock = () => {
    const { push } = useRouter();
    return (
        <div className='flex flex-col max-w-[400px]'>
            <h1 className='font-bold text-[26px] leading-[31px] text-main md:mt-3'>Welcome to Edgevana</h1>
            <p className='mt-3 text-secondary text-[15px] leading-[18px]'>Choose your account type to get started</p>
            <div className='mt-[40px] pt-[25px] pr-[25px] pb-[21px] pl-[84px] relative border-[1.5px] rounded-lg border-border hover:bg-hovered'>
                <Image
                    className='absolute top-[30px] left-[33px]'
                    src='/Body.svg'
                    alt='body icon'
                    width='20'
                    height='26'
                />
                <h4 className='font-semibold text-[16px] leading-[19px]'>Individual</h4>
                <p className='mt-[10px] text-secondary text-[14px] leading-[24px] -tracking-[0.005em]'>
                    For individuals who want to participate, develop or build with a click of a button.
                </p>
            </div>
            <div className='mt-[20px] pt-[25px] pr-[25px] pb-[21px] pl-[84px] relative border-[1.5px] rounded-lg border-border hover:bg-hovered'>
                <Image
                    className='absolute top-[30px] left-[33px]'
                    src='/Case.svg'
                    alt='body icon'
                    width='30'
                    height='37'
                />
                <h4 className='font-semibold text-[16px] leading-[19px]'>Business</h4>
                <p className='mt-[10px] text-secondary text-[14px] leading-[24px] -tracking-[0.005em]'>
                    For companies and institutions who need access to our suite of tools and real-time insights to
                    manage and run their operations.
                </p>
            </div>
            <button
                onClick={() => push('/sign-up')}
                className='mt-[40px] w-full py-[18px] bg-button text-white rounded-lg backdrop-blur-[2px] text-[14px] leading-[17px] font-semibold'
            >
                Get Started
            </button>
            <p className='mt-[30px] text-center text-secondary text-[15px] leading-[18px] font-medium'>
                Already have an account?{' '}
                <Link className='text-button font-semibold' href='/sign-up'>
                    Sign in
                </Link>
            </p>
        </div>
    );
};

export default WelcomeBlock;
