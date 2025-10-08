
import styles from './Projects.module.scss'
import ProjectCard from '../ProjectCard/ProjectCard'
import projectimg1 from '../../assets/images/projectimg1.png'
import projectimg2 from '../../assets/images/projectimg2.png'
import projectimg3 from '../../assets/images/projectimg3.png'
import projectimg4 from '../../assets/images/projectimg4.png'
import Box from '../../components/Box/Box'


const Projects = () => {
  return (
      <section id='projects'>
        <Box title="Projects" className="projectsBox">
            <ProjectCard 
            image={projectimg1}
            title="Portfolio Website"
            description="This is a portfolio I created for myself, using Javascript, HTML, CSS, and responsive design.
            "> 
            <a href="https://github.com/alissontfraga/projeto-de-cordel" target='_blank' rel="noopener noreferrer">Link</a> </ProjectCard> 

            <ProjectCard 
            image={projectimg4}
            title="User Registration System"
            description=" I developed a CRUD User Registration system in Java, with a simple layer architecture, using Java, Spring Boot, H2 Database, Spring Data JPA, Lombok, Maven, and Postman for test CRUD operations .
            "> 
            <a href="https://github.com/alissontfraga/cadastro-usuario" target='_blank' rel="noopener noreferrer">Link</a> </ProjectCard> 

             <ProjectCard 
            image={projectimg2}
            title="Online Timer"
            description="This is an online timer I made using Javascript, CSS, and HTML, which uses local storage to save the timer's progress, so you can close the page without losing the time."> 
            <a href="https://github.com/alissontfraga/landing-page" target='_blank' rel="noopener noreferrer">Link</a> </ProjectCard>
            
             <ProjectCard 
            image={projectimg3}
            title={`Milton Duarte's "Cordel Moderno"`}
            description="This is a parallax effect website I created using CSS and HTML, about the Cordel Moderno by Milton Duarte, for study purposes."> 
            <a href="https://github.com/alissontfraga/projeto-de-cordel" target='_blank' rel="noopener noreferrer">Link</a> </ProjectCard>
        </Box>
      </section>
  )
}

export default Projects
