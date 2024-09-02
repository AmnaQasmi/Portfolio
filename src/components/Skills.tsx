import SkillCard from "./SkillCard"
import { skillInfo } from "../User"


const Skills = () => {
    return (
        <div className="px-16 dm-mono-medium my-10 md-mx:px-6" id="Skills">
            <h1 className="text-4xl font-bold text-white mb-10 text-center sm-mx:text-3xl xs-mx:text-2xl  
            "> <span className="text-primaryColor">03.&nbsp;</span>Skills </h1>
            <div className="justify-around md-mx:justify-between sm-mx:justify-center gap-4 md-mx:gap-2 flex flex-wrap">
                {
                    skillInfo.map((skill: any, index: number) => (<SkillCard key={index} title={skill.title} skills={skill.skills} />

                    ))
                }

            </div>
        </div>
    )
}

export default Skills
