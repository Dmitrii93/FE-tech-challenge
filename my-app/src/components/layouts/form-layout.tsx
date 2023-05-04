import { FC, PropsWithChildren } from 'react';
import Logo from '../ui/Logo';
import Footer from '../ui/Footer';

const FormLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className='pb-8 pt-5 px-6 flex flex-col h-full'>
            <Logo />
            <div className='grow flex justify-center items-center'>{children}</div>
            <Footer />
        </div>
    );
};
export default FormLayout;
