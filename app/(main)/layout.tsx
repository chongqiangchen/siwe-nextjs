import Sidebar from "@/components/layouts/sidebar";

const MainLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <>
            <Sidebar />
            {children}
        </>
    )
}

export default MainLayout;
