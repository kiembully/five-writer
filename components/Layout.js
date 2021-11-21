import layoutStyles from '../styles/Layout.module.scss'
import TopNav from './TopNav';
import Footer from './Footer';

const Layout = ({children}) => {
    return (
        <>
            <TopNav />
            <div className={layoutStyles.container}>
                <main className={layoutStyles.main}>
                    {children}
                </main>
            </div>
            <Footer />
        </>
    );
}

export default Layout;