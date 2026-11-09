import { meta } from '../data/content'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo}>mihail.dev</a>
        <nav>
          <ul className={styles.links}>
            <li><a href="#about">About</a></li>
            <li><a href="#stack">Stack</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <a href={meta.cvUrl} download className="btn btn-primary">↓ Download CV</a>
      </div>
    </header>
  )
}
