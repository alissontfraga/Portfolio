
import styles from './Skills.module.scss';
import Box from '../Box/Box';
import Placeholder from '../Placeholder/Placeholder';
import IconReact from '../../assets/svg/IconReact';
import IconJS from '../../assets/svg/IconJS';
import IconJava from '../../assets/svg/IconJava';
import IconCpp from '../../assets/svg/IconCpp';
import IconPython from '../../assets/svg/IconPython';
import IconSpring from '../../assets/svg/IconSpring';
import IconSQL from '../../assets/svg/IconSQL';
import IconAWS from '../../assets/svg/IconAWSCloud';

const Skills = () => {
  return (
    <div id='skills'>
      <Box title={'Skills'} className= {styles.skillsBox}
        content={ <div className={styles.skillsDisplay}>
                    <Placeholder title="React" Icon={IconReact}/>
                    <Placeholder title="JavaScript" Icon={IconJS}/>
                    <Placeholder title="Java" Icon={IconJava}/>
                    <Placeholder title="C++" Icon={IconCpp}/>
                    <Placeholder title="Python" Icon={IconPython}/>
                    <Placeholder title="Spring" Icon={IconSpring}/>
                    <Placeholder title="SQL" Icon={IconSQL}/>
                    <Placeholder title="AWS Cloud" Icon={IconAWS}/> 
                  </div>
                }>
      </Box>
    </div>
  )
}

export default Skills
