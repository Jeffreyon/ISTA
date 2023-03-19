import Maincontent from "@/components/blog/Maincontent";
import TopBlogPost from "@/components/blog/TopBlogPost";
import ContactHeader from "@/components/ContactHeader";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function index() {
    return (
        <>
            <Navbar />
            {/* Code the remaining parts of blog page here */}
            <TopBlogPost/>
            <Maincontent/>
            <ContactHeader />
            <Footer />
        </>
    );
}
