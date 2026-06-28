import profileImg from '../assets/profile(no-bg)2.jpeg'
import styles from "./About.module.css"

const About = () => {
  return (
    <section id="about" className={styles.about}>

      <div className={styles.left}>
        <img src={profileImg} alt="Muhammad Arham Khan" />
      </div>

      <div className={styles.right}>
        <p className={styles.label}>About Me</p>
        <h2>Passionate about <span className={styles.accent}>building things that matter</span></h2>
        <p className={styles.bio}>
            I'm a Computer & Information Systems Engineering student at 
            NED University with a CGPA of 3.38, passionate about building 
            real-world web applications and AI-powered experiences.
        </p>
        <p className={styles.bio}>
            I enjoy turning complex problems into clean, intuitive interfaces 
            — from React frontends to Django and FastAPI backends, and 
            integrating modern AI with LangChain and LLMs.
        </p>
        <p className={styles.bio}>
            Currently looking for internship and collaboration opportunities 
            where I can contribute, grow, and build something meaningful.
        </p>
        <a href="/Arham_Khan_resume.pdf" className={styles.btnCV} download>
            Download CV
        </a>
      </div>

    </section>
  )
}

export default About