import layoutStyles from '../styles/Layout.module.scss'
import Navigation from './Navigation'
import Footer from './Footer';
import Head from 'next/head';
import { useRouter } from 'next/dist/client/router';

const Layout = ({children, pageMeta}) => {
    const router = useRouter()
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
    
    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name='keywords' content={meta.keywords}></meta>
                <meta name='description' content={meta.description}></meta>
                <meta property="og:url" content={meta.url} />
            </Head>
            <Navigation />
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