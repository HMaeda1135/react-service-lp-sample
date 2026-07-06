type SectionHeaderProps = {
  title: string
  lead?: string
}

function SectionHeader({ title, lead }: SectionHeaderProps) {
  return (
    <header className="section-header">
      <h2 className="section-title">{title}</h2>
      {lead && <p className="section-lead">{lead}</p>}
    </header>
  )
}

export default SectionHeader
