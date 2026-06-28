import styles from './Skills.module.css'

const skillsData = [
    {
        category: 'Frontend',
        skills: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Three.js', 'Responsive Design']
    },
    {
        category: 'Backend & APIs',
        skills: ['Django', 'FastAPI', 'REST APIs', 'Python']
    },
    {
        category: 'AI / ML',
        skills: ['LangChain', 'Agentic AI', 'OpenRouter', 'LLM Integration']
    },
    {
        category: 'Tools',
        skills: ['Git', 'GitHub', 'Figma', 'Render', 'Vercel', 'Netlify']
    }
]


const Skills = () => {
    return (
        <section className={styles.skills} id='skills'>
            <div className="sectionHeader">
                <p className="label">What I Work With</p>
                <h2>Skills & Technologies</h2>
            </div>

            <div className={styles.grid}>
                {skillsData.map((group) => (

                    <div className={styles.card} key={group.category}>

                        <h3 className={styles.category}>{group.category}</h3>
                        <ul className={styles.skillList}>
                            {group.skills.map((skill) => (
                                <li key={skill} className={styles.skillTag}>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills
