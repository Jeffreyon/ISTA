import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';

type Props = {
    children: ReactNode;
    title?: string;
};

const MainLayout = ({ children, title }: Props) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default MainLayout;