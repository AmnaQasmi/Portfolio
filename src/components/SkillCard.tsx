import { Avatar } from "@mantine/core"

const SkillBadge =(skills: [])=> {
    return skills.map((skill:any,index:number)=><div key={index}  className="flex py-2 px-3 text-textColor border border-textColor rounded-2xl items-center bs-mx:px-1.5 bs-mx:py-0 bs-mx:gap-1 mb-1" >
        <img className="!w-[48px] bs-mx:w-[36px] xsm-mx:w-[28px] !p-1"  color="cyan" src={`/Icons/${skill}.png`} />
        <div className="text-xl font-normal text-textColor " >&nbsp;{skill}</div>

    </div> )
}

const SkillCard = (props: any) => {
  return (
    <div data-aos="fade-up" data-aos-duration="800" className="w-[47%] p-5 bs-mx:p-3 sm-mx:w-full sm-mx:text-2xl xs-mx:text-xl shadow-[0_0_10px_0_#64ffda50] rounded-2xl border border-primaryColor ">
        <div className="text-center font-bold text-white text-3xl mb-4 ">{props.title}</div>
      <div className="flex flex-wrap gap-3 bs-mx:gap-2 justify-center "> {SkillBadge(props.skills)} </div>
    </div>
  )
}

export default SkillCard
