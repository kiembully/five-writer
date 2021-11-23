import '../styles/globals.scss'
import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout pageMeta={{}}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
