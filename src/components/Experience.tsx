import { Timeline, useMatches } from "@mantine/core";
import { IconBriefcaseFilled } from "@tabler/icons-react";
import { ExperienceInfo } from "../User";

const TimelineItem = (items: any) => {
    const size = useMatches({
        xs: 15,
        md: 20,
    })
    return items.map((item: any, index: number) => (
        <Timeline.Item data-aos="fade-up" data-aos-duration="800" className="!pt-12 !mb-2 sm-mx:!p-1 "
            bullet={<IconBriefcaseFilled className="!text-bgColor" size={size} />} lineVariant="solid" key={index}>
            {/* Main div */}
            <div className="border flex shadow-[0_0_10px_0_#64ffda50] flex-col gap-2 border-primaryColor p-4 rounded-2xl sm-mx:p-2 ">
                {/* Second main div */}
                <div className="flex gap-2 items-center">
                    <img className="rounded-lg w-16 md-mx:w-14" src={`/${item.company}.png`} alt="Company" />
                    {/* Third main div */}
                    <div className="flex flex-col ">
                        <div className="text-white text-2xl font-semibold sm-mx:text-xl xs-mx:text-lg xsm-mx:text-base ">{item.role}</div>
                        <div className="text-lg font-semibold md-mx:text-base sm-mx:text-sm xs-mx:text-xs text-textColor ">{item.company} &#x2022; {item.date}</div>
                    </div>
                </div>
                {/* Fourth Skills ka div */}
                <div className="text-textColor text-justify leading-6 md-mx:text-sm xs-mx:text-xs">
                    {item.desc}
                </div>
                <div className="text-lg font-medium text-textColor md-mx:text-base sm-mx:text-sm xs-mx:text-xs flex gap-1 ">
                    <div className="font-semibold text-lg text-white ">Skills:</div> {/* Skills div */}
                    <div className="flex gap-1 flex-wrap ">
                        {
                            item.skills.map((skill: any, index: number) => <div key={index} > &#x2022; {skill}
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </Timeline.Item>
    ));
};

const Experience = () => {
    const size=useMatches({
        xs:15,
        md:20,
    })
    const dot=useMatches({
        xs:25,
        md:30,
    })
    return <div className="px-16 mx-20 md-mx:px-6 sm-mx:px-2 lg-mx:mx-0 my-10 mb-28 dm-mono-medium " id="Experience">
        <h1 className="text-4xl font-bold text-white mb-10 text-center sm-mx:text-3xl xs-mx:text-2xl">
            <span className="text-primaryColor">04.&nbsp;</span> Experience
        </h1>
        <Timeline color="#64ffda" active={5} bulletSize={dot} lineWidth={2} className="!text-bgColor">
            {
                TimelineItem(ExperienceInfo)
            }
            <Timeline.Item lineVariant="dashed" bullet={<IconBriefcaseFilled className="!text-bgColor" size={size} />} >
            </Timeline.Item>
        </Timeline>
    </div>

};

export default Experience;