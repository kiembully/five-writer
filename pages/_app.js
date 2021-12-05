import '../styles/globals.scss'
import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, } from 'react';
import { useRouter } from 'next/dist/client/router';

function MyApp({ Component, pageProps, data }) {

  // AUTH GUARD
  // prevent users from accessing prohibited page 
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    const protectedPage = ['/dashboard'];
    const userEntryPage = ['/login', '/register', '/forgot'];
    const user_token = typeof window !== 'undefined' ? localStorage.getItem('user_token') : null;
    if (!!user_token) {
      if (userEntryPage.includes(router.pathname)) {
          router.push('/404')
      }
    } else {
        if (protectedPage.includes(router.pathname)) {
            router.push('/404')
        }
    }
  })

  return (
    <Layout pageMeta={{}}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
