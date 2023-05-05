import FormLayout from '@/components/layouts/form-layout';
import SecondSectionLayout from '@/components/layouts/second-section-layout';
import GeneralBlock from '@/components/ui/GeneralBlock';
import GeneralSecondSection from '@/components/ui/GeneralSecondSection';

const SignUpGeneral = () => {
    return (
        <div className='flex items-stretch min-h-screen lg:flex-col lg:overflow-auto'>
            <div className='flex-1'>
                <FormLayout>
                    <GeneralBlock />
                </FormLayout>
            </div>
            <div className='flex-1 relative'>
                <SecondSectionLayout>
                    <div className='py-[158px] xl:py-[96px]  sm:py-4 px-2 h-full md:min-h-[768px]'>
                        <GeneralSecondSection />
                    </div>
                </SecondSectionLayout>
            </div>
        </div>
    );
};
export default SignUpGeneral;
