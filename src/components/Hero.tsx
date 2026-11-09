import { meta } from '../data/content'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className="wrap">
        <p className="eyebrow">// open to work · worldwide</p>
        <h1 className={styles.name}>{meta.name}</h1>
        <p className={styles.role}>{meta.role}</p>
        <p className={styles.bio}>{meta.bio}</p>
        <div className={styles.actions}>
          <a href={meta.cvUrl} download className="btn btn-primary">↓ Download CV</a>
          <a href="#contact" className="btn btn-outline">Send CV to email →</a>
        </div>
        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <span className={styles.dotGreen} />
            Open to work
          </div>
          <div className={styles.metaItem}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
              <circle cx="12" cy="9" r="2.5"/>
            </svg>
            {meta.location}
          </div>
        </div>
      </div>
    </section>
  )
}
