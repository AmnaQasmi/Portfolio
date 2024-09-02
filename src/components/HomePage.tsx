import { Loader } from './Loader';
import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import Footer from './Footer';
import Header from './Header';
import Mail from './Mail';
import Project from './Project';
import Skills from './Skills';
import Social from './Social';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

const HomePage = () => {
  const [loading, setLoading] = useState (true);
  useEffect(() => {
setTimeout(()=>{
  setLoading(false)
}, 3000)
  }, [])
  return <div className={`min-h-[100vh] ${loading?"flex":""} items-center overflow-hidden justify-center `}>
  {    loading!==true?<>
    <Toaster/>
      <Header />
      <About />
      <Project />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
      <Mail />
      <Social />
      </>:
      <Loader />
      }
      
    </div>
}

export default HomePage

