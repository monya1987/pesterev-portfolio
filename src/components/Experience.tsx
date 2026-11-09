import { experience } from '../data/content'
import styles from './Experience.module.css'

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="wrap">
        <p className="eyebrow">// experience</p>
        <div className={styles.timeline}>
          {experience.map((job, i) => (
            <div key={i} className={styles.job}>
              <div className={styles.meta}>
                <div className={styles.period}>{job.period}</div>
                <div className={styles.company}>{job.company}</div>
              </div>
              <div className={styles.body}>
                {job.current && <div className={styles.badgeNow}>● current</div>}
                <div className={styles.role}>{job.role}</div>
                <p className={styles.desc}>{job.desc}</p>
                {job.bullets && (
                  <ul className={styles.bullets}>
                    {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                )}
                <div className={styles.tags}>
                  {job.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
