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
                    <div className='2xl:pl-[105px] 2xl:pr-[46px] 2xl:py-[146px] lg:p-[24px]  p-6 h-full md:min-h-[768px] sm:min-h-[768px] xs:p-4'>
                        <WelcomeSecondSection />
                    </div>
                </SecondSectionLayout>
            </div>
        </div>
    );
};
export default SignUpAccount;
