import { ThemeProvider } from 'styled-components';
import { useEffect } from 'react';
import '../styles/globals.css';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import 'swiper/components/scrollbar/scrollbar.min.css';
import 'swiper/swiper.min.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const theme = {
  colors: {
    textColorPrimary: '#9C9C9C',
    texColorPrimaryLight: '#BFBFBF',
    backgroundPrimary: '#f9f9f9',
    backgroundSecondary: '#F5F5F5'
  }
};

export default function App({ Component, pageProps }) {
  useEffect(() => {
    document.querySelector(':root').style.setProperty('--vh', window.innerHeight / 100 + 'px');
    if (window) {
      window.scrollTo(0, 0);
      window.addEventListener('resize', () => {
        document.querySelector(':root').style.setProperty('--vh', window.innerHeight / 100 + 'px');
      });
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
