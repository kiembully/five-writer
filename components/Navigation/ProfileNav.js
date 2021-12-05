import navStyles from './Nav.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import companyLogo from '../../public/5writer-logo.svg'
import walletIcon from '../../public/mini-icons/Wallet.svg'
import notificationIcon from '../../public/mini-icons/Nofitification.svg'
import chatIcon from '../../public/mini-icons/Chat.svg'
import jwt_decode from "jwt-decode";
import { Dropdown } from 'react-bootstrap';
import { MdPerson, MdMenu, MdLogout, MdOutlineAccountBalanceWallet, MdOutlinePersonOutline  } from 'react-icons/md';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';

const ProfileNav = ({ownersList}) => {
    // page behaviors 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const router = useRouter();

    // display user details 
    const [user_token, set_user_token] = useState();
    const [writer_id, set_writer_id] = useState();
    const [writer_level, set_writer_level] = useState();
    const [balance, set_balance] = useState();
    const logoutUser = () => {
        handleClose();
        // localStorage.clear();
        router.push('/')
    }
    
    useEffect(() => {
        const token = typeof window !== 'undefined' ? localStorage.getItem('user_token') : null;
        const decode_token = jwt_decode(token)
        set_user_token(token);
        set_writer_id(decode_token.user_name);
        set_writer_level(decode_token.writer_level);
        set_balance(decode_token.balance);
    }, [])
    
    return (
        <>
        <div className={navStyles.profileNavWrap}>
            <nav className={navStyles.nav}>
                <ul >
                    <li className={navStyles.webNav}>
                        <Link href='/'>
                            <a>
                            <Image src={companyLogo} width={90} height={45} alt='5writer logo' />
                            </a>
                        </Link>
                    </li>
                    <li className={navStyles.mobileNav}><Button className={navStyles.btnNav} onClick={handleShow}><MdMenu /></Button></li>
                    <li className={navStyles.fillSpace}></li>
                    <li className={navStyles.userInfoOuter}>
                        <div className={navStyles.userInfoWrap}>
                            <span className={navStyles.userIcons}><Image src={walletIcon} width={22} height={22} alt='wallet icon' /></span>
                            <span className={navStyles.uiLabel}></span>
                            <span className={navStyles.uiValue}>{balance}</span>
                        </div>
                    </li>
                    <li className={navStyles.userInfoOuter}>
                        <div className={navStyles.userInfoWrap}>
                            <span className={navStyles.uiLabel}>Writer ID:</span>
                            <span className={navStyles.uiValue}>{writer_id}</span>
                        </div>
                    </li>
                    <li className={navStyles.userInfoOuter}>
                        <div className={navStyles.userInfoWrap}>
                            <span className={navStyles.uiLabel}>Level:</span>
                            <span className={navStyles.uiValue}>{writer_level}</span>
                        </div>
                    </li>
                    <li>
                    <Dropdown drop="start" className={`${navStyles.profileDrop} ${navStyles.transparent}`}>
                        <Dropdown.Toggle id="chat-dropdown">
                            <Image src={chatIcon} width={30} height={30} alt='' />
                        </Dropdown.Toggle>

                        <Dropdown.Menu className={navStyles.dropWrap}>
                        <Dropdown.Item href="#/action-1" active>
                            Action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </li>
                    <li>
                    <Dropdown drop="start" className={`${navStyles.profileDrop} ${navStyles.transparent}`}>
                        <Dropdown.Toggle id="bell-dropdown">
                            <Image src={notificationIcon} width={30} height={30} alt='' />
                        </Dropdown.Toggle>

                        <Dropdown.Menu className={navStyles.dropWrap}>
                        <Dropdown.Item href="#/action-1" active>
                            Action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </li>
                    <li>
                    <Dropdown drop="start" className={navStyles.profileDrop}>
                        <Dropdown.Toggle id="profile-dropdown">
                            <MdPerson />
                        </Dropdown.Toggle>

                        <Dropdown.Menu className={navStyles.dropWrap}>
                        <Dropdown.Item href="#/action-2">
                            <div className={navStyles.dropItem}>
                                <span className={navStyles.spnProfile}><MdPerson /></span>
                                <span>
                                    <p>Carls TestWriter</p>
                                    <label>llagas.writer@gmail.com</label>
                                </span>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-3"><div className={navStyles.dropItem}><span><MdOutlinePersonOutline /></span><span><p> My Profile</p></span></div></Dropdown.Item>
                        <Dropdown.Item href="#/action-4"><div className={navStyles.dropItem}><span><MdOutlineAccountBalanceWallet /></span><span><p> My Invoice</p></span></div></Dropdown.Item>
                        <Dropdown.Item onClick={logoutUser}><div className={navStyles.dropItem}><span><MdLogout /></span><span><p> Logout</p></span></div></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </li>
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
                            <li className={navStyles.mMenu}><Link href='/dashboard'><a onClick={handleClose} className={router.pathname == '/dashboard' ? navStyles.active : ''}>Dashboard</a></Link></li>
                            <li className={navStyles.mMenu}><Link href='/qualifications'><a onClick={handleClose} className={router.pathname == '/qualifications' ? navStyles.active : ''}>Qualifications</a></Link></li>
                            <li className={navStyles.mMenu}><Link href='/information-test'><a onClick={handleClose} className={router.pathname == '/information-test' ? navStyles.active : ''}>Information Test</a></Link></li>
                            <li className={navStyles.mMenu}><Link href='/essay-test'><a onClick={handleClose} className={router.pathname == '/essay-test' ? navStyles.active : ''}>Essay Test</a></Link></li>
                            <li className={navStyles.mMenu}><Link href='/my-specialization'><a onClick={handleClose} className={router.pathname == '/my-specialization' ? navStyles.active : ''}>My Specialization</a></Link></li>
                            <li className={navStyles.mMenu}><Link href='/writers-request'><a onClick={handleClose} className={router.pathname == '/writers-request' ? navStyles.active : ''}>Writers Request</a></Link></li>
                            <li className={navStyles.fillSpace}></li>
                            <li><Link href='https://api.whatsapp.com/send?phone=19094411414'><a className={navStyles.externalLink}>WhatsApp: +1 (909) 441-1414</a></Link></li>
                            <li><Link href='mailto:support@cheapestessay.com'><a className={navStyles.externalLink}>Email: support@cheapestessay.com</a></Link></li>
                        </ul>
                    </nav>
                </Offcanvas.Body>
            </Offcanvas>
            
        </div>
        
        </>
    );
}

export default ProfileNav;