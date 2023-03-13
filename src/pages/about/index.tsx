import ContactHeader from "@/components/ContactHeader";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SubjectsFeature from "@/components/SubjectsFeature";

export default function index() {
    return (
        <>
            <Navbar />
            {/* Code the remaining parts of about page here */}
            <SubjectsFeature />
            <ContactHeader />
            <Footer />
        </>
    );
}
