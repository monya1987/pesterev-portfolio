import { about } from '../data/content'

export function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <p className="eyebrow">// about</p>
        {about.map((para, i) => (
          <p key={i} style={{ fontSize: 16, color: 'var(--fg-2)', maxWidth: 580, margin: '0 0 18px' }}
            dangerouslySetInnerHTML={{ __html: para }} />
        ))}
      </div>
    </section>
  )
}
