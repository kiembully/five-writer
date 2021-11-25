import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image';
import homeStyles from '../styles/Home.module.scss';
import utilStyles from '../styles/Layout.module.scss'
import imgBanner from '../public/home.svg';
import 'hover.css';

export default function Home() {
  return (
    <div className={utilStyles.containerOuter}>
      {/* <Head>
        <title>Home</title>
        <meta name='keywords' content='home'></meta>
        <meta name='description' content='home content'></meta>
      </Head> */}
      
      <div className={utilStyles.containerWrap}>
        <div className={utilStyles.containerInner}>
          <span>
            <div className={homeStyles.bannerWrap}>
              <h1>Become a Freelance</h1>
              <h2>Writer with Us</h2>
              <p>5writer.com is always in search for skilled, talented and experienced writers. If you enjoy writing, like to share your knowledge with others, you are welcome to register with us!</p>
              <Link href='/register'><a className="hvr-pulse">Become a Writer</a></Link>
            </div>
          </span>
          <span>
            <div className={homeStyles.imgWrap}>
              <Image src={imgBanner} width={600} height={500} alt='woman writing' layout="responsive" priority />
            </div>
          </span>
        </div>
      </div>

    </div>
  )
}
