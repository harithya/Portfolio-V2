import MainLayout from '../components/layouts/MainLayout'
import '../styles/globals.css'
import { useEffect } from 'react';
import Router from 'next/router';
import { ThemeProvider } from 'next-themes'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Analytics } from '@vercel/analytics/react';

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <ThemeProvider attribute="class">
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
      <Analytics />
    </>
  )
}

export default MyApp
