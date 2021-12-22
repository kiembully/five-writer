import '../styles/globals.scss'
import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, } from 'react';
import { useRouter } from 'next/dist/client/router';
// jwt 
import jwt_decode from "jwt-decode";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function MyApp({ Component, pageProps, data }) {
  // toast config 
  const notify = () => toast.warn('Your session has expired!', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  // AUTH GUARD
  // prevent users from accessing prohibited page 
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    checkTokenExpiration();
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
  }, [])

  function checkTokenExpiration() {
    const user_token = typeof window !== 'undefined' ? localStorage.getItem('user_token') : null;
    if (!!user_token) {
      let exp = jwt_decode(user_token).exp;
      if (Date.now() >= exp * 1000) {
        // expired token 
        notify();
        localStorage.clear();
        router.push('/login')
      }
    }
  }

  return (
    <>
    <Layout pageMeta={{}}>
      <Component {...pageProps} />
    </Layout>

    <ToastContainer
    position="top-center"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    />
    </>
  )
}

export default MyApp
