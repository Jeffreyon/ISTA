import Contactforms from "@/components/contact/Contactforms";
import Infos from "@/components/contact/Infos";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function index() {
    return (
        <>
            <Navbar />
            {/* Code up contact page here */}
         <div className="bg-primary-1000 py-14">
                <Infos />
                <Contactforms />
         </div>
            <Footer />
        </>
    );
}
