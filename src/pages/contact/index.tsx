import Contactform from "@/components/contact/Contactform";
import Info from "@/components/contact/Info";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function index() {
    return (
        <>
            <Navbar />
            <div className="bg-primary-1000 py-16">
                <div className="container">
                    <Info />
                    <Contactform />
                </div>
            </div>
            <Footer />
        </>
    );
}
