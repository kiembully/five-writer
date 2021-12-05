import navStyles from './Nav.module.scss'
import Link from 'next/link';
import Image from 'next/image';

// bootstrap 
import Nav from 'react-bootstrap/Nav'

// icons 
import allOrders from '../../public/dashboard-nav-icons/all-orders.svg'
import allOrdersActive from '../../public/dashboard-nav-icons/all-orders-active.svg'
import essayTest from '../../public/dashboard-nav-icons/essay-test.svg'
import essayTestActive from '../../public/dashboard-nav-icons/essay-test-active.svg'
import infoTest from '../../public/dashboard-nav-icons/info-test.svg'
import infoTestActive from '../../public/dashboard-nav-icons/info-test-active.svg'
import mySpecialization from '../../public/dashboard-nav-icons/my-specialization.svg'
import mySpecializationActive from '../../public/dashboard-nav-icons/my-specialization-active.svg'
import qualification from '../../public/dashboard-nav-icons/qualification.svg'
import qualificationActive from '../../public/dashboard-nav-icons/qualification-active.svg'
import writersRequest from '../../public/dashboard-nav-icons/writers-request.svg'
import writersRequestActive from '../../public/dashboard-nav-icons/writers-request-active.svg'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';

const DashboardNav = () => {
    const [active, setActive] = useState();
    const [navdashboard, setDashboard] = useState();
    const [navqualification, setQualification] = useState();
    const [navinfoTest, setInfoTest] = useState();
    const [navessayTest, setEssayTest] = useState();
    const [navmySpecialization, setMySpecialization] = useState();
    const [navwritersRequest, setWritersRequest] = useState();
    const router = useRouter();
    useEffect(() => {
        setDashboard(router.pathname == '/dashboard')
        setQualification(router.pathname == '/qualifications')
        setInfoTest(router.pathname == '/information-test')
        setEssayTest(router.pathname == '/essay-test')
        setMySpecialization(router.pathname == '/my-specialization')
        setWritersRequest(router.pathname == '/writers-request')
    }, [])

    return (
        <div className={navStyles.dashboardNav}>
            <nav className={navStyles.nav}>
                <ul>
                    <li>
                        <Link href='/dashboard'><a className={router.pathname == '/dashboard' ? navStyles.active : ''}><div className={navStyles.imageIconWrap}><Image src={router.pathname=='/dashboard'?allOrdersActive:allOrders} width={30} height={30} alt='allOrders icon' /></div><label>All Orders</label></a></Link>
                    </li>
                    <li>
                        <Link href='/qualifications'><a className={router.pathname == '/qualifications' ? navStyles.active : ''}><div className={navStyles.imageIconWrap}><Image src={router.pathname=='/qualifications'?qualificationActive:qualification} width={30} height={30} alt='essayTest icon' /></div><label>Qualifications</label></a></Link>
                    </li>
                    <li>
                        <Link href='/information-test'><a className={router.pathname == '/information-test' ? navStyles.active : ''}><div className={navStyles.imageIconWrap}><Image src={router.pathname=='/information-test'?infoTestActive:infoTest} width={30} height={30} alt='infoTest icon' /></div><label>Information Test</label></a></Link>
                    </li>
                    <li>
                        <Link href='/essay-test'><a className={router.pathname == '/essay-test' ? navStyles.active : ''}><div className={navStyles.imageIconWrap}><Image src={router.pathname=='/essay-test'?essayTestActive:essayTest} width={30} height={30} alt='essayTest icon' /></div><label>Essay Test</label></a></Link>
                    </li>
                    <li>
                        <Link href='/my-specialization'><a className={router.pathname == '/my-specialization' ? navStyles.active : ''}><div className={navStyles.imageIconWrap}><Image src={router.pathname=='/my-specialization'?mySpecializationActive:mySpecialization} width={30} height={30} alt='mySpecialization icon' /></div><label>My Specialization</label></a></Link>
                    </li>
                    <li>
                        <Link href='/writers-request'><a className={router.pathname == '/writers-request' ? navStyles.active : ''}><div className={navStyles.imageIconWrap}><Image src={router.pathname=='/writers-request'?writersRequestActive:writersRequest} width={30} height={30} alt='writersRequest icon' /></div><label>Writers Request</label></a></Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default DashboardNav;