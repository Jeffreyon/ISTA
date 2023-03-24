import Maincontent from "@/components/blog/Maincontent";
import TopBlogPost from "@/components/blog/TopBlogPost";
import ContactHeader from "@/components/ContactHeader";
import MainLayout from "@/components/layout/MainLayout";

export default function index() {
    return (
        <>

            <MainLayout>
                <TopBlogPost />
                <Maincontent />
                <ContactHeader />
            </MainLayout>

        </>
    );
}
