import styles from './Education.module.scss';
import Box from '../Box/Box';
import EducationCard from '../EducationCard/EducationCard';
import educationimg1 from '../../assets/images/educationimg1.png';
import educationimg2 from '../../assets/images/educationimg2.png';
import educationimg3 from '../../assets/images/educationimg3.png';


const Education = () => {
  return (
    <section id="education">
        <Box title={'Education'} className={styles.educationBox}>
            <div className={styles.educationDisplay}>
                <EducationCard image={educationimg3} title={"Harvard - Computer Science (CS50x)"}/>
                <EducationCard image={educationimg1} title={"Cisco - Cyber Threat Management"}/>
                <EducationCard image={educationimg2} title={"AWS - Cloud Foundations"}/>
                <EducationCard title={"Anhanguera - Software Engineer (in progress)"}/>
            </div>

        </Box>
      
    </section>
  )
}

export default Education
