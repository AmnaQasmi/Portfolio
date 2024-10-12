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
import ChatBot from './ChatBot';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

const HomePage = () => {
  const [loading, setLoading] = useState (true);
  useEffect(() => {
setTimeout(()=>{
  setLoading(false)
}, 5000)
  }, [])
  return <div className={` focus-visible:[&_button]:!outline-none min-h-[100vh] ${loading?"flex":""} items-center overflow-hidden justify-center `}>
  {    loading!==true?<>
    <Toaster/>
      <Header />
      <ChatBot />
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

export default HomePage;

