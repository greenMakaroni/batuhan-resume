import "./project.scss"
import useWindowDimensions from "../../useWindowDimensions"

export default function Project({image, title, description, learned, link}) {
    const { width, height } = useWindowDimensions();
  return (
    <div className="project-main">
        <h2 className="project-title">
            { title }
        </h2>

        <div className="description">
            <h3 className="section-title">
                Description
            </h3>
            <p className="desc-par">
                { description }
            </p>
        </div>
        <div className="learned">
            <h3 className="section-title">
                Things I've learned
            </h3>
            {
                learned.map(par => 
                    <ul>
                        <li>
                            <p className="desc-par">
                                {par}
                            </p>
                        </li>
                    </ul>
                )
            }
        </div>
        <button className="bannerCTO">
            <a href={link} className="CTO-anchor"> GO TO PROJECT </a>
        </button>
    </div>
  )
}
