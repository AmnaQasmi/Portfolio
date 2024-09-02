
import { Info } from "../User";
// // @ts-ignore
// import DOTS from 'vanta/src/vanta.dots';
// // @ts-ignore
// import TRUNK from 'vanta/src/vanta.trunk';
import Typewriter from "typewriter-effect";
// @ts-ignore
import Particles from "./magicui/Particles";
import { Button, useMatches } from "@mantine/core";
import { NeonGradientCard } from "./magicui/neon-gradient-card";
import { useDisclosure } from "@mantine/hooks";
import ResumeViewer from "./ResumeViewer";
import { IconDownload } from "@tabler/icons-react";

const About = () => {
    const [opened, { open, close }] = useDisclosure(false);
    //   so you can do above and down method what ever you want
    // const handleClick = () => {
    //     window.open('/resume.png', '_blank', "a");
    //   };

    // const [dots, setDots] = useState<any>(null);

    // const [trunk, setTrunk] = useState<any>(null);

    // useEffect(() => {
    //     if (!dots) {
    //         setDots(DOTS({
    //             el: "#bg",
    //             mouseControls: true,
    //             touchControls: true,
    //             gyroControls: false,
    //             minHeight: 200.00,
    //             minWidth: 200.00,
    //             scale: 1.00,
    //             scaleMobile: 1.00,
    //             color: 0x64ffda,
    //             color2: 0x204aff,
    //             backgroundColor: 0x0A192F,
    //             size: 2.8,
    //             spacing: 20,
    //             showLines: false
    //         }))
    //     }

    //     if (!trunk) {
    //         setTrunk(TRUNK({
    //             el: "#photo",
    //             mouseControls: true,
    //             touchControls: true,
    //             gyroControls: false,
    //             minHeight: 200.00,
    //             minWidth: 200.00,
    //             scale: 1.00,
    //             scaleMobile: 1.00,
    //             color: 0x64ffda,
    //             backgroundColor: 0x0A192F,
    //             spacing: 0,
    //             chaos: 4
    //         }))
    //     }

    //     return () => {
    //         // NOTE: If you won't apply it the after 2-3 times use of your website , the website may get slow 
    //         if (dots) dots.destroy();
    //         if (trunk) trunk.destroy();
    //     }
    // }, [])
    const btn = useMatches({
        xs: 'xs',
        sm: 'sm',
        md: 'md',
        lg: 'lg',
      });
    return (
        <>
            <div data-aos="zoom-out-up" data-aos-duration="800" className="mt-28 flex relative overflow-hidden justify-around items-center font-mono px-10 py-10 sm-mx:px-4 xs-mx:px-2 xs-mx:py-4 h-fit lg-mx:justify-between bs-mx:flex-wrap bs-mx:flex-col-reverse bs-mx:!overflow-visible bs-mx:gap-6 md-mx:px-6" id="About" >
            <Particles
        className="absolute -z-20 inset-0"
        quantity={1000}
        // to move particles automatically
        vx={.1}
        vy={.1}
        ease={80}
        color="#64ffda"
        refresh
      />
                {/* Left side div content */}
                <div className="bs:ml-10 bs:w-3/5 flex flex-col lg-mx:gap-3  bs-mx:items-center">
                    <div className="text-primaryColor text-3xl lg-mx:text-2xl xs-mx:text-xl xsm-mx:text-lg ">Hi' I am</div>
                    <div className="text-white text-[4.25rem] font-extrabold lg-mx:text-5xl sm-mx:text-4xl xs-mx:text-3xl xsm-mx:text-[27px] ">{Info.name}</div>

                    {/* Typewritter content */}
                    <div className="text-white text-4xl flex font-semibold lg-mx:[27px] sm-mx:text-2xl xs-mx:text-xl xsm-mx:text-lg ">I'm a&nbsp;<span className="text-primaryColor"> <Typewriter options={{ strings: Info.stack, autoStart: true, loop: true }}
                    /> </span> </div>
                    <div className="text-textColor w-[90%] text-xl my-8 lg-mx:my-0 font-semibold text-justify lg-mx:text-base sm-mx:text-sm xs-mx:text-xs "> {Info.bio} </div>
                    <div className="flex gap-3">
                        <Button onClick={open} variant="filled" className="!text-bgColor !w-fit" color="#64ffda" size={btn} >Check Resume</Button>
                        <Button onClick={open} variant="outline" className="!text-primaryColor !w-fit" color="#64ffda" size={btn} rightSection={<IconDownload size={20} />} >Download</Button>

                    </div>
                </div>
                {/* overflow-hidden is used for to be on the background */}
                <div className="h-fit flex justify-center items-center rounded-full bs:mr-10 w-fit " id="photo">
                    {/* Right side div content */}

                    <NeonGradientCard className="w-[325px] h-[325px] lg-mx:w-64 lg-mx:h-64 xsm-mx:w-56 xsm-mx:h-56 items-center justify-center text-center">
                        <img className="w-full h-full rounded-full " src="/profile photo.jpg" alt="profile photo" />
                    </NeonGradientCard>

                </div>
            </div>
            <ResumeViewer opened={opened} close={close} />
        </>
    )
}

export default About;

