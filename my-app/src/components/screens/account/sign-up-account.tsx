import FormLayout from '@/components/layouts/form-layout';
import SecondSectionLayout from '@/components/layouts/second-section-layout';
import WelcomeBlock from '@/components/ui/WelcomeBlock';
import WelcomeSecondSection from '@/components/ui/WelcomeSecondSection';

const SignUpAccount = () => {
    return (
        <div className='flex items-stretch h-screen overflow-y-hidden'>
            <div className='flex-1'>
                <FormLayout>
                    <WelcomeBlock />
                </FormLayout>
            </div>
            <div className='flex-1 relative'>
                <SecondSectionLayout>
                    <div className='2xl:pl-[105px] 2xl:pr-[46px] 2xl:py-[146px] lg:p-[24px] xl:p-[46px] p-6 h-full'>
                        <WelcomeSecondSection />
                    </div>
                </SecondSectionLayout>
            </div>
        </div>
    );
};
export default SignUpAccount;
