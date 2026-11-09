import { stack } from '../data/content'
import styles from './Stack.module.css'

export function Stack() {
  return (
    <section id="stack" className="section">
      <div className="wrap">
        <p className="eyebrow">// stack</p>
        <div className={styles.pills}>
          {stack.primary.map(s => (
            <span key={s} className={`${styles.pill} ${styles.hi}`}>{s}</span>
          ))}
          {stack.secondary.map(s => (
            <span key={s} className={styles.pill}>{s}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
