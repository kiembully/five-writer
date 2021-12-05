import Link from 'next/link';
import Image from 'next/image';
import navStyles from './Nav.module.scss';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { MdMenu, MdLogout } from "react-icons/md";
import 'hover.css'
import { useRouter } from 'next/dist/client/router';
import companyLogo from '../../public/5writer-logo.svg'

const GuestNav = () => {
    const [user_token, set_user_token] = useState();
    useEffect(() => {
        set_user_token(typeof window !== 'undefined' ? localStorage.getItem('user_token') : null)
    }, [])

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const router = useRouter();
    function handleTopMenu() {
        const arr = ['/login', '/register', '/forgot']
        return arr.includes(router.pathname)
    }
    const logoutUser = () => {
        handleClose();
        localStorage.clear();
        router.push('/')
    }
    
    return (
        <>
        <nav className={navStyles.nav}>
            <ul >
                <li className={navStyles.webNav}><Link href='/'><a className={`${navStyles.brand} hvr-grow`}>Logo Here</a></Link></li>
                <li className={navStyles.mobileNav}><Button className={navStyles.btnNav} onClick={handleShow}><MdMenu /></Button></li>
                <li className={navStyles.fillSpace}></li>
                {!handleTopMenu()?
                <>
                <li className={navStyles.webNav}><Link href='mailto:support@cheapestessay.com'><a className={navStyles.externalLink}>Email: support@cheapestessay.com</a></Link></li>
                <li className={navStyles.webNav}><Link href='https://api.whatsapp.com/send?phone=19094411414'><a className={navStyles.externalLink}>WhatsApp: +1 (909) 441-1414</a></Link></li>
                <li className={navStyles.fillSpace}></li>
                <li>
                    {!!user_token?
                    <Link href='/dashboard'><a className={`${navStyles.loginBtn} ${navStyles.navBtn} hvr-grow`}>Dashboard</a></Link>
                    :
                    <Link href='/login'><a className={`${navStyles.loginBtn} ${navStyles.navBtn} hvr-grow`}>Login</a></Link>
                    }
                </li>
                <li style={!!user_token?{display:'none'}:{display:'inline'}}><Link href='/register'><a className={`${navStyles.registerBtn} ${navStyles.navBtn} hvr-grow`}>Register</a></Link></li>
                </>
                :null}
            </ul>
        </nav>

        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>
                {!!user_token?
                 <button aria-label="menu button" className={navStyles.logoutBtn} type="button" onClick={logoutUser}><MdLogout /></button>
                :<span className={navStyles.mobBrand}>5Writer</span>}
            </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <nav className={`${navStyles.nav} ${navStyles.navColumn}`}>
                    <ul>
                        <li>
                            <Link href='/'>
                            <a className={`${navStyles.brandMobile} hvr-grow`}>
                                <Image src={companyLogo} width={90} height={45} alt='5writer logo' />
                            </a>
                            </Link>
                        </li>
                        <li className={navStyles.fillSpace}></li>
                        <li><Link href='https://api.whatsapp.com/send?phone=19094411414'><a className={navStyles.externalLink}>WhatsApp: +1 (909) 441-1414</a></Link></li>
                        <li><Link href='mailto:support@cheapestessay.com'><a className={navStyles.externalLink}>Email: support@cheapestessay.com</a></Link></li>
                    </ul>
                </nav>
            </Offcanvas.Body>
        </Offcanvas>
        </>
    );
}

export default GuestNav;