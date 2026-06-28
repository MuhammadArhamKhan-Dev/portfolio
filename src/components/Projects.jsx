import styles from "./Projects.module.css"
import langAssistImg from "../assets/ailangassist.jpg"
import threadImg from "../assets/threadImg.jpg"
import countrisImg from "../assets/countrisImg.jpg"

const projectsData = [
    {
        id: 1,
        title: 'AI LangAssist',
        description: 'Full-stack AI language assistant with React frontend, FastAPI backend, and LangChain for LLM orchestration.',
        image: langAssistImg,
        tags: ['React.js', 'FastAPI', 'LangChain', 'OpenRouter'],
        live: 'https://ailangassist.vercel.app/',
        github: 'https://github.com/MuhammadArhamKhan-Dev/Ai-LangAssist'
    },
    {
        id: 2,
        title: 'Thread',
        description: 'Complete frontend for a dummy clothing brand with hero section, product cards, pricing layout, and responsive design.',
        image: threadImg,
        tags: ['HTML5', 'CSS3', 'JavaScript'],
        live: 'https://thread-clothing.vercel.app/',
        github: 'https://github.com/MuhammadArhamKhan-Dev/Thread-Clothing-Landing-Page'
    },
    {
        id: 3,
        title: 'Countris',
        description: 'React SPA with search, filter, dark mode toggle, and client-side routing using REST Countries API.',
        image: countrisImg,
        tags: ['React.js', 'REST APIs'],
        live: 'https://countris-restapi.netlify.app/',
        github: 'https://github.com/MuhammadArhamKhan-Dev/Countris-RESTAPIProject'
    }
]

const Projects = () => {
    return (
        <section className={styles.projects} id="projects">
            <div className="sectionHeader">
                <p className="label">What I've built</p>
                <h2>Projects</h2>
            </div>

            <div className={styles.grid}>
                {projectsData.map((project) => (
                    <div key={project.id} className={styles.card}>

                        <h2 className={styles.title}>{project.title}</h2>

                        <div className={styles.imageContainer}>
                            <img src={project.image} alt={project.title} />
                        </div>

                            <p className={styles.description}>{project.description}</p>

                        <ul className={styles.skillList}>
                            {project.tags.map((tag) => (
                                <li key={tag}>{tag}</li>
                            ))}
                        </ul>

                        <div className={styles.buttons}>
                            <a className={styles.btnLive} href={project.live} target="_blank" rel="noopener noreferrer">Live</a>
                            <a className= {styles.btnGithub} href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>


    )
}

export default Projects
