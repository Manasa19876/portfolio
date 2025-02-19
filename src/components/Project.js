import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Project = () => {
    const [title, setTitle] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [source, setSource] = useState('');
    const [techs, setTechs] = useState([]);
    const location = useLocation();

    useEffect(() => {
        if (location.state) {
            setTitle(location.state.title);
            setDescription(location.state.description);
            setImgUrl(location.state.imgUrl);
            setLink(location.state.link);
            setSource(location.state.source);
            setTechs(location.state.techs);
        }
    }, [location])

    return (
        <div className="projectPage">
            <img src={imgUrl} alt={title} width="100%" height="100%" />
            <div className="projectPage_text">
                <h4>{title}</h4>
                <span>{description}</span>
                {techs &&
                    <div className="techs">
                        <h5>Tech Used: </h5>
                        <h6>
                            {techs.map((tech, id) => (
                                <span key={id}>
                                    {tech} ,
                                </span>
                            ))}
                        </h6>
                    </div>
                }
                <div className="project_btn">
                    {link &&
                        <button className="live">
                            <Link className="btn" to={link} target="_blank">
                                Live Link
                            </Link>
                        </button>
                    }
                    {source &&
                        <button className="source">
                            <Link className="btn" to={link} target="_blank">
                                Source Code
                            </Link>
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Project