import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ProjectCard({ title, description, imgUrl, link, source, techs }) {
    const navigate = useNavigate();

    return (
        <Col size={12} sm={6} md={4}
            onClick={() =>
                navigate(`/${title}`,
                    {
                        state: {
                            title: title,
                            description: description,
                            imgUrl: imgUrl,
                            link: link,
                            source: source,
                            techs: techs
                        }
                    }
                )}
        >
            <div className="proj-imgbx">
                <img src={imgUrl} alt={title} width="100%" height="100%" />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}

export default ProjectCard;