import SideBar from '@/components/ui/SideBar';
import ToolKitSection from '@/components/ui/ToolKitSection';

const ToolKitScreen = () => {
    return (
        <div className='bg-hovered flex min-h-screen'>
            <SideBar />
            <ToolKitSection />
        </div>
    );
};

export default ToolKitScreen;
