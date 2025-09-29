import styles from './Contact.module.scss'
import Box from '../Box/Box'
import Placeholder from '../Placeholder/Placeholder'
import githubIcon from '../../assets/Svg/githubIcon'
import linkedinIcon from '../../assets/Svg/linkedinIcon'
import EmailIcon from '../../assets/Svg/EmailIcon'
import whatsappIcon from '../../assets/Svg/whatsappIcon'
import instagramIcon from '../../assets/Svg/instagramIcon'
import PhoneIcon from '../../assets/Svg/PhoneIcon'
import ResumeIcon from '../../assets/Svg/ResumeIcon'

const Contact = () => {
  return (
    <div id='contact'>
      <Box title={'Contact me'} className= {styles.contactBox}
        content={ <div> 
                      <div className={styles.contactIcons}>
                     <a href='https://github.com/alissontfraga' target='_blank'>
                      <Placeholder title="Github" Icon={githubIcon} iconWrapperClassName={styles.customiconWrapper}/></a>

                      <a href='https://www.linkedin.com/in/alissontelesfraga/' target='_blank'><Placeholder title="LinkedIn" Icon={linkedinIcon} iconWrapperClassName={styles.customiconWrapper}/></a>

                      <a href='https://wa.me/5575983702003' target='_blank'>
                      <Placeholder title="Whatsapp" Icon={whatsappIcon} iconWrapperClassName={styles.customiconWrapper}/></a>

                      <a href='https://www.instagram.com/alissontfraga/' target='_blank'>
                      <Placeholder title="Instagram" Icon={instagramIcon} iconWrapperClassName={styles.customiconWrapper}/></a>
                      </div>
                      <div className={styles.contactStatic}>
                        
                      <a><EmailIcon/> <p>AlissonTFContato2@gmail.com</p> </a>
                      <a><PhoneIcon /> <p> +55 (75) 983702003 </p> </a>
                      <a href="/AlissonFraga_Currículo.pdf" download><ResumeIcon /> <p>Download Resume</p> </a>

                      </div>
                  </div>
                }>
      </Box>
    </div>
  )
}

export default Contact
