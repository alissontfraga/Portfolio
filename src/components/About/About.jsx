import styles from '../About/About.module.scss';
import Box from '../Box/Box';

const About = () => {
  return (
    <div id='about'>
      <Box title={'About me'}
      content={ <div className={styles.text}> 
                    <p>I've been studying software engineering since December 2024. I have basic knowledge of React, JavaScript, Java, C, C++, CSS, Spring, HTML, SQL, Git, Github, AWS Cloud, and intermediate English.</p> 
                </div>}
                />
    </div>
  )
}

export default About
