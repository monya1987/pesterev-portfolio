import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>// mihail pesterev · {new Date().getFullYear()}</p>
    </footer>
  )
}
