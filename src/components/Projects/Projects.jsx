
import styles from './Projects.module.scss'
import ProjectCard from '../ProjectCard/ProjectCard'
import projectimg1 from '../../assets/images/projectimg1.png'
import projectimg2 from '../../assets/images/projectimg2.png'
import projectimg3 from '../../assets/images/projectimg3.png'
import projectimg4 from '../../assets/images/projectimg4.png'
import projectimg5 from '../../assets/images/projectimg5.png'
import Box from '../../components/Box/Box'


const Projects = () => {
  return (
      <section id='projects'>
        <Box title="Projects" className="projectsBox">
          
            <ProjectCard 
            image={projectimg5}
            title="Unspoken Words"
            description="Full-stack web app (Java Spring Boot + React) where users can write and store words they never said.  Features User authentication (JWT + HttpOnly cookies), 
            Create personal messages, View your own messages, Delete messages, Categories for unspoken words, Validations.
            "> 
            <a href="https://github.com/alissontfraga/unspokenwords" target='_blank' rel="noopener noreferrer">Link</a> </ProjectCard> 

            <ProjectCard 
            image={projectimg4}
            title="Subscription Tracker"
            description="Backend API (Java Spring Boot) for tracking and managing user subscriptions.
            Features: User authentication (JWT / Bearer Token), role-based access control (USER / ADMIN), subscription CRUD (price, currency, category, billing frequency, status), admin endpoints, API documentation with OpenAPI / Swagger, database migrations with Flyway, and automated unit and integration tests.
            "> 
            <a href="https://github.com/alissontfraga/subscriptiontracker" target='_blank' rel="noopener noreferrer">Link</a> </ProjectCard> 

            <ProjectCard 
            image={projectimg1}
            title="Portfolio Website"
            description="This is a portfolio I created for myself, using Javascript, HTML, CSS, and responsive design.
            "> 
            <a href="https://github.com/alissontfraga/landing-page" target='_blank' rel="noopener noreferrer">Link</a> </ProjectCard> 


             <ProjectCard 
            image={projectimg2}
            title="Online Timer"
            description="This is an online timer I made using Javascript, CSS, and HTML, which uses local storage to save the timer's progress, so you can close the page without losing the time."> 
            <a href="https://github.com/alissontfraga/alissontf-timer" target='_blank' rel="noopener noreferrer">Link</a> </ProjectCard>
            
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
