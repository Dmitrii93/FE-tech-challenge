import SideBar from '@/components/ui/SideBar';
import ToolKitSection from '@/components/ui/ToolKitSection';

const ToolKitScreen = () => {
    return (
        <div className='bg-hovered h-screen flex'>
            <SideBar />
            <ToolKitSection />
        </div>
    );
};

export default ToolKitScreen;
