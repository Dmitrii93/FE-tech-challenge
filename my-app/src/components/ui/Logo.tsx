import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
    return (
        <Link href='/' className='block w-max'>
            <Image src='/Logo.svg' alt='logo' width='171' height='38' />
        </Link>
    );
};

export default Logo;
