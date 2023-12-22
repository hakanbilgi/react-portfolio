import React from 'react'
import "./About.css"
import ME from "../../assets/me-about.jpg"
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    
        <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">

          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>Completed</small>
            </article>
          </div>

          <p>With over 3 years of experience in IT and 1+ year of experience in frontend development, I am interested in writing code, skilled at developing complex solutions and creating responsive designs, possessing strong creative thinking skills, high energy, and integrity. I am able to create algorithms effectively and interact positively and communicate appropriately with team members. I quickly grasp new technologies and concepts to develop innovative and creative solutions to problems. I am always eager to learn various technologies, tools, and libraries, especially in Front end/Web Development, HTML, CSS, JS, React. I am excited to learn new things and improve, and consider myself to be a lifetime student.</p>

          <a href="#contact" className='btn btn-primary' >Let's Talk</a>

        </div>

      </div>
    </section>
  )
}

export default About
