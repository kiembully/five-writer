import Image from 'next/image';
import img404 from '../public/404.svg';
import Link from 'next/link';
import notfoundStyles from '../styles/404.module.scss'

const notfound = () => {
    return (
        <div className={notfoundStyles.notfoundWrap}>
            <Image src={img404} width={500} height={315} alt='404 image' />
            <h1>The page you are looking for is not available!</h1>
            <Link href='/'><a>Go To Home</a></Link>
        </div>
    );
}

export default notfound;