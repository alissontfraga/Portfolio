import Box from '../Box/Box'
import { MdOutgoingMail } from "react-icons/md";
import { RxDownload } from "react-icons/rx";
import profileimg from '../../assets/images/profileimg.png'
import styles from '../Hero/Hero.module.scss'

const Hero = () => {
  return (
    <div id='hero'>
      <Box className={styles.box}> 
        <div className={styles.profileImgContainer}>
            <img src={profileimg} alt="Alisson Teles Fraga smiling facing forward in
             a well-lit indoor setting with a neutral background"/>
        </div>
        <div className={styles.profileText}>
            <h1>ALISSON TELES FRAGA</h1>
            <h2>Software Engineer</h2>
                <div className={styles.profileButtons}>
                    <a href="" ><RxDownload /> Download Resume</a>
                    <a href="#contact"><MdOutgoingMail /> Contact me</a>
                </div>
        </div>
      </Box>
    </div>
  )
}

export default Hero
