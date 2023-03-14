import Banner from "@/components/about/Banner";
import Corevalues from "@/components/about/Corevalues";
import Header from "@/components/about/Header";
import Philosophy from "@/components/about/Philosophy";
import ContactHeader from "@/components/ContactHeader";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SubjectsFeature from "@/components/SubjectsFeature";



export default function index() {
    return (
        <>
            <Navbar />
            {/* Code the remaining parts of about page here */}
            <Header />
            <Philosophy />
            <Banner />
            <Corevalues/>
            <SubjectsFeature />
            <ContactHeader />

            <Footer />
        </>
    );
}
