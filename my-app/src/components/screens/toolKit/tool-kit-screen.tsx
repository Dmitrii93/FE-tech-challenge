import SideBar from '@/components/ui/SideBar';
import SideBarMobiles from '@/components/ui/SideBarMobiles';
import ToolKitSection from '@/components/ui/ToolKitSection';

const ToolKitScreen = () => {
    return (
        <div className='bg-hovered flex min-h-screen'>
            <SideBar />
            <SideBarMobiles />
            <ToolKitSection />
        </div>
    );
};

export default ToolKitScreen;
