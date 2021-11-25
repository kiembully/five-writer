import navStyles from './Nav.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import companyLogo from '../../public/5writer-logo.svg'
import walletIcon from '../../public/mini-icons/Wallet.svg'
import notificationIcon from '../../public/mini-icons/Nofitification.svg'
import chatIcon from '../../public/mini-icons/Chat.svg'
import jwt_decode from "jwt-decode";
import { Dropdown } from 'react-bootstrap';
import { MdPerson } from 'react-icons/md';

const ProfileNav = () => {
    const user_token = typeof window !== 'undefined' ? localStorage.getItem('user_token') : null;
    function setWriterId() {
        if (!!user_token) {
            return jwt_decode(user_token).user_name
        }
    }
    
    
    return (
        <>
        <div className={navStyles.profileNavWrap}>
            <nav className={navStyles.nav}>
                <ul >
                    <li>
                        <Link href='/'>
                            <a>
                            <Image src={companyLogo} width={90} height={45} alt='5writer logo' />
                            </a>
                        </Link>
                    </li>
                    <li className={navStyles.fillSpace}></li>
                    <li className={navStyles.userInfoOuter}>
                        <div className={navStyles.userInfoWrap}>
                            <span className={navStyles.userIcons}><Image src={walletIcon} width={22} height={22} alt='wallet icon' /></span>
                            <span className={navStyles.uiLabel}>$</span>
                            <span className={navStyles.uiValue}>486</span>
                        </div>
                    </li>
                    <li className={navStyles.userInfoOuter}>
                        <div className={navStyles.userInfoWrap}>
                            <span className={navStyles.uiLabel}>Writer ID:</span>
                            <span className={navStyles.uiValue}>{setWriterId()}</span>
                        </div>
                    </li>
                    <li className={navStyles.userInfoOuter}>
                        <div className={navStyles.userInfoWrap}>
                            <span className={navStyles.uiLabel}>Level:</span>
                            <span className={navStyles.uiValue}>College</span>
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
                </ul>
            </nav>
        </div>
        </>
    );
}

export default ProfileNav;