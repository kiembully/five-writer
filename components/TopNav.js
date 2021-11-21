import Link from 'next/link';
import navStyles from '../styles/Nav.module.scss';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { MdMenu } from "react-icons/md";
import 'hover.css'

const TopNav = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
        <nav className={navStyles.nav}>
            <ul >
                <li className={navStyles.webNav}><Link href='/'><a className={`${navStyles.brand} hvr-grow`}>Logo Here</a></Link></li>
                <li className={navStyles.mobileNav}><Button className={navStyles.btnNav} onClick={handleShow}><MdMenu /></Button></li>
                <span className={navStyles.fillSpace}></span>
                <li className={navStyles.webNav}><Link href='mailto:support@cheapestessay.com'><a className={navStyles.externalLink}>Email: support@cheapestessay.com</a></Link></li>
                <li className={navStyles.webNav}><Link href='https://api.whatsapp.com/send?phone=19094411414'><a className={navStyles.externalLink}>WhatsApp: +1 (909) 441-1414</a></Link></li>
                <span className={navStyles.fillSpace}></span>
                <li><Link href='/login'><a className={`${navStyles.loginBtn} ${navStyles.navBtn} hvr-grow`}>Login</a></Link></li>
                <li><Link href='/register'><a className={`${navStyles.registerBtn} ${navStyles.navBtn} hvr-grow`}>Register</a></Link></li>
            </ul>
        </nav>

        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title><span className={navStyles.mobBrand}>Five Writer</span></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <nav className={`${navStyles.nav} ${navStyles.navColumn}`}>
                    <ul>
                        <li><Link href='/'><a className={`${navStyles.brand} hvr-grow`}>Logo Here</a></Link></li>
                        <span className={navStyles.fillSpace}></span>
                        <li><Link href='https://api.whatsapp.com/send?phone=19094411414'><a className={navStyles.externalLink}>WhatsApp: +1 (909) 441-1414</a></Link></li>
                        <li><Link href='mailto:support@cheapestessay.com'><a className={navStyles.externalLink}>Email: support@cheapestessay.com</a></Link></li>
                    </ul>
                </nav>
            </Offcanvas.Body>
        </Offcanvas>
        </>
    );
}

export default TopNav;