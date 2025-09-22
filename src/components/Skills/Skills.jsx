
import styles from './Skills.module.scss'
import Box from '../Box/Box'
import SkillsPlaceholder from '../SkillsPlaceholder/SkillsPlaceholder'
import IconReact from '../../assets/Svg/IconReact'
import IconJS from '../../assets/Svg/IconJS'
import IconJava from '../../assets/Svg/IconJava'
import IconCpp from '../../assets/Svg/IconCpp'
import IconPython from '../../assets/Svg/IconPython'
import IconSpring from '../../assets/Svg/IconSpring'
import IconSQL from '../../assets/Svg/IconSQL'
import IconAWS from '../../assets/Svg/IconAWSCloud'

const Skills = () => {
  return (
    <div id='skills'>
      <Box title={'Skills'} className= {styles.skillsBox}
        content={ <div className={styles.skillsDisplay}>
                    <SkillsPlaceholder title="React" Icon={IconReact}/>
                    <SkillsPlaceholder title="JavaScript" Icon={IconJS}/>
                    <SkillsPlaceholder title="Java" Icon={IconJava}/>
                    <SkillsPlaceholder title="C++" Icon={IconCpp}/>
                    <SkillsPlaceholder title="Python" Icon={IconPython}/>
                    <SkillsPlaceholder title="Spring" Icon={IconSpring}/>
                    <SkillsPlaceholder title="SQL" Icon={IconSQL}/>
                    <SkillsPlaceholder title="AWS Cloud" Icon={IconAWS}/> 
                  </div>
                }>
      </Box>
    </div>
  )
}

export default Skills
