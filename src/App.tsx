
import {Helmet} from "react-helmet";
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import HomePage from './components/HomePage';
import { pdfjs } from 'react-pdf';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { SmoothCursor } from "../src/components/magicui/Smooth-Cursor";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();


export function App() {
  useEffect(()=>{
    AOS.init();
    AOS.refresh();
  }, [])

const theme = createTheme({
  breakpoints: {
    'xs': '320px',
    'sm': '476px',
    'md': '640px',
    'bs': '768px',
    'lg': '900px',
    'xl': '1024',
    '2xl': '1280',
  },
});



  return (
    <MantineProvider theme={theme}>
    
    <Helmet>
        <title>AmnaQ Portfolio</title>
        <meta name="description" content="Amna's portfolio showcasing web development skills." />
        <meta property="og:title" content="Amna Qasmi Portfolio" />
        <meta property="og:description" content="Amna's portfolio showcasing web development skills." />
        <meta property="og:image" content="/path-to-image.jpg" />
        {/* Additional meta tags if needed */}
      </Helmet>
      {/* <SmoothCursor /> */}
      <HomePage />
    </MantineProvider>
  );
}
export default App;