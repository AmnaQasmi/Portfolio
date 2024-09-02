import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandX, IconBrandYoutube } from "@tabler/icons-react";


const Social = () => {
    const socialLinks = [
        { link: "https://github.com/AmnaQasmi", icon: IconBrandGithub },
        { link: "https://www.instagram.com/amnaaltaf360", icon: IconBrandInstagram },
        { link: "https://www.facebook.com/profile.php?id=61564648795671", icon: IconBrandFacebook },
        { link: "https://www.youtube.com/@CodeG.KwithAmna", icon: IconBrandYoutube },
        { link: "x.com/AmnaQasmi360", icon: IconBrandX }]

    const socialIcons = socialLinks.map((socialLink) => {
        return <a href={`${socialLink.link}`} target="_blank" rel="noreferrer" className="dm-mono-medium text-lg hover:text-primaryColor hover:-translate-x-2 transition transform duration-300 ease-in-out " >
            <div data-aos="fade-up-left" data-aos-duration="800"> <socialLink.icon size={30} className="-rotate-90 " />
            </div >
        </a>
    })

    return (
        <div className="flex text-textColor md-mx:hidden items-center gap-8 fixed bottom-32 -left-48 rotate-90 ">
            {socialIcons}
            <hr className="border rounded-full w-40 text-textColor bg-textColor border-textColor " />
        </div>
    )
}

export default Social;
