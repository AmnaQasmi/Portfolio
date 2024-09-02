import { Info, socialLinks } from "../User"

const Footer = () => {
  const socialIcons = socialLinks.map((socialLink) => {
    return <a href={`${socialLink.link}`} target="_blank" rel="noreferrer" className="dm-mono-medium text-lg hover:text-primaryColor hover:scale-105 transition transform duration-300 ease-in-out " >
       <socialLink.icon size={30}  />
        
    </a>
})
  return (
    <div className=" mt-20 mb-10 dm-mono-medium my-10 flex flex-col items-center gap-2 " >
      <div className="text-primaryColor text-3xl md-mx:text-2xl font-semibold ">{Info.name}</div>
      <div className="md-mx:flex hidden text-textColor gap-8 sm-mx:gap-6  ">{socialIcons}</div>
      <div className="text-textColor text-xl md-mx:text-lg sm-mx:text-base xs-mx:text-sm xsm-mx:flex flex-col items-center ">Copyright &copy; {new Date().getFullYear()} {Info.name} <span className="xs-mx:hidden ">|</span> <span className="">All Rights Reserved</span> </div>
    </div>
  )
}

export default Footer;
