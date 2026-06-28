import styles from './Footer.module.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.text}>
                Designed & Built by <span className={styles.accent}>Muhammad Arham Khan</span>
            </p>
            <div className={styles.icons}>
                <a href="https://www.linkedin.com/in/arham-khan-dev" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/MuhammadArhamKhan-Dev" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
            </div>
        </footer>
    )
}

export default Footer