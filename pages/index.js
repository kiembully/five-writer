import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image';
import homeStyles from '../styles/Home.module.scss';
import homeBanner from '../public/home/home.svg';
import 'hover.css';

export default function Home() {
  return (
    <div className={homeStyles.homeOuter}>
      <Head>
        <title>Home</title>
        <meta name='keywords' content='home'></meta>
      </Head>
      
      <div className={homeStyles.homeWrap}>
        <div className={homeStyles.homeInner}>
          <span>
            <div className={homeStyles.bannerWrap}>
              <h1>Become a Freelance</h1>
              <h2>Writer with Us</h2>
              <p>5writer.com is always in search for skilled, talented and experienced writers. If you enjoy writing, like to share your knowledge with others, you are welcome to register with us!</p>
              <Link href='/'><a className="hvr-pulse">Become a Writer</a></Link>
            </div>
          </span>
          <span>
            <div className={homeStyles.imgWrap}>
              <Image src={homeBanner} width={600} height={500} alt='woman writing' layout="responsive" />
            </div>
          </span>
        </div>
      </div>

    </div>
  )
}
