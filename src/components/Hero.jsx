import styles from "./Hero.module.css"
import Scene from "./Scene"
const Hero = () => {


    return (

        <section id="home" className={styles.heroContainer}>

            <div className={styles.left}>

                <p className={styles.greetings}>
                    Hi, I'm Muhammad Arham Khan
                </p>

                <h1>Full Stack Developer building real-world web apps and {" "} <span className={styles.accent}>AI-powered</span> experiences.</h1>

                <div className={styles.buttons}>
                    <a href="#projects" className={styles.btnPrimary}>View Projects</a>
                    <a href="#contact" className={styles.btnSecondary}>Contact Me</a>
                </div>
            </div>

            <div className={styles.right}>
            <Scene />
            </div>



        </section>

    )

}

export default Hero
