
import { Col } from "react-bootstrap";

export const Projectscard = ({ title, description, imgUrl,estado }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-tot">
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="status-txt">{estado}</div>
      </div>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
        </div>
    </Col>
  )
}
