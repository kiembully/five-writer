import layoutStyles from '../styles/Layout.module.scss'
import Navigation from './Navigation'
import Footer from './Footer';
import Head from 'next/head';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";

const Layout = ({children, pageMeta}) => {
    const router = useRouter();
    const meta = {
        title: 'Five Writer - ' + capitalizeFirstLetter((router.pathname).replace(/\//g, "")),
        description: 'The online help for cheap custom essay. Fast quality service, ideal for college papers and a lot more. Create an account for free.',
        keywords: 'Writer',
        type: 'website',
        url: 'http://localhost:3000' + router.pathname,
        ...pageMeta
    }
    function capitalizeFirstLetter(string) {
        return (string !== '') ? string.charAt(0).toUpperCase() + string.slice(1) : 'Home';
    }

    // initialize dashboard layout based on user status
    const [isApplicant, setIsApplicant] = useState(true);
    useEffect(() => {
        setIsApplicant(setDashboardLayout())
    }, [])
    function setDashboardLayout() {
        const user_token = typeof window !== 'undefined' ? localStorage.getItem('user_token') : null;
        if (!!user_token) {
            let user_name = jwt_decode(user_token).user_name;
            return user_name.includes('A');
        }
    }
    
    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name='keywords' content={meta.keywords}></meta>
                <meta name='description' content={meta.description}></meta>
                <meta property="og:url" content={meta.url} />
            </Head>
            <Navigation isApplicant={isApplicant}/>
            <div className={layoutStyles.container}>
                <main className={layoutStyles.main}>
                    {children}
                </main>
                <Footer />
            </div>
        </>
    );
}

export default Layout;