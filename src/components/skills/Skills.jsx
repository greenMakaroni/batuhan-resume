import SkillBar from "./SkillBar"
import "./skills.scss"

export default function Skills() {
  return (
    <div className="skills-section">
        <h1 className="skills-header">
            Skills & Expertise
        </h1>
        <div className="skills-block">
            <div className="single-skill">
                <h3 className="skill-title">
                    Python (8/10)
                </h3>
                <SkillBar skill={8} />
            </div>
            <div className="single-skill">
                <h3 className="skill-title">
                    R (7/10)
                </h3>
                <SkillBar skill={7} />
            </div>
            <div className="single-skill">
                <h3 className="skill-title">
                    SQL (7/10)
                </h3>
                <SkillBar skill={7} />
            </div>
            <div className="single-skill">
                <h3 className="skill-title">
                    MS Office (8/10)
                </h3>
                <SkillBar skill={8} />
            </div>
            <div className="single-skill">
                <h3 className="skill-title">
                    Tableau (7/10)
                </h3>
                <SkillBar skill={7} />
            </div>
            <div className="single-skill">
                <h3 className="skill-title">
                    MS Power BI (5/10)
                </h3>
                <SkillBar skill={5} />
            </div>
            <div className="single-skill">
                <h3 className="skill-title">
                    NLTK (8/10)
                </h3>
                <SkillBar skill={8} />
            </div>
            <div className="single-skill">
                <h3 className="skill-title">
                    TensorFlow (7/10)
                </h3>
                <SkillBar skill={7} />
            </div>
            <div className="single-skill">
                <h3 className="skill-title">
                    Pandas (8/10)
                </h3>
                <SkillBar skill={8} />
            </div>
            <div className="single-skill">
                <h3 className="skill-title">
                    Keras (8/10)
                </h3>
                <SkillBar skill={8} />
            </div>
            <div className="single-skill">
                <h3 className="skill-title">
                    Pytorch (6/10)
                </h3>
                <SkillBar skill={6} />
            </div>
            <div className="single-skill">
                <h3 className="skill-title">
                    AWS / Google Cloud (5/10)
                </h3>
                <SkillBar skill={5} />
            </div>
        </div>
    </div>
  )
}
