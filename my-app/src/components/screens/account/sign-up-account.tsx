import FormLayout from '@/components/layouts/form-layout';
import SecondSectionLayout from '@/components/layouts/second-section-layout';
import WelcomeBlock from '@/components/ui/WelcomeBlock';
import WelcomeSecondSection from '@/components/ui/WelcomeSecondSection';

const SignUpAccount = () => {
    return (
        <div className='flex items-stretch min-h-screen overflow-y-hidden md:flex-col md:overflow-auto sm:flex-col sm:overflow-auto'>
            <div className='flex-1'>
                <FormLayout>
                    <WelcomeBlock />
                </FormLayout>
            </div>
            <div className='flex-1 relative'>
                <SecondSectionLayout>
                    <div className='pl-[105px] pr-[46px] py-[146px] 2xl:py-[48px] lg:p-[24px] xs:p-3 h-full min-h-[1024px] md:min-h-[768px]'>
                        <WelcomeSecondSection />
                    </div>
                </SecondSectionLayout>
            </div>
        </div>
    );
};
export default SignUpAccount;
