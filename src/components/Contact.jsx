import styles from './Contact.module.css'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MdEmail } from 'react-icons/md'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Contact = () => {

    const formRef = useRef()
    const [status, setStatus] = useState('') // '', 'sending', 'sent', 'error'

    const handleSubmit = (e) => {
        e.preventDefault()
        setStatus('sending')

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                setStatus('sent')
                formRef.current.reset() // clears the form
            })
            .catch(() => {
                setStatus('error')
            })
    }

    return (
        <section id="contact" className={styles.contact}>

            <div className="sectionHeader">
                <p className="label">Get In Touch</p>
                <h2>Contact Me</h2>
                <p className={styles.subtitle}>
                    Have an opportunity or just want to say hi? My inbox is always open.
                </p>
            </div>

            <div className={styles.grid}>

                <div className={styles.info}>
                    <div className={styles.infoItem}>
                        <MdEmail className={styles.icon} />
                        <a href="karham937@gmail.com">karham937@gmail.com</a>
                    </div>
                    <div className={styles.infoItem}>
                        <FaLinkedin className={styles.icon} />
                        <a href="https://www.linkedin.com/in/arham-khan-dev" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                    <div className={styles.infoItem}>
                        <FaGithub className={styles.icon} />
                        <a href="https://github.com/MuhammadArhamKhan-Dev" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>

                <form
                    ref={formRef}
                    className={styles.form}
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        name="from_name"
                        placeholder="Your Name"
                        className={styles.input}
                        required
                    />
                    <input
                        type="email"
                        name="from_email"
                        placeholder="Your Email"
                        className={styles.input}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows={6}
                        className={styles.textarea}
                        required
                    />
                    <button
                        type="submit"
                        className={styles.btn}
                        disabled={status === 'sending'}
                    >
                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>

                    {/* feedback messages */}
                    {status === 'sent' && (
                        <p className={styles.success}>
                            Message sent successfully!
                        </p>
                    )}
                    {status === 'error' && (
                        <p className={styles.error}>
                            Something went wrong. Please try again.
                        </p>
                    )}
                </form>

            </div>

        </section>
    )
}

export default Contact