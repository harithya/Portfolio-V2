import MainLayout from '../components/layouts/MainLayout'
import '../styles/globals.css'
import Router from 'next/router';
import { ThemeProvider } from 'next-themes'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <MainLayout >
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  )
}

export default MyApp
