import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from 'framer-motion';
import "react-vertical-timeline-component/style.min.css"
import { styles } from "../styles";
import { experiences } from "../constants";
import { textVariant } from './../utils/motion';
import SectionWrapper from './../hoc/SectionWrapper';

const ExperienceCard = ({experience})=>(
  <VerticalTimelineElement
  contentStyle={{background: "#1d1836", color: "white"}}
  contentArrowStyle={{borderRight: "7px solid #232631"}}
  date={experience.date}
  iconStyle={{background: experience.iconBg}}
  icon={
    <div className="flex items-center justify-center w-full h-full">
      <img src={experience.icon} alt={experience.title} className="w-[60%] h-[60%] object-contain" />
    </div>
  }
  >
  <div>
    <h3 className="text-white font-bold text-[24px]">{experience.title}</h3>
    <p className="text-secondary font-semibold text-[16px]" style={{margin: 0}}>{experience.company_name}</p>
  </div>
  <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, i) => (
        <li className="text-white-100 text-[14px] pl-1 tracking-wider" key={`experience-point-${i}`}>
          {point}
        </li>
      ))}
  </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
    <motion.div
    variants={textVariant()}
    >
    <p className={styles.sectionSubText}>What I have done so far</p>
    <h1 className={styles.sectionHeadText}>Work Experience. </h1>
    </motion.div>
    <div className="flex flex-col mt-20">
      <VerticalTimeline>
        {experiences.map((experience, i) =>(
          <ExperienceCard key={i} experience={experience}/>
        ))}
      </VerticalTimeline>
    </div>
    </>
    )
  }
  
  export default SectionWrapper(Experience, "work")