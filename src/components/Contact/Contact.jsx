import styles from './Contact.module.scss'
import Box from '../Box/Box'
import Placeholder from '../Placeholder/Placeholder';
import GithubIcon from '../../assets/svg/GithubIcon';
import LinkedinIcon from '../../assets/svg/LinkedinIcon';
import EmailIcon from '../../assets/svg/EmailIcon';
import WhatsappIcon from '../../assets/svg/WhatsappIcon';
import InstagramIcon from '../../assets/svg/InstagramIcon';
import PhoneIcon from '../../assets/svg/PhoneIcon';
import ResumeIcon from '../../assets/svg/ResumeIcon';

const Contact = () => {
  return (
    <div id='contact'>
      <Box title={'Contact me'} className= {styles.contactBox}
        content={ <div> 
                      <div className={styles.contactIcons}>
                     <a href='https://github.com/alissontfraga' target='_blank' rel="noopener noreferrer">
                      <Placeholder title="Github" Icon={GithubIcon} iconWrapperClassName={styles.customiconWrapper}/></a>

                      <a href='https://www.linkedin.com/in/alissontelesfraga/' target='_blank' rel="noopener noreferrer"><Placeholder title="LinkedIn" Icon={LinkedinIcon} iconWrapperClassName={styles.customiconWrapper}/></a>

                      <a href='https://wa.me/5575983702003' target='_blank' rel="noopener noreferrer">
                      <Placeholder title="Whatsapp" Icon={WhatsappIcon} iconWrapperClassName={styles.customiconWrapper}/></a>

                      <a href='https://www.instagram.com/alissontfraga/' target='_blank' rel="noopener noreferrer">
                      <Placeholder title="Instagram" Icon={InstagramIcon} iconWrapperClassName={styles.customiconWrapper}/></a>
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
