import { FC, PropsWithChildren } from 'react';

const SecondSectionLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div style={{ background: 'linear-gradient(90deg, #F2F4FC 0%, #FFFFFF 100%)' }} className='h-full'>
            {children}
        </div>
    );
};
export default SecondSectionLayout;
