import Banner from "@/components/about/Banner";
import Corevalues from "@/components/about/Corevalues";
import Header from "@/components/about/Header";
import Philosophy from "@/components/about/Philosophy";
import ContactHeader from "@/components/ContactHeader";
import MainLayout from "@/components/layout/MainLayout";
import SubjectsFeature from "@/components/SubjectsFeature";



export default function index() {
    return (
        <>
            <MainLayout>
                <Header />
                <Philosophy />
                <Banner />
                <Corevalues />
                <SubjectsFeature />
                <ContactHeader />
            </MainLayout>
        </>
    );
}
