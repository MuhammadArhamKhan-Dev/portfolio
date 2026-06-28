import { useState } from "react"
import styles from "./Header.module.css"


  const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
      setIsOpen(!isOpen)
    }
    return (
      <header className={styles.headerContainer}>
        <div className={styles.left}>
          <h1>Muhammad Arham <span>Khan</span></h1>
        </div>
        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
        <nav className={`${styles.navContainer} ${isOpen ? styles.navOpen : ''}`}>

          <ul>
            <li><a href='#home' onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href='#about' onClick={() => setIsOpen(false)}>About Me</a></li>
            <li><a href='#skills' onClick={() => setIsOpen(false)}>Skills</a></li>
            <li><a href='#projects' onClick={() => setIsOpen(false)}>Projects</a></li>
            <li><a href='#contact' onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </header>
    )
  }

export default Header
