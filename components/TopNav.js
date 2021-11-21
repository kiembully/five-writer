import Link from 'next/link';
import navStyles from '../styles/Nav.module.scss'
import 'hover.css'

const TopNav = () => {
    return (
        <>
        <nav className={navStyles.nav}>
            <ul >
                <li><Link href='/'><a className={`${navStyles.brand} hvr-grow`}>Logo Here</a></Link></li>
                <span className={navStyles.fillSpace}></span>
                <li><Link href='mailto:support@cheapestessay.com'><a className={navStyles.externalLink}>Email: support@cheapestessay.com</a></Link></li>
                <li><Link href='https://api.whatsapp.com/send?phone=19094411414'><a className={navStyles.externalLink}>WhatsApp: +1 (909) 441-1414</a></Link></li>
                <span className={navStyles.fillSpace}></span>
                <li><Link href='/login'><a className={`${navStyles.loginBtn} ${navStyles.navBtn} hvr-grow`}>Login</a></Link></li>
                <li><Link href='/register'><a className={`${navStyles.registerBtn} ${navStyles.navBtn} hvr-grow`}>Register</a></Link></li>
            </ul>
        </nav>
        </>
    );
}

export default TopNav;