import Contactform from "@/components/contact/Contactform";
import Info from "@/components/contact/Info";
import MainLayout from "@/components/layout/MainLayout";


export default function index() {
    return (
        <>
            <MainLayout>
                <div className="bg-primary-1000 py-16">
                    <div className="container">
                        <Info />
                        <Contactform />
                    </div>
                </div>
            </MainLayout>
        </>
    );
}
