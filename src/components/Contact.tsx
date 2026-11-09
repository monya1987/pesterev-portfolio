import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { meta } from '../data/content'
import styles from './Contact.module.css'

export function Contact() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { to_email: email, cv_url: `${window.location.origin}${meta.cvUrl}` },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section">
      <div className="wrap">
        <p className="eyebrow">// contact</p>
        <div className={styles.grid}>

          <div className={styles.info}>
            <h3>Get in touch</h3>
            <p>Open to remote, hybrid, and on-site roles worldwide.</p>
            <div className={styles.links}>
              <a href={meta.linkedin} target="_blank" rel="noreferrer" className={styles.link}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                linkedin.com/in/mihail-pesterev
              </a>
              <a href={`mailto:${meta.email}`} className={styles.link}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,12 2,6"/>
                </svg>
                {meta.email}
              </a>
            </div>
          </div>

          <div className={styles.sendBox}>
            <h3>Receive CV by email</h3>
            <p>Enter your address and I'll send my CV directly to your inbox.</p>
            {status !== 'done' ? (
              <form onSubmit={handleSubmit}>
                <div className={styles.row}>
                  <input
                    type="email"
                    className={styles.input}
                    placeholder="your@company.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    disabled={status === 'sending'}
                  />
                  <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                    {status === 'sending' ? '...' : 'Send'}
                  </button>
                </div>
                {status === 'error' && (
                  <p className={styles.err}>Something went wrong. Try emailing directly.</p>
                )}
              </form>
            ) : (
              <div className={styles.success}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                CV sent! Check your inbox.
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
