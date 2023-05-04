import FormLayout from '@/components/layouts/form-layout';
import SecondSectionLayout from '@/components/layouts/second-section-layout';
import GeneralBlock from '@/components/ui/GeneralBlock';
import GeneralSecondSection from '@/components/ui/GeneralSecondSection';

const SignUpGeneral = () => {
    return (
        <div className='flex items-stretch h-screen overflow-y-hidden'>
            <div className='flex-1'>
                <FormLayout>
                    <GeneralBlock />
                </FormLayout>
            </div>
            <div className='flex-1 relative'>
                <SecondSectionLayout>
                    <div className='px-[149px] py-[158px] 3xl:px-[46px] h-full'>
                        <GeneralSecondSection />
                    </div>
                </SecondSectionLayout>
            </div>
        </div>
    );
};
export default SignUpGeneral;
