import footerStyles from '../styles/Footer.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import payoneer from '../public/payoneer.png'

const Footer = () => {
    const user_token = typeof window !== 'undefined' ? localStorage.getItem('user_token') : null;
    
    return (
        <>
        <div className={footerStyles.footerWrap}>
            {!!user_token?
            <p>Copyright © 2021 5writer.com . All rights reserved.</p>
            :
            <></>
            }
            <p>Copyright © 2021 5writer.com . All rights reserved.</p>
            {!!user_token?
            <>
            <Link href='https://api.whatsapp.com/send?phone=19094411414'><a>WhatsApp: +1 (909) 441-1414</a></Link>
            <span><Image src={payoneer} width={103} height={20} alt='Payoneer Logo' /></span>
            </>
            :
            <></>
            }
        </div>
        </>
    );
}

export default Footer;