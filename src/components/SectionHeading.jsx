export default function SectionHeading({ badge, title, text, align = 'left', theme }) {
  return (
    <div className={`section-heading ${align}`}>
      {badge ? <div className={`section-badge ${theme}`}>{badge}</div> : null}
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  )
}
