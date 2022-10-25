import "./skillBar.scss"

export default function SkillBar( {skill} ) {
  return (
    <div className="skill-base">
        <div className="skill-lvl" style={{width: `${20 * skill}px`}}>
        </div>
    </div>
  )
}
